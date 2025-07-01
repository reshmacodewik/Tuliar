import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import VerificationCode from '../Screens/VerificationCode';
import SuccessScreen from '../Screens/SuccessScreen';

export type RootStackParamList = {
  splashScreen: undefined;
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  VerificationCode: undefined;
  SuccessScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MyStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
