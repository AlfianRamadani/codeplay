import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from '../../../firebaseConfig'; // Pastikan path ini benar

const FormSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Tambahkan state untuk loading

    const router = useRouter();
    // Fungsi validasi email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Fungsi validasi form
    const validateForm = () => {
        const newErrors = {};

        // Validasi email
        if (!email.trim()) {
            newErrors.email = 'Email tidak boleh kosong';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Format email tidak valid';
        }

        // Validasi password
        if (!password.trim()) {
            newErrors.password = 'Kata sandi tidak boleh kosong';
        } else if (password.length < 6) {
            newErrors.password = 'Kata sandi minimal 6 karakter';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Fungsi utama untuk menangani autentikasi (Login atau Daftar)
    const handleAuth = async () => {
        setIsLoading(true); // Set loading state saat proses autentikasi dimulai
        // Lakukan validasi form terlebih dahulu
        if (!validateForm()) {
            return; // Hentikan proses jika validasi gagal
        }

        try {
            if (isRegistering) {
                // Logika Pendaftaran (Sign Up)
                await createUserWithEmailAndPassword(auth, email, password);
                Alert.alert("Sukses", "Pendaftaran berhasil! Anda sekarang bisa login.");
                setEmail('');
                setPassword('');
                setIsRegistering(false); // Kembali ke mode login setelah daftar berhasil
                setIsLoading(false); // Reset loading state
            } else {
                // Logika Login (Sign In)
                const response = await signInWithEmailAndPassword(auth, email, password);
                console.log("Login berhasil:", JSON.stringify(response.user, null, 2));

                // Store user data in AsyncStorage
                const userData = {
                    uid: response.user.uid,
                    email: response.user.email,
                    emailVerified: response.user.emailVerified,
                    accessToken: await response.user.getIdToken()
                };

                await AsyncStorage.setItem('userData', JSON.stringify(userData));
                Alert.alert("Sukses", "Login berhasil!");
                // Di sini Anda bisa menavigasi pengguna ke layar utama aplikasi setelah login berhasil
                // Contoh: navigate('/home'); // Ganti '/home' dengan rute aplikasi utama Anda
                setIsLoading(false); // Reset loading state
                router.replace('/(tabs)/Learn'); // Navigasi ke halaman utama setelah login berhasil
            }
        } catch (error) {
            // Tangani error dari Firebase Authentication
            let errorMessage = "Terjadi kesalahan.";
            setIsLoading(false); // Reset loading state saat terjadi error
            if (error.code) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'Email ini sudah digunakan.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Format email tidak valid.';
                        break;
                    case 'auth/weak-password':
                        errorMessage = 'Kata sandi terlalu lemah (minimal 6 karakter).';
                        break;
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                        errorMessage = 'Email atau kata sandi salah.';
                        break;
                    case 'auth/too-many-requests':
                        errorMessage = 'Terlalu banyak percobaan login gagal. Coba lagi nanti.';
                        break;
                    case 'auth/invalid-credential':
                        errorMessage = 'Kredensial tidak valid. Silakan periksa kembali email dan kata sandi Anda.';
                        break;
                    default:
                        errorMessage = error.message;
                        console.error("Firebase Auth Error:", error);
                        break;
                }
            }
            Alert.alert("Error", errorMessage);
        }
    };

    // Fungsi untuk clear error saat user mengetik
    const handleEmailChange = (text) => {
        setEmail(text);
        if (errors.email) {
            setErrors(prev => ({ ...prev, email: '' }));
        }
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        if (errors.password) {
            setErrors(prev => ({ ...prev, password: '' }));
        }
    };

    // Fungsi untuk beralih antara mode Login dan Daftar
    const toggleAuthMode = () => {
        setIsRegistering(!isRegistering);
        setEmail(''); // Bersihkan input saat beralih mode
        setPassword(''); // Bersihkan input saat beralih mode
        setErrors({}); // Bersihkan error saat beralih mode
    };

    return (
        <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <View style={[styles.inputContainer, errors.email && styles.inputContainerError]}>
                <TextInput
                    style={styles.input}
                    placeholder='Masukan email'
                    value={email}
                    onChangeText={handleEmailChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    editable={!isLoading} // Disable input while loading
                />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <Text style={styles.label}>Kata Sandi</Text>
            <View style={[styles.inputContainer, errors.password && styles.inputContainerError]}>
                <TextInput
                    secureTextEntry={!showPassword}
                    style={styles.input}
                    placeholder='Password'
                    value={password}
                    onChangeText={handlePasswordChange}
                    editable={!isLoading} // Disable input while loading
                />
                <Pressable
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                    disabled={isLoading} // Disable button while loading
                >
                    <Ionicons
                        name={showPassword ? "eye-off" : "eye"}
                        size={20}
                        color={isLoading ? "#ccc" : "#666"}
                    />
                </Pressable>
            </View>
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                    isLoading && styles.buttonDisabled,
                ]}
                disabled={isLoading}
                onPress={handleAuth}
            >
                <Text style={styles.buttonText}>
                    {isLoading ? 'Loading...' : (isRegistering ? 'Daftar' : 'Masuk')}
                </Text>
            </Pressable>

            <View style={styles.noAccount}>
                <Text style={styles.noAccountText}>
                    {isRegistering ? 'Sudah memiliki akun?' : 'Tidak Memiliki Akun?'}
                </Text>
                <Pressable
                    onPress={toggleAuthMode}
                    disabled={isLoading} // Disable button while loading
                >
                    <Text style={[styles.registerText, isLoading && { color: '#aad7fa' }]}>
                        {isRegistering ? 'Masuk di sini' : 'Daftar'}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        marginBottom: 15,
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    form: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
    },
    buttonDisabled: {
        backgroundColor: '#ccc', // Warna tombol saat loading
        elevation: 0, // Nonaktifkan bayangan saat loading
        shadowColor: 'transparent', // Nonaktifkan bayangan saat loading
    },
    noAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    noAccountText: {
        fontSize: 14,
        color: '#666',
    },
    registerText: {
        fontSize: 14,
        color: '#3DB2FF',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    inputContainer: {
        height: 60,
        borderWidth: 0.5,
        borderColor: '#ddd',
        borderRadius: 50,
        backgroundColor: 'white',
        marginBottom: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10, // Tambahkan padding horizontal untuk ikon mata
    },
    inputContainerError: {
        borderColor: '#ff0000',
        borderWidth: 1,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10, // Sesuaikan padding di sini
        fontSize: 16,
        height: '100%',
    },
    button: {
        backgroundColor: '#0693F1',
        paddingVertical: 20,
        paddingHorizontal: 24,
        borderRadius: 50,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonPressed: {
        backgroundColor: '#0774BC',
        transform: [{ scale: 0.98 }],
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    errorText: {
        color: '#ff0000',
        fontSize: 12,
        marginTop: -10,
        marginBottom: 15,
        marginLeft: 20, // Sesuaikan agar sejajar dengan input
    },
    eyeIcon: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default FormSection;
