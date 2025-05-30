import { GoogleGenAI } from '@google/genai';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialDisplay from '../components/MaterialDisplay';
import quizPlayQuestions from '../data/quizData';


const screenWidth = Dimensions.get('window').width;

const ProgressBar = ({ current, total }) => {
    const progress = (current / total) * 100;
    return (
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
    );
};
export default function QuizScreen() {
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


    const fetchMaterialForQuestion = async () => {
        const ai = new GoogleGenAI({ apiKey: "AIzaSyC-wUn5N-gKpeX2FK2nr05bJDXh0C7Su6w" });
        setIsLoadingMaterial(true);
        setMaterialError(null);
        setShowMaterial(true);

        try {
            const prompt = `
            Kamu adalah AI tutor CodePlay yang ahli menjelaskan konsep coding untuk anak-anak Indonesia usia 8-12 tahun.
            
            Berikut adalah daftar soal yang diberikan kepada anak:
            ${JSON.stringify(quizPlayQuestions, null, 2)}
            
            Buatkan satu materi pembelajaran yang menjelaskan konsep-konsep yang muncul dalam soal-soal tersebut (misalnya: variabel, fungsi, console.log, operasi matematika, dll).
            
            Materi harus ditulis dengan bahasa Indonesia yang sangat sederhana, mudah dipahami, dan menyenangkan untuk anak-anak.
            
            Format materi harus berupa JSON dengan struktur seperti ini:
            {
              "materialTitle": "Judul Materi yang Relevan (Bahasa Indonesia)",
            "questions": "Ringkasan konsep dari soal-soal",
              "contentBlocks": [
                {"type": "heading", "level": 1, "text": "Judul atau bagian utama"},
                {"type": "paragraph", "text": "Penjelasan konsep dengan kata-kata mudah"},
                {"type": "code_snippet", "language": "blockly_pseudo", "code": ["BLOK 1", "BLOK 2"], "explanation": "Penjelasan kode"},
                {"type": "list", "listType": "bullet", "items": ["Poin penting 1", "Poin penting 2"]},
                {"type": "tip", "text": "Tips singkat atau hal penting yang perlu diingat."}
              ]
            }
            Kamu tidak harus selalu menggunakan semua jenis contentBlocks, tapi jumlahnya cukup antara 3 hingga 5 blok. Fokus pada penjelasan inti dari konsep-konsep yang muncul di soal-soal. JSON harus valid dan bisa langsung digunakan dalam React Native komponen MaterialDisplay.
            `;
            const result = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: prompt,
            });

            const cleaned = result.text
                .replace(/^```json\s*/, '')
                .replace(/^```\s*/, '')
                .replace(/```$/, '');

            const jsonOutput = JSON.parse(cleaned);
            setMaterial(jsonOutput);
        } catch (e) {
            console.error("Error fetching material from AI:", e);
            setMaterialError("Gagal memuat materi dari AI.");
            return null;
        } finally {
            setIsLoadingMaterial(false);
        }
    };

    useEffect(() => {
    })
    useEffect(() => {
        fetchMaterialForQuestion();
        setQuestions(quizPlayQuestions);
    }, []);


    console.log(material)

    useEffect(() => {
        setSelectedAnswer(null);
        setIsAnswered(false);
        setIsCorrect(null);
        setUserCode(questions[currentQuestionIndex]?.initialCode || '');
    }, [currentQuestionIndex, questions]);


    const handleAnswerSelect = (answer) => {
        if (isAnswered) return;
        setSelectedAnswer(answer);
    };

    const handleSubmitAnswer = () => {
        if (isAnswered || showMaterial) return;

        let correct = false;
        const question = questions[currentQuestionIndex];
        if (!question) return;


        if (question.type === 'multiple-choice') {
            correct = selectedAnswer === question.correctAnswer;
        } else if (question.type === 'fill-in-the-blank' || question.type === 'guess-output') {
            correct = selectedAnswer && selectedAnswer.trim().toLowerCase() === question.correctAnswer.toLowerCase();
        } else if (question.type === 'code-editor') {
            if (question.validate) {
                correct = question.validate(userCode);
            }
        }
        setIsCorrect(correct);
        if (correct) {
            setScore(prevScore => prevScore + 10);
        }
        setIsAnswered(true);
    };
    // console.log(showMaterial);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            alert(`Kuis Selesai! Skor Anda: ${score}`);
        }
    };
    const renderAnswerArea = () => {
        if (!currentQuestion) return null;

        switch (currentQuestion.type) {
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
                                <Text style={[styles.optionText, selectedAnswer === option && styles.selectedOptionText]}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                );
            case 'fill-in-the-blank':
            case 'guess-output':
                return (
                    <TextInput
                        style={styles.textInputAnswer}
                        placeholder={currentQuestion.placeholder || "Ketik jawabanmu..."}
                        onChangeText={text => setSelectedAnswer(text)}
                        value={selectedAnswer || ''}
                        editable={!isAnswered}
                        autoCapitalize="none"
                    />
                );
            case 'code-editor':
                return (
                    <TextInput
                        style={styles.codeEditorInput}
                        placeholder="// Tulis kodemu di sini..."
                        onChangeText={text => setUserCode(text)}
                        value={userCode}
                        editable={!isAnswered}
                        multiline
                        autoCapitalize="none"
                        autoCorrect={false}
                        textAlignVertical="top"
                    />
                );
            default:
                return <Text>Tipe soal tidak dikenal.</Text>;
        }
    };



    const currentQuestion = questions[currentQuestionIndex];
    if (questions.length === 0) {
        return <SafeAreaView style={styles.safeArea}><View style={styles.loadingContainer}><ActivityIndicator size="large" /></View></SafeAreaView>;
    }
    // Tampilan loading saat materi diambil
    if (isLoadingMaterial && showMaterial) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#007AFF" />
                    <Text style={styles.loadingText}>Memuat materi pembelajaran...</Text>
                </View>
            </SafeAreaView>
        );
    }


    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.headerNav}>
                    <TouchableOpacity onPress={() => { /* Logika kembali */ }}>
                        <Icon name="arrow-left" size={28} color="#333" />
                    </TouchableOpacity>
                </View>
                <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />

                {showMaterial && material ? (
                    <View>
                        <MaterialDisplay material={material} />
                        <TouchableOpacity style={styles.proceedButton} onPress={() => setShowMaterial(false)}>
                            <Text style={styles.proceedButtonText}>Saya Mengerti, Lanjut ke Soal!</Text>
                        </TouchableOpacity>
                    </View>
                ) : showMaterial && materialError ? (
                    <View style={styles.materialErrorContainer}>
                        <Icon name="alert-circle-outline" size={30} color="#D32F2F" />
                        <Text style={styles.materialErrorText}>{materialError}</Text>
                        <TouchableOpacity style={styles.proceedButton} onPress={() => setShowMaterial(false)}>
                            <Text style={styles.proceedButtonText}>Lewati Materi & Lanjut ke Soal</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        {currentQuestion && (
                            <View style={styles.questionContainer}>
                                {currentQuestion.questionText && <Text style={styles.questionText}>{currentQuestion.questionText}</Text>}
                                {currentQuestion.imageStimulus && (
                                    <Image source={currentQuestion.imageStimulus} style={styles.questionImage} resizeMode="contain" />
                                )}
                                {currentQuestion.codeStimulus && (
                                    <View style={styles.codeBlock}>
                                        <Text style={styles.codeText}>{currentQuestion.codeStimulus}</Text>
                                    </View>
                                )}
                            </View>
                        )}

                        {currentQuestion && renderAnswerArea()}

                        {isAnswered && (
                            <View style={[styles.feedbackContainer, isCorrect ? styles.correctFeedback : styles.incorrectFeedback]}>
                                <Text style={styles.feedbackText}>{isCorrect ? "Hebat! Jawabanmu Benar!" : "Ups.. jawabanmu salah"}</Text>
                                {!isCorrect && currentQuestion && <Text style={styles.feedbackAnswerText}>Jawaban: {typeof currentQuestion.correctAnswer === 'string' ? currentQuestion.correctAnswer : JSON.stringify(currentQuestion.correctAnswer)}</Text>}
                                {currentQuestion && currentQuestion.explanation && <Text style={styles.feedbackExplanationText}>{currentQuestion.explanation}</Text>}
                            </View>
                        )}

                        {!isAnswered ? (
                            <TouchableOpacity
                                style={[styles.submitButton, showMaterial && styles.disabledButton]}
                                onPress={handleSubmitAnswer}
                                disabled={showMaterial} // Nonaktifkan jika materi masih tampil
                            >
                                <Text style={styles.submitButtonText}>Periksa Jawaban</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
                                <Text style={styles.submitButtonText}>
                                    {currentQuestionIndex === questions.length - 1 ? "Lihat Hasil" : "Lanjut"}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </>
                )}
            </ScrollView>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f4f7', // Warna latar belakang seperti gambar
    },
    scrollViewContainer: {
        padding: 20,
        flexGrow: 1,
    },
    headerNav: {
        marginBottom: 15,
        alignSelf: 'flex-start', // Posisikan tombol kembali di kiri
    },
    progressBarContainer: {
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 20,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#007AFF', // Biru seperti di gambar
        borderRadius: 5,
    },
    questionContainer: {
        marginBottom: 20,
        alignItems: 'center', // Pusatkan konten pertanyaan
    },
    questionText: {
        fontSize: 20, // Ukuran font pertanyaan lebih besar
        fontWeight: '600', // Bold
        textAlign: 'center',
        marginBottom: 15,
        color: '#333',
    },
    questionImage: {
        width: screenWidth * 0.6, // 60% dari lebar layar
        height: screenWidth * 0.6,
        borderRadius: (screenWidth * 0.6) / 2, // Membuatnya bulat jika gambar persegi
        marginBottom: 20,
        backgroundColor: '#FFDDC1', // Warna latar untuk area gambar
    },
    codeBlock: {
        backgroundColor: '#2d2d2d', // Latar gelap untuk kode
        padding: 15,
        borderRadius: 8,
        width: '100%',
        marginBottom: 20,
    },
    codeText: {
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace', // Font monospace
        color: '#f8f8f2', // Warna teks terang
        fontSize: 14,
    },
    optionsContainer: {
        flexDirection: 'row', // Susun opsi berdampingan jika cukup
        flexWrap: 'wrap', // Bungkus ke baris baru jika tidak cukup
        justifyContent: 'space-between', // Distribusi ruang
    },
    optionButton: {
        backgroundColor: '#007AFF', // Biru muda
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 12, // Lebih bulat
        marginBottom: 10,
        minWidth: (screenWidth - 60) / 2 - 10, // Setengah lebar dikurangi padding dan margin
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedOptionButton: {
        backgroundColor: '#0056b3', // Biru lebih tua saat dipilih
        borderColor: '#004085',
    },
    correctOptionButton: {
        backgroundColor: '#28a745', // Hijau untuk jawaban benar
        borderColor: '#1e7e34',
    },
    incorrectOptionButton: {
        backgroundColor: '#dc3545', // Merah untuk jawaban salah
        borderColor: '#b02a37',
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    selectedOptionText: {
        fontWeight: 'bold',
    },
    textInputAnswer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        marginBottom: 20,
        textAlignVertical: 'top',
    },
    codeEditorInput: {
        backgroundColor: '#2d2d2d',
        color: '#f8f8f2',
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 8,
        padding: 15,
        fontSize: 14,
        minHeight: 150, // Tinggi minimal untuk editor kode
        marginBottom: 20,
    },
    feedbackContainer: {
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        alignItems: 'center',
    },
    correctFeedback: {
        backgroundColor: '#d4edda', // Hijau muda untuk feedback benar
        borderColor: '#c3e6cb',
        borderWidth: 1,
    },
    incorrectFeedback: {
        backgroundColor: '#f8d7da', // Merah muda untuk feedback salah
        borderColor: '#f5c6cb',
        borderWidth: 1,
    },
    feedbackText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    feedbackAnswerText: {
        fontSize: 16,
        color: '#721c24', // Warna untuk teks jawaban yang benar
        marginBottom: 5,
    },
    feedbackExplanationText: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
    submitButton: {
        backgroundColor: '#FF6B6B', // Warna merah/coral seperti di contoh lain
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10, // Beri jarak dari area jawaban
    },
    nextButton: {
        backgroundColor: '#5cb85c', // Hijau untuk tombol lanjut
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    matchingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    matchingColumn: {
        alignItems: 'center',
        width: '45%',
    },
    matchingHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    matchingItem: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 8,
        width: '100%',
        alignItems: 'center',
    },

    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#007AFF',
    },
    proceedButton: {
        backgroundColor: '#28a745', // Hijau
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20, // Jarak dari materi
        marginBottom: 20,
    },
    proceedButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    disabledButton: { // Style untuk tombol yang dinonaktifkan
        backgroundColor: '#A5D6A7', // Hijau lebih pudar
    },
    materialErrorContainer: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF3E0',
        borderRadius: 8,
        marginVertical: 10,
    },
    materialErrorText: {
        fontSize: 16,
        color: '#D32F2F',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 15,
    },
});

