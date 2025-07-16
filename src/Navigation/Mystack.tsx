import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import VerificationCode from '../Screens/VerificationCode';
import SuccessScreen from '../Screens/SuccessScreen';
import BottomTabs from './MyTab';
import ExploreScreen from '../Screens/ExploreScreen';
import JournalScreen from '../Screens/JournalScreen';
import SearchScreen from '../Screens/SearchScreen';
import EventDetailsScreen from '../Screens/Event/EventDetailsScreen';
import ReviewPaymentScreen from '../Screens/Event/ReviewPaymentScreen';
import PaymentConfirmationScreen from '../Screens/Event/PaymentConfirmationScreen';
import MyJourneyScreen from '../Screens/Home/MyJourneyScreen';
import IncomingCallScreen from '../Screens/call/IncomingCallScreen';
import VideoCallScreen from '../Screens/call/VideoCallScreen';
import MessageScreen from '../Screens/menu/MessageScreen';
import DoctorProfileScreen from '../Screens/Doctor/DoctorProfileScreen';
import BookAppointment from '../Screens/Doctor/BookAppointment';


export type RootStackParamList = {
  splashScreen: undefined;
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  VerificationCode: undefined;
  SuccessScreen: undefined;
  HomeScreen: undefined;
  ExploreScreen: undefined;
  JournalScreen: undefined;
  SearchScreen: undefined;
  EventDetailsScreen: undefined;
  ReviewPaymentScreen: undefined;
  MyJourneyScreen: undefined;
  IncomingCallScreen: undefined;
  VideoCallScreen: undefined;
  MessageScreen: undefined;
  PaymentConfirmationScreen: undefined;
  DoctorProfileScreen: undefined;
  BookAppointment: undefined;
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
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="JournalScreen" component={JournalScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="EventDetailsScreen" component={EventDetailsScreen} />
      <Stack.Screen
        name="ReviewPaymentScreen"
        component={ReviewPaymentScreen}
      />
      <Stack.Screen
        name="PaymentConfirmationScreen"
        component={PaymentConfirmationScreen}
      />
      <Stack.Screen name="DoctorProfileScreen" component={DoctorProfileScreen} />
      <Stack.Screen name="BookAppointment" component={BookAppointment}/>
      <Stack.Screen name="MyJourneyScreen" component={MyJourneyScreen} />
      <Stack.Screen name="IncomingCallScreen" component={IncomingCallScreen} />
      <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
       <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
