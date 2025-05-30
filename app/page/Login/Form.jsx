import { Ionicons } from '@expo/vector-icons';
import { navigate } from 'expo-router/build/global-state/routing';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const FormSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

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
            newErrors.password = 'Password tidak boleh kosong';
        } else if (password.length < 6) {
            newErrors.password = 'Password minimal 6 karakter';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Fungsi handle submit
    const handleLogin = () => {
        if (validateForm()) {
            console.log('Login berhasil!');
            console.log('Email:', email);
            console.log('Password:', password);
            
            Alert.alert('Berhasil', 'Login berhasil!');
        } else {
            console.log('Validasi gagal');
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
                />
                <Pressable 
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Ionicons 
                        name={showPassword ? "eye-off" : "eye"} 
                        size={20} 
                        color="#666" 
                    />
                </Pressable>
            </View>
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Masuk</Text>
            </Pressable>

            <View style={styles.noAccount}>
                <Text style={styles.noAccountText}>Tidak Memiliki Akun?</Text>
                <Pressable
                    onPress={() => navigate('/page/Register/Index')}
                >
                    <Text style={styles.registerText}>Daftar</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        marginBottom: 15
    },
    form: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20
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
    },
    inputContainerError: {
        borderColor: '#ff0000',
        borderWidth: 1,
    },
    input: {
        flex: 1,
        paddingHorizontal: 20,
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
    },
    eyeIcon: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default FormSection