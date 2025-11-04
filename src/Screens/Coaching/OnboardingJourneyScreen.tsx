import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation/Mystack';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from '../../style/onboardingJourneyStyles';

type OnboardingJourneyNavigationProp = StackNavigationProp<RootStackParamList, 'Questionnaire'>;

const OnboardingJourneyScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<OnboardingJourneyNavigationProp>();

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={s.backgroundImage}
    >
      <View style={s.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        {/* Centered Mentor Image */}
        <View style={s.mentorIllustration}>
          <Image
            source={require('../../Theme/assets/image/mentor.png')}
            style={s.mentorImage}
          />
        </View>
        {/* Illustration Section */}
        <View style={s.illustrationContainer}>
          <Text style={s.sectionLabel}>Coach</Text>
          <Text style={s.sectionLabel}>Mentor</Text>
        </View>
        <Text style={s.title}>Your Journey, Your Terms</Text>

        {/* Description */}
        <Text style={s.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>
        {/* Continue Button */}
        <Pressable style={s.continueButton} onPress={() => navigation.navigate('Questionnaire')}>
          <Text style={s.continueButtonText}>Continue My Journey</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default OnboardingJourneyScreen;
