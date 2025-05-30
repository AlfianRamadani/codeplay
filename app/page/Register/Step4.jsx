import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from '../../components/CustomText';

const CreatePasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const router = useRouter();

  const getPasswordStrength = (pw) => {
    if (pw.length >= 10) return 'Super Strong';
    if (pw.length >= 6) return 'Strong';
    return 'Weak';
  };

  const getBorderColor = () => {
    if (password.length === 0) return '#007AFF';
    return password.length < 6 ? 'red' : 'green';
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <View style={styles.backCircle}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </View>
      </TouchableOpacity>

      <CustomText style={styles.title}>Buat Password</CustomText>

      <View style={[styles.inputContainer, { borderColor: getBorderColor() }]}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={isSecure}
          placeholder="Enter password"
          autoFocus={true}
        />
        <TouchableOpacity
          onPress={() => setIsSecure(!isSecure)}
          style={styles.eyeIcon}
        >
          <Ionicons name={isSecure ? 'eye' : 'eye-off'} size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {password.length > 0 && (
        <CustomText
          style={[
            styles.strengthText,
            { color: password.length < 6 ? 'red' : 'green' },
          ]}
        >
          How strong your password : {getPasswordStrength(password)}
        </CustomText>
      )}

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default CreatePasswordScreen;

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
    elevation: 5,
    shadowColor: '#000',
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
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderRadius: 50,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    marginTop: 30,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  strengthText: {
    marginTop: 8,
    marginLeft: 8,
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 50,
    marginTop: 'auto',
    alignItems: 'center',
    marginBottom: 50,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
