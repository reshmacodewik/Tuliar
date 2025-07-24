import React from 'react';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from '../../style/mentorshipConnectingStyles';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../Navigation/Mystack';

const MentorshipConnectingScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <View style={s.container}>
        <View style={{ alignItems: 'center', width: '100%' }}>
          <Image source={require('../../../assets/image/logo.png')} style={s.logo} />
          <Text style={s.title}>Looking For Someone{"\n"}Who Gets It...</Text>
          <Text style={s.subtitle}>We’re connecting you to a supportive listener. The usually takes less than a minute.</Text>
        </View>
        <View style={{ alignItems: 'center', width: '100%', flex: 1, justifyContent: 'center' }}>
          <Image source={require('../../../assets/image/leaf.png')} style={s.image} />
          <View style={s.timerDots}>
            <View style={s.dot} />
            <View style={s.dot} />
            <View style={[s.dot, s.dotActive]} />
          </View>
        </View>
        <Pressable style={s.continueButton} onPress={() => navigation.navigate('DoctorList')}>
          <Text style={s.continueButtonText}>Continue</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default MentorshipConnectingScreen; 