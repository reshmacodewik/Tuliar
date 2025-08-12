import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './createStepsStyles';

const CreateStepsScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [stepText, setStepText] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [steps, setSteps] = useState<string[]>([]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    if (stepText.trim()) {
      setSteps([...steps, stepText.trim()]);
      setStepText('');
      setIsRecurring(false);
    }
    console.log('Steps saved:', steps);
    // Navigate to the Goals Dashboard
    navigation.navigate('GoalsDashboard');
  };

  const handleAddAnotherStep = () => {
    if (stepText.trim()) {
      setSteps([...steps, stepText.trim()]);
      setStepText('');
      setIsRecurring(false);
    }
  };

  const toggleRecurring = () => {
    setIsRecurring(!isRecurring);
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
          <Text style={styles(wp, hp).headerTitle}>Create Steps</Text>
          <View style={styles(wp, hp).headerSpacer} />
        </View>

        <ScrollView
          style={styles(wp, hp).container}
          contentContainerStyle={styles(wp, hp).scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 3D Illustration Placeholder */}
          <View style={styles(wp, hp).illustrationContainer}>
            <Image source={require('../../../assets/image/progresschart.png')} style={styles(wp, hp).illustration} />
          </View>

          {/* Goal Display */}
          <View style={styles(wp, hp).goalDisplay}>
            <Text style={styles(wp, hp).goalText}>Goal #1: Be Better</Text>
          </View>

          {/* Step Input Card */}
          <View style={styles(wp, hp).stepInputCard}>
            <Text style={styles(wp, hp).stepQuestion}>
              What is a step you can take to acheive this goal?
            </Text>
            <TextInput
              style={styles(wp, hp).stepInput}
              placeholder="Steps should be specific, measurable, and time-oriented."
              placeholderTextColor="#999"
              value={stepText}
              onChangeText={setStepText}
              multiline
              textAlignVertical="top"
            />
            
            {/* Recurring Checkbox */}
            <TouchableOpacity
              style={styles(wp, hp).checkboxContainer}
              onPress={toggleRecurring}
            >
              <View style={[
                styles(wp, hp).checkbox,
                isRecurring && styles(wp, hp).checkboxChecked
              ]}>
                {isRecurring && (
                  <Ionicons name="checkmark" size={wp(4)} color="#fff" />
                )}
              </View>
              <Text style={styles(wp, hp).checkboxLabel}>Recurring</Text>
            </TouchableOpacity>
          </View>

          {/* Add Another Step */}
          <TouchableOpacity
            style={styles(wp, hp).addAnotherStep}
            onPress={handleAddAnotherStep}
          >
            <Ionicons name="add" size={wp(5)} color="#264734" />
            <Text style={styles(wp, hp).addAnotherStepText}>Add another step</Text>
          </TouchableOpacity>

          {/* Display existing steps */}
          {steps.length > 0 && (
            <View style={styles(wp, hp).existingStepsContainer}>
              <Text style={styles(wp, hp).existingStepsTitle}>Added Steps:</Text>
              {steps.map((step, index) => (
                <View key={index} style={styles(wp, hp).existingStepItem}>
                  <Text style={styles(wp, hp).existingStepText}>
                    {index + 1}. {step}
                  </Text>
                </View>
              ))}
            </View>
          )}
           <View style={styles(wp, hp).bottomActionContainer}>
          <TouchableOpacity
            style={styles(wp, hp).saveButton}
            onPress={handleSave}
          >
            <Text style={styles(wp, hp).saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>

        {/* Save Button */}
       
      </View>
    </ImageBackground>
  );
};

export default CreateStepsScreen; 