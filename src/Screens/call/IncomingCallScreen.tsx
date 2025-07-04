import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from '../../style/incomingCallStyles';


const IncomingCallScreen = () => {
  const { wp, hp } = useResponsive();

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')} // same gradient background
      style={styles(wp, hp).container}
    >
      {/* Incoming text */}
      <Text style={styles(wp, hp).incomingText}>Incoming call......</Text>

      {/* Doctor Image */}
     <View style={styles(wp, hp).outerBox}>
        <View style={styles(wp, hp).innerBox}>
          <Image
            source={require('../../../assets/image/doctor.png')}
            style={styles(wp, hp).doctorImage}
          />
        </View>
      </View>

      {/* Doctor Name */}
      <Text style={styles(wp, hp).doctorName}>Dr. John Smith</Text>

      {/* Accept & Decline Buttons */}
      <View style={styles(wp, hp).buttonRow}>
        <TouchableOpacity style={styles(wp, hp).declineButton}>
          <Image
            source={require('../../../assets/icon/phone.png')} // red call-end icon
            style={styles(wp, hp).buttonIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles(wp, hp).acceptButton}>
          <Image
            source={require('../../../assets/icon/phone-start.png')} // green call icon
            style={styles(wp, hp).buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default IncomingCallScreen;
