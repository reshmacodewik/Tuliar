import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from './therapistMatchingStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TherapistMatchingScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [showPopup, setShowPopup] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLearnMore = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const MatchingExplanationPopup = () => (
    <Modal
      visible={showPopup}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClosePopup}
    >
      <View style={styles(wp, hp).modalOverlay}>
        <View style={styles(wp, hp).modalContainer}>
          {/* Header */}
          <View style={styles(wp, hp).modalHeader}>
            <View style={styles(wp, hp).modalLogoContainer}>
              <Image
                source={require('../../Theme/assets/image/logo.png')}
                style={styles(wp, hp).modalLogo}
              />
            </View>
            <TouchableOpacity
              onPress={handleClosePopup}
              style={styles(wp, hp).closeButton}
            >
              <MaterialIcons name="close" size={wp(6)} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Title */}
          <View style={styles(wp, hp).modalTitleContainer}>
            <Text style={styles(wp, hp).modalTitle}>
              How We Match You To The Right Therapist
            </Text>
          </View>

          {/* Steps */}
          <ScrollView
            style={styles(wp, hp).modalScrollView}
            contentContainerStyle={{ paddingBottom: hp(2) }}
            showsVerticalScrollIndicator={false}
          >
            {/* Step 1 */}
            <View style={styles(wp, hp).stepCard}>
              <View style={styles(wp, hp).stepIconContainer}>
                <View style={styles(wp, hp).stepIcon}>
                  <Ionicons name="calendar" size={wp(5)} color="#22c55e" />
                </View>
              </View>
              <View style={styles(wp, hp).stepTextContainer}>
                <Text style={styles(wp, hp).stepTitle}>We Learn About You</Text>
                <Text style={styles(wp, hp).stepDescription}>
                  Your responses to our questionnaire help us understand your
                  needs, and preferences.
                </Text>
              </View>
            </View>

            {/* Step 2 */}
            <View style={styles(wp, hp).stepCard}>
              <View style={styles(wp, hp).stepIconContainer}>
                <View style={styles(wp, hp).stepIcon}>
                  <Ionicons name="people" size={wp(5)} color="#22c55e" />
                </View>
              </View>
              <View style={styles(wp, hp).stepTextContainer}>
                <Text style={styles(wp, hp).stepTitle}>
                  We Scan Our Network of Therapists
                </Text>
                <Text style={styles(wp, hp).stepDescription}>
                  We match you with a therapist who fits your preferences for
                  gender, age, language and therapy style.
                </Text>
              </View>
            </View>

            {/* Step 3 */}
            <View style={styles(wp, hp).stepCard}>
              <View style={styles(wp, hp).stepIconContainer}>
                <View style={styles(wp, hp).stepIcon}>
                  <Ionicons name="leaf" size={wp(5)} color="#22c55e" />
                </View>
              </View>
              <View style={styles(wp, hp).stepTextContainer}>
                <Text style={styles(wp, hp).stepTitle}>
                  We Find Your Best Match
                </Text>
                <Text style={styles(wp, hp).stepDescription}>
                  We match you with a therapist who fits your preferences for
                  gender, age, language and therapy style.
                </Text>
              </View>
            </View>

            {/* Step 4 */}
            <View style={styles(wp, hp).stepCard}>
              <View style={styles(wp, hp).stepIconContainer}>
                <View style={styles(wp, hp).stepIcon}>
                  <Ionicons name="calendar" size={wp(5)} color="#22c55e" />
                </View>
              </View>
              <View style={styles(wp, hp).stepTextContainer}>
                <Text style={styles(wp, hp).stepTitle}>
                  You Book and Connect
                </Text>
                <Text style={styles(wp, hp).stepDescription}>
                  You can review their profile, book your first session, and
                  start chatting directly.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
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
            source={require('../../Theme/assets/image/logo.png')}
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
            <Image
              source={require('../../Theme/assets/image/photroom.png')}
              style={styles(wp, hp).plant}
            />
          </View>
        </View>

        {/* Description Text */}
        <View style={styles(wp, hp).descriptionContainer}>
          <Text style={styles(wp, hp).descriptionText}>
            This will only take a moment as we carefully match you with a
            therapist who fits your needs.
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

      {/* Matching Explanation Popup */}
      <MatchingExplanationPopup />
    </ImageBackground>
  );
};

export default TherapistMatchingScreen;
