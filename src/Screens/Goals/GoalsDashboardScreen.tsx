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

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './goalsDashboardStyles';

const GoalsDashboardScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [progressRating, setProgressRating] = useState(6);
  const [steps, setSteps] = useState([
    { id: 1, text: 'Wake up early', completed: false },
  ]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleEditGoals = () => {
    navigation.navigate('GoalDetailsScreen');
  };

  const handleAddNewGoal = () => {
    navigation.navigate('GoalDetailsScreen');
  };

  const toggleStep = (stepId: number) => {
    setSteps(
      steps.map(step =>
        step.id === stepId ? { ...step, completed: !step.completed } : step,
      ),
    );
  };

  const getProgressPercentage = () => {
    const completedSteps = steps.filter(step => step.completed).length;
    return (completedSteps / steps.length) * 100;
  };

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles(wp, hp).bgimg}
    >
      <View style={styles(wp, hp).mainContainer}>
        <ScrollView
          style={styles(wp, hp).container}
          contentContainerStyle={styles(wp, hp).scrollContent}
          showsVerticalScrollIndicator={false}
        >
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
            <Text style={styles(wp, hp).headerTitle}>Goals Dashboard</Text>
            <View style={styles(wp, hp).headerSpacer} />
          </View>

          {/* Goal Card */}
          <View style={styles(wp, hp).goalCard}>
            {/* Goal Title */}
            <Text style={styles(wp, hp).goalTitle}>Goal#1 Be better</Text>

            {/* Progress Section */}
            <View style={styles(wp, hp).progressSection}>
              <Text style={styles(wp, hp).progressQuestion}>
                How do you feel about your progress so far?
              </Text>

              <View style={styles(wp, hp).progressContainer}>
                <View style={styles(wp, hp).progressBarContainer}>
                  <View style={styles(wp, hp).progressBarTrack}>
                    <View
                      style={[
                        styles(wp, hp).progressBarFill,
                        { width: `${getProgressPercentage()}%` },
                      ]}
                    />
                  </View>
                </View>

                <View style={styles(wp, hp).progressRating}>
                  <Text style={styles(wp, hp).progressRatingText}>
                    {progressRating}/10
                  </Text>
                  <Text style={styles(wp, hp).progressEmoji}>😊</Text>
                </View>
              </View>
            </View>

            {/* Steps Section */}
            <View style={styles(wp, hp).stepsSection}>
              <Text style={styles(wp, hp).stepsTitle}>
                Steps to achieve this goal
              </Text>

              <View style={styles(wp, hp).stepsList}>
                {steps.map(step => (
                  <TouchableOpacity
                    key={step.id}
                    style={styles(wp, hp).stepItem}
                    onPress={() => toggleStep(step.id)}
                  >
                    <View
                      style={[
                        styles(wp, hp).stepCheckbox,
                        step.completed && styles(wp, hp).stepCheckboxChecked,
                      ]}
                    >
                      {step.completed && (
                        <Ionicons name="checkmark" size={wp(3)} color="#fff" />
                      )}
                    </View>
                    <Text
                      style={[
                        styles(wp, hp).stepText,
                        step.completed && styles(wp, hp).stepTextCompleted,
                      ]}
                    >
                      {step.text}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles(wp, hp).actionButtonsContainer}>
            <TouchableOpacity
              style={styles(wp, hp).editGoalsButton}
              onPress={handleEditGoals}
            >
              <Text style={styles(wp, hp).editGoalsButtonText}>Edit goals</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles(wp, hp).addNewGoalButton}
              onPress={handleAddNewGoal}
            >
              <Text style={styles(wp, hp).addNewGoalButtonText}>
                Add a new goal
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default GoalsDashboardScreen;
