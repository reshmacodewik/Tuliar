import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from './therapistMatchingStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TherapistMatchingScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLearnMore = () => {
    console.log('Learn How Matching works pressed');
    // Navigate to matching explanation screen
    // navigation.navigate('MatchingExplanation');
  };

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={styles(wp, hp).bgimg}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={styles(wp, hp).mainContainer}>
        {/* Header */}
        <View style={styles(wp, hp).header}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={styles(wp, hp).backButton}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8.5)}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <View style={styles(wp, hp).logoContainer}>
          <Image
            source={require('../../../assets/image/logo.png')}
            style={styles(wp, hp).logo}
          />
        </View>

        {/* Main Heading */}
        <View style={styles(wp, hp).headingContainer}>
          <Text style={styles(wp, hp).mainHeading}>
            We're Finding The Best Therapist For You...
          </Text>
        </View>

        {/* Matching Illustration */}
        <View style={styles(wp, hp).illustrationContainer}>
          {/* Center Plant */}
          <View style={styles(wp, hp).centerPlant}>
           <Image source={require('../../../assets/image/photroom.png')} style={styles(wp, hp).plant} />
          </View>
          
         
        </View>

        {/* Description Text */}
        <View style={styles(wp, hp).descriptionContainer}>
          <Text style={styles(wp, hp).descriptionText}>
            This will only take a moment as we carefully match you with a therapist who fits your needs.
          </Text>
        </View>

        {/* Learn More Button */}
        <View style={styles(wp, hp).buttonContainer}>
          <TouchableOpacity
            style={styles(wp, hp).learnMoreButton}
            onPress={handleLearnMore}
          >
            <Text style={styles(wp, hp).learnMoreButtonText}>
              Learn How Matching works
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TherapistMatchingScreen; 