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

import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './therapyStyles';

const TherapyScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleStartChat = () => {
    console.log('Get Started pressed');
    // Navigate to Find Therapist screen
    navigation.navigate('FindTherapist');
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

        {/* Confirmation Message */}
        <View style={styles(wp, hp).confirmationContainer}>
          <Text style={styles(wp, hp).confirmationTitle}>Find a Therapist</Text>
          <Text style={styles(wp, hp).confirmationSubtitle}>
            Get personalized, one-on-one mental health care from a licensed
            therapist.
          </Text>
        </View>

        {/* Profile Picture */}
        <View style={styles(wp, hp).profileContainer}>
          <View style={styles(wp, hp).profileImageContainer}>
          <Image
            source={require('../../../assets/image/doc2.png')}
            style={styles(wp, hp).profileImage}
            resizeMode="cover"
          />
          </View>
          
          <Text style={styles(wp, hp).confirmationSubtitletext}>
            Answer a few questions to get started.
          </Text>

          <View style={styles(wp, hp).buttonContainer}>
            <TouchableOpacity
              style={styles(wp, hp).startChatButton}
              onPress={handleStartChat}
            >
              <Text style={styles(wp, hp).startChatButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Start Chat Button */}
      </View>
    </ImageBackground>
  );
};

export default TherapyScreen;
