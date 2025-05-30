import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import Groq from 'groq-sdk';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Alert, Dimensions, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { app, auth } from '../../firebaseConfig';
import MaterialDisplay from '../components/MaterialDisplay';
import { extractValidResponse } from '../utils/extractValidResponse';
import { updateStageStatus } from '../utils/Material';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// --- ProgressBar Component ---
const ProgressBar = ({ current, total }) => {
    const progress = total > 0 ? (current / total) * 100 : 0;
    return (
        <View style={styles.progressBarOuterContainer}>
            <Text style={styles.progressText}>Soal {current} dari {total}</Text>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
            </View>
        </View>
    );
};

export default function QuizScreen() {
    const router =  useRouter();
    const { quizPlayQuestions, isHaveMaterial: isHaveMaterialParam = "true", stageId = null, expDailyChallenge = 0 } = useLocalSearchParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [material, setMaterial] = useState(null);
    const [isLoadingMaterial, setIsLoadingMaterial] = useState(false);
    const [materialError, setMaterialError] = useState(null);
    const [showMaterial, setShowMaterial] = useState(false);

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userCode, setUserCode] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);

    const isMaterialFeatureEnabled = useMemo(() => isHaveMaterialParam === "true", [isHaveMaterialParam]);

    const fetchMaterialForQuestion = async (parsedQuestions) => {
        const groqApiKey = process.env.EXPO_PUBLIC_GROQ_API_KEY;
        if (!groqApiKey) {
            console.warn("GROQ_API_KEY tidak ditemukan. Fitur materi AI tidak akan berfungsi.");
            setMaterialError("Konfigurasi AI belum lengkap untuk memuat materi.");
            setIsLoadingMaterial(false);
            setShowMaterial(true);
            return;
        }

        const groq = new Groq({ apiKey: groqApiKey, dangerouslyAllowBrowser: true });


        setIsLoadingMaterial(true);
        setMaterialError(null);
        setShowMaterial(true);

        try {
            const prompt = `
            Kamu adalah AI tutor CodePlay, ahli coding untuk anak-anak Indonesia usia 8-12 tahun.

Berikut adalah daftar soal yang diberikan:
${JSON.stringify(parsedQuestions, null, 2)}

Buatkan satu materi pembelajaran yang menjelaskan konsep-konsep dari soal tersebut (misalnya: variabel, fungsi, console.log, operasi matematika, dll).

Syarat materi:
- Maksimal 500 kata.
- Bahasa Indonesia yang sangat sederhana dan menyenangkan untuk anak-anak.
- Gunakan analogi atau contoh sehari-hari jika bisa.
- Format HARUS berupa JSON **valid**, dengan struktur sebagai berikut:

{
  "materialTitle": "Judul Materi yang Menarik",
  "introduction": "Paragraf pengantar yang menyemangati anak.",
  "contentBlocks": [
    {
      "type": "heading",
      "level": 2,
      "text": "Subjudul Konsep"
    },
    {
      "type": "paragraph",
      "text": "Penjelasan mudah dan contoh sederhana."
    },
    {
      "type": "code_snippet",
      "language": "javascript",
      "code": ["// Contoh kode", "console.log('Halo!');"],
      "explanation": "Penjelasan kode."
    },
    {
      "type": "list",
      "listType": "bullet",
      "items": ["Poin 1", "Poin 2"]
    },
    {
      "type": "tip",
      "icon": "lightbulb-on-outline",
      "text": "Fakta menarik atau tips seru!"
    }
  ]
}

Ketentuan:
- Gunakan 3–5 contentBlocks sesuai kebutuhan.
- JSON harus valid dan dapat langsung dipakai di komponen React Native bernama MaterialDisplay.
- **JANGAN** tulis teks apa pun di luar JSON.
- **JANGAN** beri penjelasan tambahan, ucapan pembuka, atau penutup.
- Output **hanya JSON valid**. Tidak ada markdown, tidak ada teks sebelum atau sesudahnya.
`;
            const chatCompletion = await groq.chat.completions.create({
                messages: [{ role: "user", content: prompt }],
                model: "llama3-70b-8192",
            });

            let responseContent = chatCompletion.choices[0]?.message?.content || "";


            const jsonOutput = extractValidResponse(responseContent);
            console.log(jsonOutput)
            console.log("Materi JSON yang diterima:", jsonOutput);
            setMaterial(JSON.parse(jsonOutput));
        } catch (e) {
            console.error("Error fetching material from AI:", e);
            setMaterialError("Gagal memuat materi dari AI. Coba lagi nanti ya!");
        } finally {
            setIsLoadingMaterial(false);
        }
    };

    useEffect(() => {
        let parsedQuestions = [];
        if (quizPlayQuestions) {
            try {
                parsedQuestions = JSON.parse(quizPlayQuestions);
                setQuestions(parsedQuestions);
            } catch (error) {
                console.error("Gagal parse quizPlayQuestions:", error);
                Alert.alert("Error Kuis", "Gagal memuat soal kuis. Silakan coba lagi.", [{ text: "Kembali", onPress: () => router.back() }]);
                return;
            }
        } else {
            Alert.alert("Error Kuis", "Tidak ada soal yang ditemukan untuk kuis ini.", [{ text: "Kembali", onPress: () => router.back() }]);
            return;
        }


        if (isMaterialFeatureEnabled && parsedQuestions.length > 0) {
            fetchMaterialForQuestion(parsedQuestions);
        } else {
            setShowMaterial(false); // Tidak ada materi atau fitur dimatikan
        }
    }, [quizPlayQuestions, isMaterialFeatureEnabled, router]); // Dependensi sudah benar


    useEffect(() => {

        setSelectedAnswer(null);
        setIsAnswered(false);
        setIsCorrect(null);
        if (questions.length > 0 && questions[currentQuestionIndex]) {
            setUserCode(questions[currentQuestionIndex]?.initialCode || '');
        }
    }, [currentQuestionIndex, questions]); // Dependensi sudah benar

    const currentQuestion = useMemo(() => {
        if (questions.length > 0 && currentQuestionIndex < questions.length) {
            return questions[currentQuestionIndex];
        }
        return null; // currentQuestion akan null jika tidak ada soal / index di luar batas
    }, [questions, currentQuestionIndex]);

    const handleAnswerSelect = (answer) => {
        if (isAnswered) return;
        setSelectedAnswer(answer);
    };

    const handleSubmitAnswer = () => {
        if (isAnswered || showMaterial || !currentQuestion) return;

        if ((currentQuestion.questionType === 'multiple-choice' && selectedAnswer === null) ||
            ((currentQuestion.questionType === 'fill-in-the-blank' || currentQuestion.questionType === 'guess-output') && (!selectedAnswer || selectedAnswer.trim() === ''))
        ) {
            Alert.alert("Hmm...", "Jangan lupa pilih atau isi jawabanmu dulu ya!");
            return;
        }

        let correct = false;
        const questionData = questions[currentQuestionIndex]; // Ambil data soal terkini

        if (questionData.questionType === 'multiple-choice') {
            correct = selectedAnswer === questionData.correctAnswer;
        } else if (questionData.questionType === 'fill-in-the-blank' || questionData.questionType === 'guess-output') {
            correct = selectedAnswer && selectedAnswer.trim().toLowerCase() === questionData.correctAnswer.toLowerCase();
        } else if (questionData.questionType === 'code-editor') {
            if (questionData.validate && typeof questionData.validate === 'function') {
                try {
                    correct = questionData.validate(userCode);
                } catch (e) {
                    console.error("Error validating code:", e);
                    correct = false;
                    Alert.alert("Error Validasi", "Terjadi kesalahan saat memeriksa kodemu.");
                }
            } else {
                correct = userCode.trim() === questionData.correctAnswer?.trim();

            }
        }
        setIsCorrect(correct);
        if (correct) {
            setScore(prevScore => prevScore + (questionData.points || 10)); // Ambil poin dari data soal jika ada, default 10
        }
        setIsAnswered(true);
    };

    const handleNextQuestion = async () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {

            const totalPoints = expDailyChallenge ?? questions.reduce((sum, q) => sum + (q.points || 10), 0);
            const currentUser = auth.currentUser;

            if (!currentUser) {
                console.error("User is not authenticated.");
                Alert.alert("Error", "User authentication is required to proceed.");
                return;
            }
            const db = getFirestore(app);
            const userProfileRef = doc(db, `user_data`, currentUser?.uid || 'defaultUserId');

            try {
                const userDoc = await getDoc(userProfileRef);
                const previousExp = userDoc.exists() ? userDoc.data()?.exp || 0 : 0;
                const updatedExp = previousExp + score;

                await setDoc(userProfileRef, { 'exp': updatedExp }, { merge: true });
                updateStageStatus(stageId, 'completed');
            } catch (error) {
                console.error('Error updating user exp:', error);
            }

            Alert.alert(
                "🎉 Kuis Selesai!",
                `Skor Kamu: ${score}/${totalPoints}\n${score > (totalPoints / 2) ? "Kerja Bagus! 👍" : "Terus Belajar ya! Semangat! 💪"}`,
                [{ text: "Selesai", onPress: () => router.replace('/(tabs)/Learn') }]
            );

        }
    };

    const renderAnswerArea = () => {
        if (!currentQuestion) return null;

        switch (currentQuestion.questionType) {
            case 'multiple-choice':
                return (
                    <View style={styles.optionsContainer}>
                        {currentQuestion.options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.optionButton,
                                    selectedAnswer === option && styles.selectedOptionButton,
                                    isAnswered && option === currentQuestion.correctAnswer && styles.correctOptionButton,
                                    isAnswered && selectedAnswer === option && option !== currentQuestion.correctAnswer && styles.incorrectOptionButton,
                                ]}
                                onPress={() => handleAnswerSelect(option)}
                                disabled={isAnswered}
                            >
                                <Text style={[
                                    styles.optionText,
                                    selectedAnswer === option && styles.selectedOptionText,
                                    isAnswered && option === currentQuestion.correctAnswer && styles.correctOptionText,
                                    isAnswered && selectedAnswer === option && option !== currentQuestion.correctAnswer && styles.incorrectOptionText,
                                ]}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                );
            case 'fill-in-the-blank':
            case 'guess-output':
                return (
                    <TextInput
                        style={[styles.textInputAnswer, isAnswered && (isCorrect ? styles.correctInput : styles.incorrectInput)]}
                        placeholder={currentQuestion.placeholder || "Ketik jawabanmu di sini..."}
                        onChangeText={text => setSelectedAnswer(text)}
                        value={selectedAnswer || ''}
                        editable={!isAnswered}
                        autoCapitalize="none"
                    />
                );
            case 'code-editor':
                return (
                    <View style={styles.codeEditorContainer}>
                        <TextInput
                            style={[styles.codeEditorInput, isAnswered && styles.disabledCodeEditor]}
                            placeholder="// Tulis kodemu di sini..."
                            onChangeText={text => setUserCode(text)}
                            value={userCode}
                            editable={!isAnswered}
                            multiline
                            numberOfLines={6}
                            autoCapitalize="none"
                            autoCorrect={false}
                            textAlignVertical="top"
                        />
                    </View>
                );
            default:
                // Sebaiknya tidak menampilkan tipe soal ke pengguna jika tidak dikenali
                console.warn("Tipe soal tidak dikenal:", currentQuestion.questionType);
                return <Text style={styles.errorText}>Terjadi masalah saat menampilkan soal ini.</Text>;
        }
    };

    // Kondisi awal jika tidak ada soal dan materi juga tidak diminta/gagal total
    if (questions.length === 0 && !isLoadingMaterial && !showMaterial) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.loadingContainer}>
                    <Icon name="alert-circle-outline" size={48} color="#FF6B6B" />
                    <Text style={styles.loadingText}>Tidak ada soal untuk ditampilkan saat ini.</Text>
                    <TouchableOpacity style={styles.utilityButton} onPress={() => router.back()}>
                        <Text style={styles.utilityButtonText}>Kembali</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    // Tampilan loading utama saat materi diambil
    if (isLoadingMaterial && isMaterialFeatureEnabled) { // Hanya tampilkan loading materi jika fitur aktif
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={Platform.OS === 'ios' ? 'large' : 60} color="#4A90E2" />
                    <Text style={styles.loadingText}>Sedang menyiapkan materi belajarmu...</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerNav}>
                    <TouchableOpacity onPress={() => router.canGoBack() ? router.back() : router.replace('/(tabs)/Learn')}>
                        <Icon name="arrow-left-circle" size={32} color="#4A90E2" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Kuis Interaktif</Text>
                    <View style={{ width: 32 }} /> {/* Placeholder for balance */}
                </View>

                {questions.length > 0 && <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />}

                {showMaterial && isMaterialFeatureEnabled ? ( // Tampilkan area materi hanya jika fitur aktif
                    material ? (
                        <View style={styles.materialViewContainer}>
                            <Text style={styles.materialSectionTitle}>💡 Materi Belajar Untukmu!</Text>
                            {/* Pastikan MaterialDisplay aman dan semua teks di dalamnya dibungkus <Text> */}
                            <MaterialDisplay material={material} />
                            <TouchableOpacity style={[styles.proceedButton, styles.filledButton]} onPress={() => setShowMaterial(false)}>
                                <Text style={styles.proceedButtonText}>Saya Mengerti, Mulai Kuis!</Text>
                                <Icon name="arrow-right-thick" size={20} color="#fff" style={{ marginLeft: 8 }} />
                            </TouchableOpacity>
                        </View>
                    ) : materialError ? ( // Error saat fetch materi
                        <View style={[styles.materialViewContainer, styles.materialErrorContainer]}>
                            <Icon name="alert-decagram-outline" size={40} color="#D32F2F" />
                            <Text style={styles.materialErrorTitle}>Oops, Ada Kendala!</Text>
                            <Text style={styles.materialErrorText}>{materialError}</Text>
                            <TouchableOpacity style={[styles.proceedButton, styles.outlineButton]} onPress={() => setShowMaterial(false)}>
                                <Text style={[styles.proceedButtonText, styles.outlineButtonText]}>Lanjut ke Soal Saja</Text>
                            </TouchableOpacity>
                        </View>
                    ) : ( // Sedang loading materi (seharusnya sudah ditangani oleh isLoadingMaterial di atas, tapi sebagai fallback)
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="small" color="#4A90E2" />
                            <Text style={styles.loadingText}>Memuat materi...</Text>
                        </View>
                    )
                ) : ( // Tampilkan soal jika tidak ada materi atau materi sudah ditutup
                    <>
                        {currentQuestion ? (
                            <View style={styles.quizContentContainer}>
                                <View style={styles.questionContainer}>
                                    {currentQuestion.questionText && <Text style={styles.questionText}>{currentQuestion.questionText}</Text>}
                                    {currentQuestion.imageStimulus && (
                                        /* Pastikan imageStimulus adalah sumber yang valid untuk Image (URL string atau require()) */
                                        <Image source={currentQuestion.imageStimulus} style={styles.questionImage} resizeMode="contain" />
                                    )}
                                    {currentQuestion.codeStimulus && (
                                        <View style={styles.codeBlock}>
                                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                                <Text style={styles.codeText}>{currentQuestion.codeStimulus}</Text>
                                            </ScrollView>
                                        </View>
                                    )}
                                </View>

                                {renderAnswerArea()}

                                {isAnswered && (
                                    <View style={[styles.feedbackContainer, isCorrect ? styles.correctFeedback : styles.incorrectFeedback]}>
                                        <Icon name={isCorrect ? "check-circle-outline" : "close-circle-outline"} size={28} color={isCorrect ? "#2E7D32" : "#C62828"} />
                                        <View style={styles.feedbackTextContainer}>
                                            <Text style={styles.feedbackTitle}>{isCorrect ? "Jawaban Benar!" : "Jawaban Kurang Tepat"}</Text>
                                            {!isCorrect && currentQuestion.correctAnswer && (
                                                <Text style={styles.feedbackAnswerText}>
                                                    Jawaban yang benar: <Text style={{ fontWeight: 'bold' }}>{String(currentQuestion.correctAnswer)}</Text>
                                                </Text>
                                            )}
                                            {currentQuestion.explanation && <Text style={styles.feedbackExplanationText}>{currentQuestion.explanation}</Text>}
                                        </View>
                                    </View>
                                )}

                                {!isAnswered ? (
                                    <TouchableOpacity
                                        style={[
                                            styles.actionButton,
                                            styles.submitButton,
                                            // Opsi: Tambahkan style disabled jika tombol tidak aktif
                                            (showMaterial || (!selectedAnswer && currentQuestion.questionType === 'multiple-choice')) && styles.disabledActionButton
                                        ]}
                                        onPress={handleSubmitAnswer}
                                        disabled={showMaterial || (!selectedAnswer && currentQuestion.questionType === 'multiple-choice')}
                                    >
                                        <Icon name="check-bold" size={20} color="#fff" />
                                        <Text style={styles.actionButtonText}>Periksa Jawaban</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity style={[styles.actionButton, styles.nextButton]} onPress={handleNextQuestion}>
                                        <Text style={styles.actionButtonText}>
                                            {currentQuestionIndex === questions.length - 1 ? "Lihat Hasil" : "Lanjut ke Soal Berikutnya"}
                                        </Text>
                                        <Icon name={currentQuestionIndex === questions.length - 1 ? "trophy-award" : "arrow-right-bold-circle-outline"} size={20} color="#fff" />
                                    </TouchableOpacity>
                                )}
                            </View>
                        ) : ( // Tidak ada currentQuestion (misal, soal belum termuat)
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator size="large" color="#4A90E2" />
                                <Text style={styles.loadingText}>Memuat soal...</Text>
                            </View>
                        )}
                    </>
                )}
            </ScrollView>
        </SafeAreaView >
    );
}

