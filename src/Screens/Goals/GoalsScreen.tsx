import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './goalsStyles';
import CustomHeader from '../../components/CustomHeader';

const goalSteps = [
  {
    id: '1',
    title: 'Identify your goals',
  },
  {
    id: '2',
    title: 'Create actionable steps',
  },
  {
    id: '3',
    title: 'Track your progress',
  },
];

const GoalsScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const { top, bottom } = useSafeAreaInsets();
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleNextPress = () => {
    navigation.navigate('GoalDetailsScreen');
  };

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles(wp, hp).bgimg}
    >
  
        <View style={[styles(wp, hp).mainContainer, { paddingTop: top, paddingBottom: bottom }]}>
           <CustomHeader title="Goals" onBack={() => navigation.goBack()} />
        {/* Header */}
        {/* <View style={styles(wp, hp).header}>
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
          <Text style={styles(wp, hp).headerTitle}>Goals</Text>
          <View style={styles(wp, hp).headerSpacer} />
        </View> */}

        <ScrollView
          style={styles(wp, hp).container}
          contentContainerStyle={styles(wp, hp).scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Goal Process Steps */}
          <View style={styles(wp, hp).stepsSection}>
            {goalSteps.map((step, index) => (
              <View key={step.id} style={styles(wp, hp).stepContainer}>
                <TouchableOpacity style={styles(wp, hp).stepButton}>
                  <Text style={styles(wp, hp).stepButtonText}>
                    {step.title}
                  </Text>
                </TouchableOpacity>
                {index < goalSteps.length - 1 && (
                  <View style={styles(wp, hp).stepSeparator}>
                    <Ionicons name="arrow-down-sharp" size={wp(8)} color="#000" />
                  </View>
                )}
              </View>
            ))}
          </View>

          {/* How it works Section */}
          <View style={styles(wp, hp).howItWorksSection}>
            <View style={styles(wp, hp).howItWorksCard}>
              <Text style={styles(wp, hp).howItWorksTitle}>How it works</Text>
              <Text style={styles(wp, hp).howItWorksText}>
                You will start by identifying a goal and creating a plan to achieve it. 
                You can set multiple goals, and your therapist will support you and help 
                keep track of your progress.
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Action Button */}
        <View style={styles(wp, hp).bottomActionContainer}>
          <TouchableOpacity
            style={styles(wp, hp).nextButton}
            onPress={handleNextPress}
          >
            <Text style={styles(wp, hp).nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </ImageBackground>
   
  );
};

export default GoalsScreen; 