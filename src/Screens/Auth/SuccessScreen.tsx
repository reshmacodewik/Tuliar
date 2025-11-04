import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/otpstyles';
const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground  source={require('../../Theme/assets/image/background.png')} style={styles.bg}>
      <View style={styles.otpcontainer}>
        <Image
          source={require('../../Theme/assets/image/check.png')} // replace with your green checkmark
          style={styles.successIcon}
        />
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.message}>
          Congratulations! You have been successfully authenticated
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoginScreen' as never)}
        >
          <Text style={styles.buttonText}>Let’s Begin</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SuccessScreen;
