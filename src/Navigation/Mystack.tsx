import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import VerificationCode from '../Screens/Auth/VerificationCode';
import SuccessScreen from '../Screens/Auth/SuccessScreen';
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
import Coaching from '../Screens/Coaching/Coaching';
import OnboardingJourneyScreen from '../Screens/Coaching/OnboardingJourneyScreen';
import DoctorProfileScreen from '../Screens/Doctor/DoctorProfileScreen';
import BookAppointment from '../Screens/Doctor/BookAppointment';
import QuestionnaireScreen from '../Screens/Coaching/QuestionnaireScreen';
import SubscriptionScreen from '../Screens/Coaching/SubscriptionScreen';
import MentorshipApplyScreen from '../Screens/Coaching/MentorshipApplyScreen';
import MentorshipConnectingScreen from '../Screens/Coaching/MentorshipConnectingScreen';
import DoctorListScreen from '../Screens/Coaching/DoctorListScreen';
import PaymentsMainScreen from '../Screens/payments/PaymentsMainScreen';
import PaymentDetailsScreen from '../Screens/payments/PaymentDetailsScreen';
import AddCardScreen from '../Screens/payments/AddCardScreen';
import EarnPointsScreen from '../Screens/payments/EarnPointsScreen';



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
  Coaching: undefined;
  OnboardingJourney: undefined;
  Questionnaire: undefined;
  Subscription: undefined;
  MentorshipApply: undefined;
  MentorshipConnecting: undefined;
  DoctorList: undefined;
  PaymentsMainScreen: undefined;
  PaymentDetailsScreen: undefined;
  AddCardScreen: undefined;
  EarnPointsScreen: undefined;
  OnboardingJourneyScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MyStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeScreen' >
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
      <Stack.Screen name="Coaching" component={Coaching} /> 
      <Stack.Screen name="OnboardingJourney" component={OnboardingJourneyScreen} />
      <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      <Stack.Screen name="MentorshipApply" component={MentorshipApplyScreen} />
      <Stack.Screen name="MentorshipConnecting" component={MentorshipConnectingScreen} />
      <Stack.Screen name="DoctorList" component={DoctorListScreen} />
      <Stack.Screen name="PaymentsMainScreen" component={PaymentsMainScreen} />
      <Stack.Screen name="PaymentDetailsScreen" component={PaymentDetailsScreen} />
      <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
      <Stack.Screen name="EarnPointsScreen" component={EarnPointsScreen} />
      <Stack.Screen name="OnboardingJourneyScreen" component={OnboardingJourneyScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
