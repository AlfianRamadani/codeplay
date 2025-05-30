import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import CustomText from '../../components/CustomText';

const AgeScreen = () => {
  const [age, setAge] = useState('');
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <View style={styles.backCircle}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </View>
      </TouchableOpacity>

      <CustomText style={styles.title}>Berapa Usiamu Cuy</CustomText>

      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        maxLength={3}
        placeholder="Usia kamu"
        textAlign="center"
        autoFocus={true}
      />

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          if (age) {
            router.push('page/Register/Step2');
          } else {
            alert('Please enter your age');
          }
        }
        }
      >
        <CustomText style={styles.nextButtonText}>Next</CustomText>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AgeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 24,
    zIndex: 1,
  },
  backCircle: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 24,
    elevation: 5, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 100,
    color: '#1E1E1E',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#007AFF',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 30,
    fontSize: 18,
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 50,
    marginTop: 'auto',
    alignItems: 'center',
    marginBottom: 50,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
