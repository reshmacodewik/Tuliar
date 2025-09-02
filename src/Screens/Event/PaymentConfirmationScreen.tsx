import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from '../../style/PaymentConfirmationStyles';

const PaymentConfirmationScreen = () => {
//   const navigation = useNavigation();
  const { wp, hp } = useResponsive();
  const themedStyles = styles(wp, hp);

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={themedStyles.bgimg}
    >
      <View style={themedStyles.container}>
        <Text style={themedStyles.header}>Payment Successful!</Text>
        <View style={themedStyles.iconContainer}>
          <Image
            source={require('../../Theme/assets/image/check.png')}
            style={themedStyles.successIcon}
          />
        </View>
        <Text style={themedStyles.success}>Success!</Text>
        <Text style={themedStyles.subText}>
          You have registered for the Wellness & Mental Health workshop
        </Text>
        <Text style={themedStyles.date}>15th July, 2025</Text>

        <TouchableOpacity style={themedStyles.outlineButton}>
          <Text style={themedStyles.outlineButtonText}>Add to calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={themedStyles.outlineButton}>
          <Text style={themedStyles.outlineButtonText}>View event details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={themedStyles.filledButton}>
          <Text style={themedStyles.filledButtonText}>Invite a friend</Text>
        </TouchableOpacity>

        <View style={styles(wp, hp).outercontainer}>
          <TouchableOpacity style={styles(wp, hp).fab}>
            <Image
              source={require('../../Theme/assets/image/moodicon.png')}
              style={styles(wp, hp).icon}
            />
          </TouchableOpacity>

          <View style={styles(wp, hp).textContainer}>
            <Text style={styles(wp, hp).text}>
              Hi <Text style={{ fontWeight: 'bold' }}>Susan</Text> 👋
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PaymentConfirmationScreen;
