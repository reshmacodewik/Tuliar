/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../style/onboarding';

const slides = [
  {
    key: 'slide1',
    titleLine1: 'Welcome To',
    titleLine2: 'Tuliar',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: require('../../assets/image/nursing.png'),
  },
  {
    key: 'slide2',
    titleLine1: 'Emotional',
    titleLine2: 'Distress',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: require('../../assets/image/restingman.png'),
  },
  {
    key: 'slide3',
    titleLine1: 'Professional',
    titleLine2: 'Therapy',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: require('../../assets/image/therapist.png'),
  },
];


const OnboardingScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [activeIndex, setActiveIndex] = useState(0);

 const renderItem = ({ item }: { item: typeof slides[0] }) => (
  <ImageBackground
    source={require('../../assets/image/background.png')}
    style={styles.container}
    resizeMode="cover"
  >
    <TouchableOpacity
      style={[styles.skipButton, { top: hp(5), right: wp(5) }]}
      onPress={() => navigation.navigate('LoginScreen')}
    >
      <Text style={styles.skipText}>Skip</Text>
    </TouchableOpacity>

    <Image source={item.image} style={styles.image} />

    <View style={styles.dotContainer}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={index === activeIndex ? styles.activeDot : styles.dot}
        />
      ))}
    </View>

    {/* Two-line Underlined Title for All Slides */}
    <View style={{ alignItems: 'center', marginTop: hp(0) }}>
      
      <View style={{ position: 'relative' }}>
        <Text style={[styles.title, { fontSize: wp(10), fontFamily: "Urbanist-SemiBold", color: '#000' }]}>
          {item.titleLine1}
        </Text>
        <View
         style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
        />
      </View>

      <View style={{ position: 'relative', marginTop: hp(-1.2) }}>
        <Text style={[styles.title, { fontSize: wp(10), fontFamily: "Urbanist-SemiBold", color: '#0B0B0B' }]}>
          {item.titleLine2}
        </Text>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
        />
      </View>

    </View>

    <Text style={styles.desc}>{item.text}</Text>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('LoginScreen')}
    >
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>

    <Text style={styles.bottomText}>
      Returning user? <Text style={styles.signUpText}>Sign up</Text>
    </Text>
  </ImageBackground>
);


  return (
    
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      showSkipButton={false}
      showNextButton={false}
      showDoneButton={false}
      dotStyle={{ display: 'none' }} // Hide default dots
      activeDotStyle={{ display: 'none' }} // Hide active dot
      onSlideChange={(index) => setActiveIndex(index)}
    />
  );
};

export default OnboardingScreen;
