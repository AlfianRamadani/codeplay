
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
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../utils/Constant';


const { width, height } = Dimensions.get('window');

const Start = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            source={require('../../assets/images/Logo.png')}
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
          <View style={styles.handleBar} />
          <Text style={styles.title}>Belajar pemrograman, gratis dan bisa offline!</Text>
          <Text style={styles.subtitle}>
            Belajar materi pemrograman secara interaktif dengan handphone!
          </Text>
          <View style={styles.pagination}>
            <View style={[styles.paginationDot, styles.activeDot]} />
            <View style={styles.paginationDot} />
            <View style={styles.paginationDot} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.registerButton]}
              onPress={() => {
                router.push('page/Register/Index');
              }}
            >
              <Text style={styles.registerButtonText}>Daftar</Text>
              <Icon name="arrow-forward" size={18} color="#007bff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.loginButton]}
              onPress={() => {
                router.push('/(tabs)/Learn');
              }}>
              <Text style={styles.loginButtonText}>Masuk</Text>
              <Icon name="arrow-forward" size={18} color="#ffffff" />
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
    backgroundColor: color.SOFT_WHITE,
  },
  container: {
    justifyContent: 'between',
    backgroundColor: color.SOFT_WHITE,
  },
  topSection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.5,
    backgroundColor: color.SOFT_WHITE,
  },
  logo: {
    width: width * 0.35,
    height: width * 0.35,
    marginBottom: 20,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
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
    backgroundColor: color.PRIMARY,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 20,
    height: height * 0.5,
    alignItems: 'center',
  },
  handleBar: {
    width: 50,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 2.5,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: color.WHITE,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: color.WHITE,
    textAlign: 'center',
    marginBottom: 40,
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: color.WHITE,
    width: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  registerButton: {
    backgroundColor: color.WHITE,
    borderColor: color.PRIMARY,
    borderWidth: 1,
  },
  loginButton: {
    backgroundColor: color.PRIMARY,
  },
  registerButtonText: {
    color: color.PRIMARY,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  loginButtonText: {
    color: color.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default Start;