import { useRouter } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, startText } from '../utils/Constant';

if (typeof global.setImmediate === 'undefined') {
    global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
}

const { width, height } = Dimensions.get('window');

const Start = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.SOFT_WHITE} />
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Image
                        source={require('../../assets/images/Logo.png')} // Pastikan path logo benar
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.appName}>CodePlay</Text>
                    <View style={[styles.dot, styles.dot1]} />
                    <View style={[styles.dot, styles.dot2]} />
                    <View style={[styles.dot, styles.dot3]} />
                    <View style={[styles.dot, styles.dot4]} />
                    <View style={[styles.dot, styles.dot5]} />
                    <View style={[styles.dot, styles.dot6]} />
                </View>

                <View style={styles.bottomSection}>

                    {/* Area untuk Swiper */}
                    <View style={styles.swiperContainer}>
                        <View style={styles.swiperContainer}>
                            <Swiper
                                loop={false}
                                dotStyle={styles.customPaginationDot}
                                activeDotStyle={styles.customActiveDot}
                                paginationStyle={styles.customPaginationContainer}
                                autoplay

                            >
                                {startText.map((item, index) => (
                                    <View key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.swiperTitle}>{item.title_text}</Text>
                                        <Text style={styles.swiperSubtitle}>{item.sub_text}</Text>
                                    </View>
                                ))}
                            </Swiper>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.registerButton]}
                            onPress={() => {
                                router.push('page/Register/Index');
                            }}
                        >
                            <Text style={styles.registerButtonText}>Daftar</Text>
                            <Icon name="arrow-forward" size={18} color={colors.PRIMARY} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.loginButton]}
                            onPress={() => {
                                router.push('/(tabs)/Learn');
                            }}>
                            <Text style={styles.loginButtonText}>Masuk</Text>
                            <Icon name="arrow-forward" size={18} color={colors.WHITE} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.SOFT_WHITE,
    },
    container: {
        flex: 1, // Membuat container mengisi seluruh safeArea
        backgroundColor: colors.SOFT_WHITE,
    },
    topSection: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.45,
        backgroundColor: colors.SOFT_WHITE,
        paddingTop: StatusBar.currentHeight || 0,
    },
    logo: {
        width: width * 0.3, // Sedikit disesuaikan
        height: width * 0.3,
        marginBottom: 15,
    },
    appName: {
        fontSize: 32, // Sedikit disesuaikan
        fontWeight: 'bold',
        color: '#333',
    },
    // ... (style dot tetap sama) ...
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        position: 'absolute',
    },
    dot1: { backgroundColor: '#ff6b6b', top: '15%', left: '20%' },
    dot2: { backgroundColor: '#48dbfb', top: '25%', right: '15%' },
    dot3: { backgroundColor: '#feca57', top: '50%', left: '10%' },
    dot4: { backgroundColor: '#1dd1a1', bottom: '20%', right: '25%' },
    dot5: { backgroundColor: '#007bff', top: '35%', right: '40%' },
    dot6: { backgroundColor: '#343a40', bottom: '25%', left: '30%' },

    bottomSection: {
        backgroundColor: colors.PRIMARY,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: height * 0.50, // Sedikit ditambah untuk mengakomodasi Swiper dan tombol
        alignItems: 'center',
        paddingTop: 20, // Sedikit disesuaikan
        justifyContent: 'start', // Mengatur ruang antar elemen di bottomSection
        gap: 50, // Mengatur jarak antar elemen di bottomSection
    },
    handleBar: {
        width: 50,
        height: 5,
        backgroundColor: colors.GRAY_LIGHT, // Warna bisa disesuaikan
        borderRadius: 2.5,
        // marginBottom: 15, // Dihapus, biarkan justifyContent yang mengatur
    },
    swiperContainer: {
        width: '100%',
        // flex: 1, // Membuat swiper mengambil sisa ruang yang tersedia
        height: height * 0.25, // Anda HARUS memberikan tinggi pada container swiper
        // atau pada SwiperItem > styles.wrapper
        // Sesuaikan nilai ini agar pas dengan konten dan pagination
        // marginBottom: 20, // Dihapus, biarkan justifyContent yang mengatur
    },
    // Style untuk title dan subtitle yang akan di-pass ke SwiperItem
    swiperTitle: {
        fontSize: 22, // Disesuaikan agar cocok dengan desain
        fontWeight: 'bold',
        color: colors.WHITE,
        textAlign: 'center',
        marginBottom: 8,
        paddingHorizontal: 15, // agar tidak terlalu lebar
    },
    swiperSubtitle: {
        fontSize: 15, // Disesuaikan
        color: colors.WHITE_OPACITY_70 || '#FFFFFFB3', // Warna putih dengan sedikit transparansi
        textAlign: 'center',
        lineHeight: 22,
        paddingHorizontal: 15, // agar tidak terlalu lebar
        // marginBottom diatur oleh SwiperItem atau style internalnya
    },
    // Style untuk pagination yang akan di-pass ke SwiperItem
    customPaginationContainer: {
        bottom: 5, // Sesuaikan posisi dari bawah Swiper
    },
    customPaginationDot: {
        backgroundColor: colors.GRAY_MEDIUM || '#FFFFFF50', // Warna dot tidak aktif
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
    },
    customActiveDot: {
        backgroundColor: colors.WHITE, // Warna dot aktif
        width: 12, // Dot aktif bisa sedikit lebih besar atau berbeda bentuk
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
    },

    // ... (style buttonContainer dan button tetap sama) ...
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 30, // Sedikit disesuaikan
        // marginTop: 20, // Dihapus, biarkan justifyContent yang mengatur
    },
    button: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30, // Disesuaikan sedikit
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%', // Disesuaikan sedikit
    },
    registerButton: {
        backgroundColor: colors.WHITE,
    },
    loginButton: {
        backgroundColor: colors.PRIMARY,
    },
    registerButtonText: {
        color: colors.PRIMARY,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
    },
    loginButtonText: {
        color: colors.WHITE,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
    },
});

export default Start;