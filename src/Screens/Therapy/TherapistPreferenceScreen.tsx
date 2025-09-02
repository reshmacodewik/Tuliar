import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from './therapistPreferenceStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TherapistPreferenceScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  
  // State for all preference selections
  const [genderPreference, setGenderPreference] = useState<string>('');
  const [religiousPreference, setReligiousPreference] = useState<string>('');
  const [ethnicPreference, setEthnicPreference] = useState<string>('');
  const [therapyStyle, setTherapyStyle] = useState<string>('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    console.log('Therapist preferences:', {
      genderPreference,
      religiousPreference,
      ethnicPreference,
      therapyStyle,
    });
    // Navigate to the therapist matching screen
    navigation.navigate('TherapistMatching');
  };

  const renderCheckbox = (isSelected: boolean) => (
    <View style={[
      styles(wp, hp).checkbox,
      isSelected && styles(wp, hp).checkboxChecked
    ]}>
      {isSelected && (
        <Ionicons name="checkmark" size={wp(4)} color="#fff" />
      )}
    </View>
  );

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles(wp, hp).bgimg}
    >
       <ScrollView
          style={styles(wp, hp).contentContainer}
          contentContainerStyle={styles(wp, hp).scrollContent}
          showsVerticalScrollIndicator={false}
        >
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
          <Text style={styles(wp, hp).headerTitle}>Tell us your therapist Preference</Text>
          <View style={styles(wp, hp).headerSpacer} />
        </View>

    
          {/* Main Content Card */}
          <View style={styles(wp, hp).mainCard}>
            {/* Question 1: Gender Preference */}
            <View style={styles(wp, hp).questionSection}>
              <Text style={styles(wp, hp).questionText}>
                Do you have a gender preference for your therapist?
              </Text>
              <View style={styles(wp, hp).optionsContainer}>
                {['Female', 'Male', 'No Preference'].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles(wp, hp).optionRow}
                    onPress={() => setGenderPreference(option)}
                  >
                    {renderCheckbox(genderPreference === option)}
                    <Text style={styles(wp, hp).optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Question 2: Religious/Spiritual Beliefs */}
            <View style={styles(wp, hp).questionSection}>
              <Text style={styles(wp, hp).questionText}>
                Would you prefer a therapist who shares your religious or spiritual beliefs?
              </Text>
              <View style={styles(wp, hp).optionsContainer}>
                {['Yes', 'No preference'].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles(wp, hp).optionRow}
                    onPress={() => setReligiousPreference(option)}
                  >
                    {renderCheckbox(religiousPreference === option)}
                    <Text style={styles(wp, hp).optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Question 3: Racial/Ethnic Background */}
            <View style={styles(wp, hp).questionSection}>
              <Text style={styles(wp, hp).questionText}>
                Would you like a therapist from a specific racial/ethnic background?
              </Text>
              <View style={styles(wp, hp).optionsContainer}>
                {['Yes', 'No preference'].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles(wp, hp).optionRow}
                    onPress={() => setEthnicPreference(option)}
                  >
                    {renderCheckbox(ethnicPreference === option)}
                    <Text style={styles(wp, hp).optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Question 4: Therapy Style */}
            <View style={styles(wp, hp).questionSection}>
              <Text style={styles(wp, hp).questionText}>
                What style of therapy do you prefer?
              </Text>
              <View style={styles(wp, hp).optionsContainer}>
                {[
                  'Calm and reflective',
                  'Goal-oriented',
                  'Compassionate and supportive',
                  'Not sure'
                ].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles(wp, hp).optionRow}
                    onPress={() => setTherapyStyle(option)}
                  >
                    {renderCheckbox(therapyStyle === option)}
                    <Text style={styles(wp, hp).optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        

        {/* Next Button */}
        
      </View>
      <View style={styles(wp, hp).buttonContainer}>
          <TouchableOpacity
            style={styles(wp, hp).nextButton}
            onPress={handleNext}
          >
            <Text style={styles(wp, hp).nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default TherapistPreferenceScreen; 