import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../style/videoCallStyles';

const VideoCallScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={styles(wp, hp).container}
    >
     <View style={styles(wp, hp).container}>

  <Image
    source={require('../../../assets/image/doctor.png')}
    style={styles(wp, hp).doctorImage}
  />
  <View style={styles(wp, hp).topBar}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={wp(6)} color="#fff" />
    </TouchableOpacity>
    <Text style={styles(wp, hp).doctorName}>Dr. John Smith</Text>
    <View style={styles(wp, hp).timerBox}>
      <Text style={styles(wp, hp).timerText}>01:05</Text>
    </View>
  </View>

  {/* User Video */}
  <View style={styles(wp, hp).userVideoBox}>
    <Image
      source={require('../../../assets/image/videouser.png')}
      style={styles(wp, hp).userVideo}
    />
  </View>

  {/* Bottom Controls */}
  <View style={styles(wp, hp).controls}>
    <TouchableOpacity style={styles(wp, hp).controlButtonYellow}>
      <Ionicons name="mic-off" size={wp(6)} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity style={styles(wp, hp).controlButtonRed}>
      <Ionicons name="call" size={wp(6)} color="#fff" />
    </TouchableOpacity>
    
  </View>
</View>

    </ImageBackground>
  );
};

export default VideoCallScreen;
