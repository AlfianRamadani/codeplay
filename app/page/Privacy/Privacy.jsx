import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Privacy() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [school, setSchool] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    // Fungsi validasi username
    const validateUsername = (username) => {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        return usernameRegex.test(username);
    };

    // Fungsi validasi email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Fungsi validasi umur
    const validateAge = (age) => {
        const ageNum = parseInt(age);
        return !isNaN(ageNum) && ageNum > 0 && ageNum < 120;
    };

    // Fungsi validasi form
    const validateForm = () => {
        const newErrors = {};

        // Validasi name
        if (!name.trim()) {
            newErrors.name = 'Nama tidak boleh kosong';
        }

        // Validasi username
        if (!username.trim()) {
            newErrors.username = 'Username tidak boleh kosong';
        } else if (!validateUsername(username)) {
            newErrors.username = 'Username hanya boleh mengandung huruf, angka, dan underscore';
        }

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

        // Validasi umur
        if (!age.trim()) {
            newErrors.age = 'Umur tidak boleh kosong';
        } else if (!validateAge(age)) {
            newErrors.age = 'Umur harus berupa angka antara 1-120';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Fungsi handle submit
    const handleLogin = () => {
        if (validateForm()) {
            console.log('Login berhasil!');
            console.log('Name:', name);
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Umur:', age);
            console.log('Sekolah:', school);

            Alert.alert('Berhasil', 'Registrasi berhasil!');
        } else {
            console.log('Validasi gagal');
        }
    };

    // Fungsi untuk clear error saat user mengetik
    const handleNameChange = (text) => {
        setName(text);
        if (errors.name) {
            setErrors(prev => ({ ...prev, name: '' }));
        }
    };

    const handleUsernameChange = (text) => {
        setUsername(text);
        if (errors.username) {
            setErrors(prev => ({ ...prev, username: '' }));
        }
    };

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

    const handleAgeChange = (text) => {
        setAge(text);
        if (errors.age) {
            setErrors(prev => ({ ...prev, age: '' }));
        }
    };

    const handleSchoolChange = (text) => {
        setSchool(text);
    };

    return (
        <View style={styles.container}>
            {/* Header yang fixed */}
            <View style={styles.containerHeader}>
                <View style={styles.header}>
                    <Text style={styles.title}>Privacy</Text>
                </View>
            </View>

            {/* Konten yang bisa di-scroll */}
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.contentContainer}>
                    <Image style={styles.backgroundImage} source={require('@/assets/images/PrivacyBackgroundImage.png')} />

                    {/* profile picture section */}
                    <View style={styles.avatarContainer}>
                        <View>
                            <Image
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
                                }}
                                style={styles.avatar}
                            />
                        </View>
                        <View style={styles.changeProfileContainer}>
                            <View style={styles.changeProfileAvatar}>
                                <Ionicons name="pencil" size={18} color="white" />
                            </View>
                        </View>
                        <View style={styles.profileInfo}>
                            <View>
                                <Text style={styles.profileInfoTextName}>John Doe</Text>
                                <Text style={styles.profileInfoTextStatus}>Newbie</Text>
                            </View>
                        </View>
                    </View>
                    {/* profile picture section End */}

                    {/* Form Section */}
                    <View style={styles.form}>
                        <Text style={styles.label}>Nama Lengkap</Text>
                        <View style={[styles.inputContainer, errors.name && styles.inputContainerError]}>
                            <TextInput
                                style={styles.input}
                                placeholder='Masukan nama lengkap'
                                value={name}
                                onChangeText={handleNameChange}
                            />
                        </View>
                        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

                        <Text style={styles.label}>Username</Text>
                        <View style={[styles.inputContainer, errors.username && styles.inputContainerError]}>
                            <TextInput
                                style={styles.input}
                                placeholder='Masukan username'
                                value={username}
                                onChangeText={handleUsernameChange}
                                autoCapitalize="none"
                            />
                        </View>
                        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

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

                        <Text style={styles.label}>Umur</Text>
                        <View style={[styles.inputContainer, errors.age && styles.inputContainerError]}>
                            <TextInput
                                style={styles.input}
                                placeholder='Masukan umur Anda'
                                value={age}
                                onChangeText={handleAgeChange}
                                keyboardType="numeric"
                            />
                        </View>
                        {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}

                        <Text style={styles.label}>Sekolah (opsional)</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder='Nama sekolah/kampus'
                                value={school}
                                onChangeText={handleSchoolChange}
                            />
                        </View>

                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                pressed && styles.buttonPressed,
                            ]}
                            onPress={handleLogin}
                        >
                            <Text style={styles.buttonText}>Daftar</Text>
                        </Pressable>

                        <View style={styles.noAccount}>
                            <Text style={styles.noAccountText}>Sudah memiliki akun?</Text>
                            <Pressable
                                onPress={() => navigate('/page/Login')}
                            >
                                <Text style={styles.registerText}>Masuk</Text>
                            </Pressable>
                        </View>
                    </View>
                    {/* Form Section End */}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // Header Section (fixed)
    containerHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#f5f5f5',
        paddingTop: 50,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
    },
    // Scroll View
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    contentContainer: {
        paddingBottom: 40,
    },
    backgroundImage: {
        width: '100%',
        height: 550,
    },
    // Profile picture section
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#e0e0e0',
        position: 'absolute',
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 70,
        marginTop: -305,
    },
    changeProfileAvatar: {
        width: 35,
        height: 35,
        marginTop: 50,
        marginLeft: 135,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 30,
        backgroundColor: '#3972FE',
        borderWidth: 1,
        borderColor: 'white',
    },
    profileInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 75
    },
    profileInfoTextName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20,
        marginTop: -10,
        marginBottom: 20
    },
    profileInfoTextStatus: {
        textAlign: 'center',
        fontSize: 15
    },
    // Form Section
    label: {
        marginBottom: 15,
        color: '#333',
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
        color: '#333',
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
        marginTop: -15,
        marginBottom: 15,
        marginLeft: 10,
    },
    eyeIcon: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});