// Styles (diasumsikan sama dengan yang Anda berikan sebelumnya, dengan tambahan jika ada)
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#E9F5FF',
    },
    scrollViewContainer: {
        padding: 20,
        flexGrow: 1,
    },
    headerNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    progressBarOuterContainer: {
        marginBottom: 25,
    },
    progressText: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginBottom: 8,
    },
    progressBarContainer: {
        height: 12,
        backgroundColor: '#D0E8FF',
        borderRadius: 6,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#4A90E2',
        borderRadius: 6,
    },
    materialViewContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    materialSectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 15,
        textAlign: 'center',
    },
    loadingGif: { // Pastikan path GIF benar dan file ada di assets
        width: 150,
        height: 150,
        marginTop: 20,
    },
    proceedButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 25,
        marginTop: 20,
        marginBottom: 10,
        elevation: 2,
    },
    filledButton: {
        backgroundColor: '#5DB075',
    },
    outlineButton: {
        backgroundColor: 'transparent',
        borderColor: '#4A90E2',
        borderWidth: 1.5,
    },
    proceedButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    outlineButtonText: {
        color: '#4A90E2',
    },
    materialErrorContainer: {
        backgroundColor: '#FFF0F0',
        borderColor: '#D32F2F',
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
    },
    materialErrorTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D32F2F',
        marginTop: 10,
        marginBottom: 5,
    },
    materialErrorText: {
        fontSize: 15,
        color: '#D32F2F',
        textAlign: 'center',
        marginBottom: 15,
    },
    quizContentContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    questionContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    questionText: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
        color: '#2C3E50',
        lineHeight: 28,
    },
    questionImage: {
        width: screenWidth * 0.7,
        height: screenWidth * 0.5,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#F0F8FF',
        borderWidth: 1,
        borderColor: '#D0E8FF',
    },
    codeBlock: {
        backgroundColor: '#282c34',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        marginBottom: 20,
        maxHeight: 200,
    },
    codeText: {
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
        color: '#ABB2BF',
        fontSize: 14,
        lineHeight: 20,
    },
    optionsContainer: {
        flexDirection: 'column',
    },
    optionButton: {
        backgroundColor: '#F0F8FF',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#B9D9EB',
        alignItems: 'flex-start',
    },
    selectedOptionButton: {
        backgroundColor: '#D0E8FF',
        borderColor: '#4A90E2',
    },
    correctOptionButton: {
        backgroundColor: '#DFFFEA',
        borderColor: '#5DB075',
    },
    incorrectOptionButton: {
        backgroundColor: '#FFEEEE',
        borderColor: '#E74C3C',
    },
    optionText: {
        color: '#34495E',
        fontSize: 16,
        fontWeight: '500',
    },
    selectedOptionText: {},
    correctOptionText: {
        color: '#2E7D32',
        fontWeight: 'bold',
    },
    incorrectOptionText: {
        color: '#C62828',
    },
    textInputAnswer: {
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#B9D9EB',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        marginBottom: 20,
        color: '#333',
    },
    correctInput: {
        borderColor: '#5DB075',
        backgroundColor: '#F0FFF4',
    },
    incorrectInput: {
        borderColor: '#E74C3C',
        backgroundColor: '#FFF0F0',
    },
    codeEditorContainer: {
        marginBottom: 20,
        borderWidth: 1.5,
        borderColor: '#B9D9EB',
        borderRadius: 10,
        overflow: 'hidden',
    },
    codeEditorInput: {
        backgroundColor: '#282c34',
        color: '#ABB2BF',
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
        padding: 15,
        fontSize: 14,
        minHeight: 150,
        textAlignVertical: 'top',
    },
    disabledCodeEditor: {
        backgroundColor: '#3E4451'
    },
    feedbackContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        borderLeftWidth: 5,
    },
    correctFeedback: {
        backgroundColor: '#E8F5E9',
        borderColor: '#5DB075',
    },
    incorrectFeedback: {
        backgroundColor: '#FFEBEE',
        borderColor: '#E74C3C',
    },
    feedbackTextContainer: {
        marginLeft: 10,
        flex: 1,
    },
    feedbackTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333', // Pastikan warna teks feedback jelas
    },
    feedbackAnswerText: {
        fontSize: 15,
        color: '#555',
        marginBottom: 8,
        lineHeight: 20,
    },
    feedbackExplanationText: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
        lineHeight: 18,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 25,
        marginTop: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    submitButton: {
        backgroundColor: '#FF6B6B',
    },
    nextButton: {
        backgroundColor: '#4A90E2',
    },
    disabledActionButton: { // Style untuk tombol yang dinonaktifkan
        backgroundColor: '#BDBDBD', // Warna abu-abu
        opacity: 0.7,
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 8,
        marginRight: 8,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        minHeight: screenHeight * 0.5,
    },
    loadingText: {
        marginTop: 15,
        fontSize: 17,
        color: '#4A90E2',
        textAlign: 'center',
        fontWeight: '500',
    },
    utilityButton: {
        marginTop: 20,
        backgroundColor: '#4A90E2',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    utilityButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: { // Style untuk pesan error umum di UI
        color: 'red',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 14,
    }
});