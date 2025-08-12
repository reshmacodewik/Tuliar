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
import styles from './goalDetailsStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const goalExamples = [
  'Managing difficult emotions',
  'Increase my ability to manage the impact of difficult emotions.',
  'Grow in my understanding and management of my triggers.',
  'Identify grounding or relaxation techniques that work for me.',
];

const GoalDetailsScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [goalText, setGoalText] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    console.log('Goal submitted:', goalText);
    // Navigate to the Create Steps screen
    navigation.navigate('CreateSteps');
  };

  const handleExamplePress = (example: string) => {
    setGoalText(example);
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
          <Text style={styles(wp, hp).headerTitle}>Set a Goal</Text>
          <View style={styles(wp, hp).headerSpacer} />
        </View>

        <ScrollView
          style={styles(wp, hp).container}
          contentContainerStyle={styles(wp, hp).scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Goal Input Card */}
          <View style={styles(wp, hp).goalInputCard}>
            <Text style={styles(wp, hp).goalQuestion}>
              What is a goal you'd like to achieve while in therapy?
            </Text>
            <TextInput
              style={styles(wp, hp).goalInput}
              placeholder="Write here..."
              placeholderTextColor="#999"
              value={goalText}
              onChangeText={setGoalText}
              multiline
              textAlignVertical="top"
            />
          </View>

          {/* Examples Card */}
          <View style={styles(wp, hp).examplesCard}>
            <Text style={styles(wp, hp).examplesInstruction}>
              Feel free to use an example and rewrite it in your own words.
            </Text>
            
            {/* First example as a button */}
            <TouchableOpacity
              style={styles(wp, hp).exampleButton}
              onPress={() => handleExamplePress('Managing difficult emotions')}
            >
              <Text style={styles(wp, hp).exampleButtonText}>
                Managing difficult emotions
              </Text>
            </TouchableOpacity>

            {/* Other examples as text */}
            <View style={styles(wp, hp).examplesList}>
              {goalExamples.slice(1).map((example, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles(wp, hp).exampleTextContainer}
                  onPress={() => handleExamplePress(example)}
                >
                  <Text style={styles(wp, hp).exampleText}>{example}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Bottom Action Button */}
        <View style={styles(wp, hp).bottomActionContainer}>
          <TouchableOpacity
            style={styles(wp, hp).submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles(wp, hp).submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GoalDetailsScreen; 