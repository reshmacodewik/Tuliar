import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from './userSurveyStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Custom Slider Component since @react-native-community/slider might not be installed
const CustomSlider = ({ value, onValueChange, style }: any) => {
  const { wp, hp } = useResponsive();
  
  return (
    <View style={[style, { height: hp(2) }]}>
      <View style={{ 
        width: '100%', 
        height: hp(0.5), 
        backgroundColor: '#E0E0E0', 
        borderRadius: wp(1),
        position: 'relative'
      }}>
        <View style={{
          width: `${value}%`,
          height: '100%',
          backgroundColor: '#264734',
          borderRadius: wp(1),
        }} />
        <View style={{
          position: 'absolute',
          left: `${value}%`,
          top: -hp(0.75),
          width: wp(6),
          height: wp(6),
          backgroundColor: '#264734',
          borderRadius: wp(3),
          marginLeft: -wp(3),
        }} />
      </View>
    </View>
  );
};

const UserSurveyScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  
  // State for all form fields
  const [duration, setDuration] = useState<string>('');
  const [severity, setSeverity] = useState<number>(30);
  const [previousTherapy, setPreviousTherapy] = useState<string>('');
  const [supportNetwork, setSupportNetwork] = useState<string>('');
  const [diagnosis, setDiagnosis] = useState<string>('');
  const [diagnosisDetails, setDiagnosisDetails] = useState('');
  const [stressCause, setStressCause] = useState<string>('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    console.log('Survey responses:', {
      duration,
      severity,
      previousTherapy,
      supportNetwork,
      diagnosis,
      diagnosisDetails,
      stressCause,
    });
    // Navigate to the therapist preference screen
    navigation.navigate('TherapistPreference');
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
      source={require('../../../assets/image/background.png')}
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
          <Text style={styles(wp, hp).headerTitle}>Tell us more about you</Text>
          <View style={styles(wp, hp).headerSpacer} />
        </View>

      
          {/* Main Content Card */}
          <View style={styles(wp, hp).mainCard}>
            {/* Question 1: Duration */}
            <View style={styles(wp, hp).questionSection}>
              <Text style={styles(wp, hp).questionText}>
                How long have you been experiencing these challenges?
              </Text>
              <View style={styles(wp, hp).optionsContainer}>
                {['Less than 1 month', '1-6 months', '6-12 months', 'Over 1 year'].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles(wp, hp).optionRow}
                    onPress={() => setDuration(option)}
                  >
                    {renderCheckbox(duration === option)}
                    <Text style={styles(wp, hp).optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Question 2: Severity Slider */}
            <View style={styles(wp, hp).questionSection}>
              <Text style={styles(wp, hp).questionText}>
                How much are these issues affecting your daily life?
              </Text>
                             <View style={styles(wp, hp).sliderContainer}>
                 <CustomSlider
                   style={styles(wp, hp).slider}
                   value={severity}
                   onValueChange={setSeverity}
                 />
                <View style={styles(wp, hp).sliderLabels}>
                  <Text style={styles(wp, hp).sliderLabel}>Mild</Text>
                  <Text style={styles(wp, hp).sliderLabel}>Severe</Text>
                </View>
              </View>
            </View>

            {/* Question 3: Previous Therapy */}
            <View style={styles(wp, hp).questionSection}>
              <Text style={styles(wp, hp).questionText}>
                Do you attended therapy before?
              </Text>
              <View style={styles(wp, hp).optionsContainer}>
                {['Yes', 'No'].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles(wp, hp).optionRow}
                    onPress={() => setPreviousTherapy(option)}
                  >
                    {renderCheckbox(previousTherapy === option)}
                    <Text style={styles(wp, hp).optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
                <View style={styles(wp, hp).ratingNumbers}>
                <Text style={styles(wp, hp).ratingText}>1 2 3 5</Text>
              </View>
            </View>

            {/* Question 4: Support Network */}
            <View style={styles(wp, hp).questionSection}>
              <Text style={styles(wp, hp).questionText}>
                Do you have close family or friends you can talk to?
              </Text>
              <View style={styles(wp, hp).optionsContainer}>
                {['Yes, regularly', 'Occasionally', 'No, I feel alone'].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles(wp, hp).optionRow}
                    onPress={() => setSupportNetwork(option)}
                  >
                    {renderCheckbox(supportNetwork === option)}
                    <Text style={styles(wp, hp).optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Question 5: Diagnosis */}
            <View style={styles(wp, hp).questionSection}>
              <Text style={styles(wp, hp).questionText}>
                Have you been diagnosed with any mental health condition?
              </Text>
              <TouchableOpacity
                style={styles(wp, hp).optionRow}
                onPress={() => setDiagnosis(diagnosis === 'Yes' ? '' : 'Yes')}
              >
                {renderCheckbox(diagnosis === 'Yes')}
                <Text style={styles(wp, hp).optionText}>Yes</Text>
              </TouchableOpacity>
              {diagnosis === 'Yes' && (
                <TextInput
                  style={styles(wp, hp).diagnosisInput}
                  placeholder="Please specify"
                  placeholderTextColor="#999"
                  value={diagnosisDetails}
                  onChangeText={setDiagnosisDetails}
                  multiline
                />
              )}
            </View>

            {/* Question 6: Stress Cause */}
            <View style={styles(wp, hp).questionSection}>
              <Text style={styles(wp, hp).questionText}>
                What's causing the most stress in your life right now?
              </Text>
              <View style={styles(wp, hp).optionsContainer}>
                {['Work or school', 'Relationships'].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles(wp, hp).optionRow}
                    onPress={() => setStressCause(option)}
                  >
                    {renderCheckbox(stressCause === option)}
                    <Text style={styles(wp, hp).optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
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

export default UserSurveyScreen; 