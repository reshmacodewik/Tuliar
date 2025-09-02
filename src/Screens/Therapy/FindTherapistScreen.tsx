import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from './findTherapistStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const therapyOptions = [
  {
    id: 'general',
    title: 'General Therapy',
    description: 'Stress, relationships, life challenges affordable, broad support from licensed counselors.',
    price: 'From KES 2,500/hr',
    icon: 'leaf',
    iconColor: '#4CAF50',
  },
  {
    id: 'specialized',
    title: 'Specialized Therapy',
    description: 'Stress, relationships, life challenges affordable, broad support from licensed counselors.',
    price: 'From KES 4000-8000/hr',
    icon: 'star',
    iconColor: '#FFD700',
  },
];

const FindTherapistScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedOption, setSelectedOption] = useState<string>('specialized');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleContinue = () => {
    if (selectedOption) {
      console.log('Selected therapy option:', selectedOption);
      // Navigate to the therapy reasons screen
      navigation.navigate('TherapyReasons');
    }
  };

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles(wp, hp).bgimg}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={styles(wp, hp).mainContainer}>
       
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

        {/* Title and Question */}
        <View style={styles(wp, hp).titleContainer}>
          <Text style={styles(wp, hp).mainTitle}>Find A Therapist</Text>
          <Text style={styles(wp, hp).questionText}>
            What kind of therapy are you looking for?
          </Text>
        </View>

        {/* Therapy Options */}
        <ScrollView
          style={styles(wp, hp).optionsContainer}
          contentContainerStyle={styles(wp, hp).optionsContent}
          showsVerticalScrollIndicator={false}
        >
          {therapyOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles(wp, hp).therapyCard,
                selectedOption === option.id && styles(wp, hp).therapyCardSelected
              ]}
              onPress={() => handleOptionSelect(option.id)}
            >
              <View style={styles(wp, hp).cardHeader}>
                                <View style={styles(wp, hp).iconContainer}>
                  <Image 
                    source={
                      option.id === 'general' 
                        ? require('../../Theme/assets/icon/leaf.png')
                        : require('../../Theme/assets/icon/star.png')
                    } 
                    style={styles(wp, hp).icon} 
                  />
                </View>
                <View style={styles(wp, hp).cardContent}>
                  <Text style={styles(wp, hp).cardTitle}>{option.title}</Text>
                  <Text style={styles(wp, hp).cardDescription}>
                    {option.description}
                  </Text>
                  <Text style={styles(wp, hp).cardPrice}>{option.price}</Text>
                </View>
              </View>
              
              {selectedOption === option.id && (
                <View style={styles(wp, hp).selectedIndicator}>
                  <Ionicons name="checkmark-circle" size={wp(6)} color="#264734" />
                </View>
              )}
            </TouchableOpacity>
          ))}
           <View style={styles(wp, hp).buttonContainer}>
          <TouchableOpacity
            style={styles(wp, hp).continueButton}
            onPress={handleContinue}
          >
            <Text style={styles(wp, hp).continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>

        {/* Continue Button */}
       
      </View>
    </ImageBackground>
  );
};

export default FindTherapistScreen; 