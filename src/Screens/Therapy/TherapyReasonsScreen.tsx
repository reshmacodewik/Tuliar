import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from './therapyReasonsStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const therapyReasons = [
  { id: 'anxiety', title: 'Anxiety' },
  { id: 'depression', title: 'Depression' },
  { id: 'grief', title: 'Grief / Loss' },
  { id: 'relationships', title: 'Relationship Challenges' },
  { id: 'work', title: 'Work Stress' },
];

const TherapyReasonsScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [otherReason, setOtherReason] = useState('');
  const [commitmentChecked, setCommitmentChecked] = useState(true);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleReasonToggle = (reasonId: string) => {
    setSelectedReasons(prev => 
      prev.includes(reasonId)
        ? prev.filter(id => id !== reasonId)
        : [...prev, reasonId]
    );
  };

  const handleCommitmentToggle = () => {
    setCommitmentChecked(!commitmentChecked);
  };

  const handleNext = () => {
    console.log('Selected reasons:', selectedReasons);
    console.log('Other reason:', otherReason);
    console.log('Commitment checked:', commitmentChecked);
    // Navigate to the user survey screen
    navigation.navigate('UserSurvey');
  };

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
        </View>

        {/* Logo */}
        <View style={styles(wp, hp).logoContainer}>
          <Image
            source={require('../../Theme/assets/image/logo.png')}
            style={styles(wp, hp).logo}
          />
        </View>

        {/* Main Question */}
        <View style={styles(wp, hp).questionContainer}>
          <Text style={styles(wp, hp).mainQuestion}>
            What Brings You To Therapy?
          </Text>
        </View>

      
          {/* Therapy Reasons */}
          <View style={styles(wp, hp).reasonsContainer}>
            {therapyReasons.map((reason) => (
              <TouchableOpacity
                key={reason.id}
                style={styles(wp, hp).reasonCard}
                onPress={() => handleReasonToggle(reason.id)}
              >
                <View style={[
                  styles(wp, hp).checkbox,
                  selectedReasons.includes(reason.id) && styles(wp, hp).checkboxChecked
                ]}>
                  {selectedReasons.includes(reason.id) && (
                    <Ionicons name="checkmark" size={wp(4)} color="#fff" />
                  )}
                </View>
                <Text style={styles(wp, hp).reasonText}>{reason.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Other Input */}
          <View style={styles(wp, hp).otherContainer}>
            <Text style={styles(wp, hp).otherLabel}>Other</Text>
            <TextInput
              style={styles(wp, hp).otherInput}
              placeholder="Please specify"
              placeholderTextColor="#999"
              value={otherReason}
              onChangeText={setOtherReason}
              multiline
            />
          </View>

          {/* Commitment Checkbox */}
          <View style={styles(wp, hp).commitmentContainer}>
            <TouchableOpacity
              style={styles(wp, hp).commitmentRow}
              onPress={handleCommitmentToggle}
            >
              <View style={[
                styles(wp, hp).commitmentCheckbox,
                commitmentChecked && styles(wp, hp).commitmentCheckboxChecked
              ]}>
                {commitmentChecked && (
                  <Ionicons name="checkmark" size={wp(4)} color="#fff" />
                )}
              </View>
              <Text style={styles(wp, hp).commitmentText}>
                I understand the commitment required for mentorship
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles(wp, hp).buttonContainer}>
          <TouchableOpacity
            style={styles(wp, hp).nextButton}
            onPress={handleNext}
          >
            <Text style={styles(wp, hp).nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
    
        {/* Next Button */}
        
      </View>
      </ScrollView>

    </ImageBackground>
  );
};

export default TherapyReasonsScreen; 