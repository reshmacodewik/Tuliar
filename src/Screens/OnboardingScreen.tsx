/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../style/onboarding';

const slides = [
  {
    key: 'slide1',
    titleLine1: 'Welcome To',
    titleLine2: 'Tuliar',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('../../src/Theme/assets/image/nursing.png'),
  },
  {
    key: 'slide2',
    titleLine1: 'Emotional',
    titleLine2: 'Distress',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('../../src/Theme/assets/image/restingman.png'),
  },
  {
    key: 'slide3',
    titleLine1: 'Professional',
    titleLine2: 'Therapy',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: require('../../src/Theme/assets/image/therapist.png'),
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation<any>();
  const sliderRef = useRef<AppIntroSlider>(null);
  const [index, setIndex] = useState(0);
  const { wp, hp } = useResponsive();

  const onGetStarted = () => {
    if (index < slides.length - 1) {
      sliderRef.current?.goToSlide(index + 1);
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  const renderItem = ({ item }: any) => (
    <ImageBackground
      source={item.image}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Bottom content */}
      <View style={styles.content}>
       

        {/* Titles */}
        <Text style={[styles.title, { fontSize: wp(9) }]}>
          {item.titleLine1}
        </Text>
        <Text style={[styles.titleBold, { fontSize: wp(9.5) }]}>
          {item.titleLine2}
        </Text>

        {/* Description */}
        <Text style={[styles.desc, { marginTop: hp(1.5) }]}>
          {item.text}
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={[styles.button, { marginTop: hp(3) }]}
          onPress={onGetStarted}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

         {/* Dots */}
        <View style={styles.dotContainer}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={i === index ? styles.activeDot : styles.dot}
            />
          ))}
        </View>
       
      </View>
    </ImageBackground>
  );

  return (
    <AppIntroSlider
      ref={sliderRef}
      data={slides}
      renderItem={renderItem}
      showNextButton={false}
      showDoneButton={false}
      showSkipButton={false}
      onSlideChange={i => setIndex(i)}
      dotStyle={{ display: 'none' }}
      activeDotStyle={{ display: 'none' }}
    />
  );
};

export default OnboardingScreen;