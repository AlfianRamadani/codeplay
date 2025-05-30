
import { useRouter } from 'expo-router';
import Groq from 'groq-sdk';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const groq = new Groq({ apiKey: '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', dangerouslyAllowBrowser: true });

export default function DailyChallenge() {
    const router = useRouter();

    const [challenges, setChallenges] = useState(undefined); // undefined untuk loading state awal
    const [isLoading, setIsLoading] = useState(false); // Untuk loading state saat mengambil soal

    // Prompt untuk mengambil daftar tantangan harian awal
    const initialChallengesPrompt = `Kamu adalah AI asisten untuk CodePlay, sebuah aplikasi belajar coding berbasis blok untuk anak-anak Indonesia usia 8-12 tahun.
Buatlah 4 ide tantangan harian yang unik dan menyenangkan. Tantangan harus bisa diselesaikan dengan konsep coding blok dasar (seperti urutan, perulangan sederhana, atau kondisi if-else sederhana).
Untuk setiap tantangan, berikan output dalam format JSON dengan struktur sebagai berikut:
{
  "id_tantangan": "unik_string_id_acak",
  "judul_tantangan": "Judul yang Menarik (maks 5 kata, Bahasa Indonesia)",
  "deskripsi_skenario": "Deskripsi singkat yang imajinatif dan memotivasi (1-2 kalimat, Bahasa Indonesia)",
  "konsep_kunci_coding": "Konsep coding utama yang dilatih",
  "ikon_saran": "Saran nama ikon dari MaterialCommunityIcons yang relevan dengan tema",
  "tingkat_kesulitan_saran": "Saran tingkat kesulitan (contoh: 'Mudah', 'Pemula', 'Menengah')",
  "poin_reward_saran": "Saran poin reward (contoh: 10, 20, 50)",
  "color": "Warna HEX yang menarik dan cerah (bukan pastel, bukan hitam, contoh: '#FF6B6B')",
  "warna_ikon": "Warna HEX untuk ikon yang kontras dengan 'color' dan menarik (contoh: '#FFFFFF')"
}
Pastikan output adalah array JSON yang valid berisi 4 objek tantangan tersebut. Cukup kirim array JSON saja, tidak perlu penjelasan atau teks lain di luar array JSON tersebut.`;

    useEffect(() => {
        const fetchAIChallenges = async () => {
            setIsLoading(true);
            try {
                const result = await groq.chat.completions.create({
                    messages: [
                        {
                            role: "user",
                            content: initialChallengesPrompt,
                        },
                    ],
                    model: "llama-3.3-70b-versatile", // Menggunakan model Llama3 70b dari Groq
                });
                const chatCompletion = result.choices[0]?.message?.content || '';
                let cleanedJson = chatCompletion.trim();
                if (cleanedJson.startsWith("```json")) {
                    cleanedJson = cleanedJson.substring(7);
                }
                if (cleanedJson.endsWith("```")) {
                    cleanedJson = cleanedJson.substring(0, cleanedJson.length - 3);
                }

                const jsonOutput = JSON.parse(cleanedJson);
                setChallenges(jsonOutput);
            } catch (error) {
                console.error("Error saat mengambil daftar tantangan:", error);
                Alert.alert("Error", "Gagal memuat tantangan harian. Silakan coba lagi nanti.");
                setChallenges([]); // Set ke array kosong jika error agar UI tidak stuck di loading
            } finally {
                setIsLoading(false);
            }
        };
        fetchAIChallenges();
    }, []);

    const handleChallengePress = async (challenge) => {
        setIsLoading(true); // Set loading state
        const challengePrompt = `
Anda adalah AI pembuat soal untuk CodePlay, aplikasi belajar coding blok untuk anak-anak Indonesia usia 8-12 tahun.
Saya memiliki sebuah tantangan harian dengan detail sebagai berikut:
- ID Tantangan: "${challenge.id_tantangan}"
- Judul Tantangan: "${challenge.judul_tantangan}"
- Deskripsi Skenario: "${challenge.deskripsi_skenario}"
- Konsep Kunci Coding Utama: "${challenge.konsep_kunci_coding}"
- Tingkat Kesulitan Saran: "${challenge.tingkat_kesulitan_saran}"

Berdasarkan informasi tantangan di atas, khususnya pada konsep kunci coding "${challenge.konsep_kunci_coding}", buatlah 3 soal yang relevan dan menarik.
Pastikan soal-soal tersebut menguji pemahaman anak-anak terhadap konsep kunci coding tersebut.
Variasikan jenis soalnya (misalnya, satu 'multiple-choice', satu 'fill-in-the-blank', dan satu 'guess-output').

Output yang Anda berikan HARUS berupa objek JSON tunggal yang valid dengan struktur berikut:
[
    {
      "questionId": "${challenge.id_tantangan}_q1",
      "questionType": "multiple-choice",
      "konsep_kunci_coding_soal": "Konsep spesifik soal ini, terkait dengan '${challenge.konsep_kunci_coding}'",
      "questionText": "Teks pertanyaan dalam Bahasa Indonesia yang jelas.",
      "options": ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
      "correctAnswer": "Salah satu dari Pilihan A/B/C/D",
      "placeholder": null,
      "codeStimulus": null,
      "explanation": "Penjelasan singkat mengapa jawaban ini benar (Bahasa Indonesia)."
    },
    {
      "questionId": "${challenge.id_tantangan}_q2",
      "questionType": "fill-in-the-blank",
      "konsep_kunci_coding_soal": "Konsep spesifik soal ini, terkait dengan '${challenge.konsep_kunci_coding}'",
      "questionText": "Teks pertanyaan untuk isian dalam Bahasa Indonesia.",
      "options": [],
      "correctAnswer": "Jawaban isian yang benar",
      "placeholder": "Petunjuk untuk isian (misalnya: 'ketik nama blok di sini')",
      "codeStimulus": null,
      "explanation": "Penjelasan singkat (Bahasa Indonesia)."
    },
    {
      "questionId": "${challenge.id_tantangan}_q3",
      "questionType": "guess-output",
      "konsep_kunci_coding_soal": "Konsep spesifik soal ini, terkait dengan '${challenge.konsep_kunci_coding}'",
      "questionText": "Perhatikan blok kode berikut. Apa yang akan terjadi?",
      "options": [],
      "correctAnswer": "Deskripsi output yang benar",
      "placeholder": null,
      "codeStimulus": "MAJU\\nBICARA 'Halo Kawan!'\\nULANGI 2 KALI\\n  LOMPAT\\nAKHIR ULANGI",
      "explanation": "Penjelasan singkat (Bahasa Indonesia)."
    }
  ]


- Untuk 'multiple-choice', WAJIB sertakan field 'options' dengan 3 atau 4 pilihan. 'correctAnswer' harus salah satu dari 'options'. Set 'placeholder' dan 'codeStimulus' ke null.
- Untuk 'fill-in-the-blank', WAJIB sertakan field 'placeholder'. Set 'options' ke array kosong []. Set 'codeStimulus' ke null.
- Untuk 'guess-output', WAJIB sertakan field 'codeStimulus'. Set 'options' ke array kosong []. Set 'placeholder' ke null.
- 'questionId' harus unik untuk setiap soal. Anda bisa menggunakan format IDTantangan_qNomorSoal.
- Semua teks harus dalam Bahasa Indonesia dan sesuai untuk anak usia 8-12 tahun.
- PENTING Pastikan outputnya adalah JSON saja, tanpa teks penjelasan tambahan di luar JSON. Bersihkan jika ada markdown seperti \`\`\`json.
- Pastikan output adalah array JSON yang valid berisi 4 objek tantangan tersebut. Cukup kirim array JSON saja, tidak perlu penjelasan atau teks lain di luar array JSON tersebut dan tidak perlu sertakan Here is the json output.
`;
        try {
            const challengeQuestionsResponse = await groq.chat.completions.create({
                messages: [
                    {
                        role: "user",
                        content: challengePrompt,
                    },
                ],
                model: "llama-3.3-70b-versatile",
            });
            const questionsContent = challengeQuestionsResponse.choices[0]?.message?.content || '';
            console.log("Raw AI response for questions:", questionsContent);

            let cleanedJson = questionsContent.trim();
            console.log(cleanedJson);
            if (cleanedJson.startsWith("```json")) {
                cleanedJson = cleanedJson.substring(7);
            }
            if (cleanedJson.endsWith("```")) {
                cleanedJson = cleanedJson.substring(0, cleanedJson.length - 3);
            }

            const parsedQuestionsData = JSON.parse(cleanedJson);
            console.log("Parsed questions data:", parsedQuestionsData);
            if (parsedQuestionsData && Array.isArray(parsedQuestionsData)) {
                router.navigate({
                    pathname: '/page/Question',
                    params: {
                        quizPlayQuestions: JSON.stringify(parsedQuestionsData),
                        isHaveMaterial: false, 
                        expDailyChallenge: challenge.poin_reward_saran, 

                    }
                })

            } else {
                Alert.alert("Error", "Format soal tidak valid. Silakan coba lagi nanti.");
                return;
            }
        } catch (error) {
            console.error("Error saat mengambil soal tantangan:", error);
            Alert.alert("Error", "Gagal memuat soal untuk tantangan ini. Silakan coba lagi nanti.");
        } finally {
            setIsLoading(false); // Matikan loading state
        }
    };

    if (challenges === undefined || (isLoading && challenges === undefined)) { // Menampilkan loading indicator jika data awal belum ada
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#1A237E" />
                    <Text style={{ marginTop: 10, color: '#1A237E' }}>Memuat Tantangan Harian...</Text>
                </View>
            </SafeAreaView>
        );
    }

    if (challenges && challenges.length === 0 && !isLoading) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Icon name="emoticon-sad-outline" size={60} color="#757575" />
                    <Text style={{ marginTop: 15, fontSize: 18, color: '#757575', textAlign: 'center' }}>
                        Oops! Tidak ada tantangan harian yang tersedia saat ini.
                    </Text>
                    <Text style={{ marginTop: 5, fontSize: 14, color: '#757575', textAlign: 'center' }}>
                        Silakan coba lagi nanti.
                    </Text>
                </View>
            </SafeAreaView>
        );
    }


    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerContainer}>
                    {/* <Text style={styles.headerEmojiPlaceholder}>🎮</Text> */}
                    <Icon name="gamepad-variant-outline" size={34} color="#1A237E" style={styles.headerEmojiPlaceholder} />
                    <Text style={styles.header}>Tantangan Harian!</Text>
                </View>

                {isLoading && challenges && challenges.length > 0 && ( // Loading indicator saat mengambil soal
                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <ActivityIndicator size="small" color="#1A237E" />
                        <Text style={{ fontSize: 12, color: '#1A237E' }}>Memuat soal...</Text>
                    </View>
                )}

                {Array.isArray(challenges) && challenges.map((challenge) => (
                    <TouchableOpacity
                        key={challenge.id_tantangan}
                        style={[
                            styles.challengeCard,
                            { borderColor: challenge.color || '#000' }
                        ]}
                        onPress={() => !isLoading && handleChallengePress(challenge)} // Cegah klik ganda saat loading
                        activeOpacity={0.7}
                        disabled={isLoading} // Nonaktifkan tombol saat loading
                    >
                        <View style={[styles.cardIconContainer, { backgroundColor: challenge.color || '#ccc' }]}>
                            <Icon
                                name={challenge.ikon_saran || 'head-question-outline'} // Memperbaiki dari challenge || '...'
                                size={30}
                                color={challenge.warna_ikon || '#FFFFFF'} // Default warna ikon jika tidak ada
                            />
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardTitle}>
                                {challenge.judul_tantangan}
                            </Text>
                            <Text style={styles.cardDescription}>
                                {challenge.deskripsi_skenario}
                            </Text>
                        </View>
                        <View style={styles.cardRewardContainer}>
                            <Icon name="star-circle" size={18} color="#FFC107" style={{ marginRight: 4 }} />
                            {/* <Text style={styles.cardRewardEmojiPlaceholder}>+</Text> */}
                            <Text style={styles.cardReward}>
                                {challenge.poin_reward_saran} Poin
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

// Styles tetap sama, pastikan sudah sesuai kebutuhan
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f4f7',
    },
    container: {
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 30,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
    },
    headerEmojiPlaceholder: {
        marginRight: 10,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A237E',
        textAlign: 'center',
    },
    challengeCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 12,
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5.62,
        elevation: 6,
    },
    cardIconContainer: {
        marginRight: 12,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
    },
    cardTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#212121',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 13,
        color: '#757575',
        lineHeight: 18,
    },
    cardRewardContainer: {
        marginLeft: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8F5E9', // Warna dasar reward container sedikit diubah agar lebih lembut
    },
    cardReward: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#2E7D32', // Hijau tua untuk reward
    },

});