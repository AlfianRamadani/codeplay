
import { useRouter } from 'expo-router';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomText from '../../components/CustomText';
import { colors } from '../../utils/Constant';

const { width, height } = Dimensions.get('window');

export const RegisterScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.circleSection}>
          <Image
            source={require('../../../assets/images/register_illustration.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.topSection}>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <CustomText style={styles.title}>
            Buat Akun Kamu <Text style={styles.bold}>Sekarang!</Text>
          </CustomText>
          <CustomText style={styles.subtitle}>
            Create a profile to save your learning progress and keep learning for free!
          </CustomText>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <CustomText style={styles.backButtonText}>Kembali</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={() => router.push('page/Register/Step1')}>
              <CustomText style={styles.registerButtonText}>Daftar</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  circleSection: {
    overflow: 'hidden',
    position: 'absolute',
    top: -0.07 * height,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topSection: {
    position: 'absolute',
    top: -0.10 * height,
    right: -0.5 * width,
    width: width * 1.7,
    height: width * 1.7,
    borderRadius: width * 0.8,
    backgroundColor: colors.BACKGROUD_PRIMARY,
    zIndex: 1,
  },
  image: {
    zIndex: 2,
    top: -0.11 * height,
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 1,
    padding: width * 0.05,
    justifyContent: 'flex-end',
    zIndex: 2,
    margin: width * 0.05,
  },
  title: {
    fontSize: width * 0.09,
    color: colors.BLACK,
    fontWeight: '400',
  },
  bold: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: width * 0.035,
    color: colors.MUTED,
    marginTop: height * 0.025,
    marginBottom: height * 0.025,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.05,
  },
  backButtonText: {
    color: colors.PRIMARY,
    fontSize: width * 0.04,
  },
  registerButton: {
    backgroundColor: colors.PRIMARY,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.08,
    borderRadius: width * 0.07,
  },
  registerButtonText: {
    color: colors.WHITE,
    fontSize: width * 0.04,
  },
});
