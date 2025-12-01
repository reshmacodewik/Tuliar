import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from '../../style/coachingStyles';
import { RootStackParamList } from '../../Navigation/types';

type CoachingNavigationProp = StackNavigationProp<RootStackParamList, 'OnboardingJourneyScreen'>;

const Coaching = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<CoachingNavigationProp>();

  return (
    <View style={s.container}>
      <Text style={s.title}>Coaching &{"\n"}Mentoring</Text>
      <Text style={s.subtitle}>
        Benefits of coaching await.{"\n"}Embark on a journey of growth today
      </Text>
      <Image
        source={require('../../Theme/assets/image/coaching.png')}
        style={s.illustration}
      />
      <Pressable style={s.button} onPress={() => navigation.navigate('OnboardingJourneyScreen')}>
        <Text style={s.buttonText}>Next</Text>
      </Pressable>
      <Image
        source={require('../../Theme/assets/image/logo.png')}
        style={s.logo}
      />
    </View>
  );
};

export default Coaching;
