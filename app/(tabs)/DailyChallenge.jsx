import { GoogleGenAI } from '@google/genai';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Contoh


export default function DailyChallenge() {
    const [challenges, setChallenges] = useState(undefined);
    const prompt = `Kamu adalah AI asisten untuk CodePlay, sebuah aplikasi belajar coding berbasis blok untuk anak-anak Indonesia usia 8-12 tahun.
        Buatlah 4 ide tantangan harian yang unik dan menyenangkan. Tantangan harus bisa diselesaikan dengan konsep coding blok dasar (seperti urutan, perulangan sederhana, atau kondisi if-else sederhana).
        Untuk setiap tantangan, berikan output dalam format JSON dengan struktur sebagai berikut:
        {
        "id_tantangan": "unik_string_id_acak",
        "judul_tantangan": "Judul yang Menarik (maks 5 kata, Bahasa Indonesia)",
        "deskripsi_skenario": "Deskripsi singkat yang imajinatif dan memotivasi (1-2 kalimat, Bahasa Indonesia)",
        "konsep_kunci_coding": "Konsep coding utama yang dilatih",
        "ikon_saran": "Saran nama ikon dari MaterialCommunityIcons",
        "tingkat_kesulitan_saran": "Saran tingkat kesulitan",
        "poin_reward_saran": "Saran poin reward",
        "color": "Warna yang menarik dan sesuai dengan tantangan",
        "ikon_saran": "Saran nama ikon dari MaterialCommunityIcons",
        "warna_ikon": "Saran warna untuk ikon yang kontras dengan color"
        }
        Pastikan output adalah array JSON yang valid berisi 4 objek tantangan tersebut dan ikon_saran yang benar.`;

    useEffect(() => {
        const fetchAIChallenges = async () => {
            const ai = new GoogleGenAI({ apiKey: "AIzaSyDLI0f5D3kcFMrbjzNvxa5GPp-EM1GMvIA" });
            try {
                const result = await ai.models.generateContent({
                    model: "gemini-2.0-flash",
                    contents: prompt,
                });
                const cleaned = result.text
                    .replace(/^```json\s*/, '')
                    .replace(/^```\s*/, '')
                    .replace(/```$/, '');
                const jsonOutput = JSON.parse(cleaned);
                setChallenges(jsonOutput);
                console.log(jsonOutput);
            } catch (error) {
                console.error("Error saat memanggil Gemini:", error);
            }
        };
        fetchAIChallenges();
    }, []);



    const handleChallengePress = (challenge) => {
        console.log("Memulai tantangan:", challenge.judul_tantangan);
        if (challenge.isAISpecial) {
            alert(`Memulai tantangan spesial AI: ${challenge.judul_tantangan}\nPrompt ke Gemini akan dijalankan!`);
        } else {
            alert(`Memulai tantangan: ${challenge.judul_tantangan}`);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerEmojiPlaceholder}>🎮</Text>
                    <Text style={styles.header}>Tantangan Harian!</Text>
                </View>

                {Array.isArray(challenges) && challenges.map((challenge) => (
                    <TouchableOpacity
                        key={challenge.id_tantangan}
                        style={[
                            styles.challengeCard,
                            { borderColor: challenge.color || '#000' } // Border warna sesuai tema tantangan
                        ]}
                        onPress={() => handleChallengePress(challenge)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.cardIconContainer, { backgroundColor: challenge.iconBgColor || challenge.color || '#ccc' }]}>
                            <Icon name={challenge.ikon_saran || 'head-question-outline'} size={30} color={challenge.isAISpecial ? '#FFD700' : challenge.warna_ikon} />
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Text style={[styles.cardTitle, challenge.isAISpecial && styles.aiCardTitleText]}>
                                {challenge.judul_tantangan}
                            </Text>
                            <Text style={[styles.cardDescription, challenge.isAISpecial && styles.aiCardDescriptionText]}>
                                {challenge.deskripsi_skenario}
                            </Text>
                        </View>
                        <View style={[styles.cardRewardContainer, challenge.isAISpecial && { backgroundColor: challenge.color || '#F1F8E9' }]}>
                            <Text style={styles.cardRewardEmojiPlaceholder}>+</Text>
                            <Text style={[styles.cardReward, challenge.isAISpecial && styles.aiCardRewardText]}>
                                {challenge.poin_reward_saran}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* <TouchableOpacity style={styles.aiHelpButton} onPress={() => alert("Fitur bantuan AI Profesor Gen ditekan!")} activeOpacity={0.8}>
                    <Icon name="head-question-outline" size={24} color="#fff" />
                    <Text style={styles.aiHelpButtonText}> Tanya Profesor Gen</Text>
                </TouchableOpacity> */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f4f7',
    },
    // backgroundImage: { // Jika ingin pakai image background
    //     flex: 1,
    // },
    container: {
        paddingHorizontal: 15, // Sedikit dikurangi untuk memberi ruang pada kartu
        paddingTop: 20,
        paddingBottom: 30, // Lebih banyak padding di bawah
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
    },
    headerEmojiPlaceholder: { // Placeholder jika belum ada ikon library
        fontSize: 30,
        marginRight: 10,
    },
    header: {
        fontSize: 28, // Lebih besar
        fontWeight: 'bold', // Bold untuk judul
        color: '#1A237E', // Warna biru tua untuk kontras
        textAlign: 'center',
    },
    challengeCard: {
        backgroundColor: '#FFFFFF', // Putih bersih untuk kartu
        borderRadius: 18, // Lebih bulat
        padding: 12, // Padding internal kartu
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2, // Border untuk setiap kartu
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5.62,
        elevation: 6,
    },
    // Style untuk kartu AI Spesial akan di-override sebagian oleh style inline dari data `challenge`
    // Namun, kita bisa definisikan style dasar jika perlu
    aiCardTitleText: { // Khusus untuk judul AI, bisa lebih menonjol
        color: '#C51162', // Warna pink tua atau ungu
        fontWeight: 'bold',
    },
    aiCardDescriptionText: { // Deskripsi AI bisa berbeda
        color: '#4A148C', // Ungu tua
    },
    aiCardRewardText: { // Reward AI
        color: '#000000', // Hitam agar kontras dengan background kuning
        fontWeight: 'bold',
    },
    cardIconContainer: {
        marginRight: 12,
        borderRadius: 15, // Bulat untuk container ikon
        justifyContent: 'center',
        alignItems: 'center',
        width: 50, // Lebar tetap
        height: 50, // Tinggi tetap
    },
    cardIconPlaceholder: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    cardTextContainer: {
        flex: 1, // Agar mengambil sisa ruang
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 17, // Ukuran font judul kartu
        fontWeight: '600',
        color: '#212121', // Hitam pekat untuk judul
        marginBottom: 4, // Jarak ke deskripsi
    },
    cardDescription: {
        fontSize: 13,
        color: '#757575', // Abu-abu untuk deskripsi
        lineHeight: 18, // Spasi antar baris
    },
    cardRewardContainer: {
        marginLeft: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10, // Lebih bulat
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F8E9', // Warna dasar reward container
    },
    cardRewardEmojiPlaceholder: { // Jika belum ada ikon library
        fontSize: 14,
        marginRight: 4,
    },
    cardReward: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#388E3C', // Hijau tua untuk reward
    },
    aiHelpButton: {
        backgroundColor: '#FF6B6B', // Warna merah muda/coral yang ceria
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 30, // Sangat bulat
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 8,
    },
    aiHelpButtonIconPlaceholder: { // Placeholder jika belum ada ikon library
        fontSize: 20,
        marginRight: 8,
    },
    aiHelpButtonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
    }
});