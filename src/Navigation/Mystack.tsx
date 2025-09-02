import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import VerificationCode from '../Screens/Auth/VerificationCode';
import SuccessScreen from '../Screens/Auth/SuccessScreen';
import BottomTabs from './MyTab';
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
import {
  ChatWithExpertsScreen,
  PeerChatScreen,
  ChatConfirmationScreen,
} from '../Screens/ChatWithExperts';
import AIPeerChatScreen from '../Screens/ChatWithExperts/AIPeerChatScreen';
import PeerChat from '../Screens/ChatWithExperts/PeerChat';
import GroupSessionsScreen from '../Screens/GroupSessions';
import JournalScreen from '../Screens/Journal/JournalScreen';
import GoalsScreen from '../Screens/Goals/GoalsScreen';
import GoalDetailsScreen from '../Screens/Goals/GoalDetailsScreen';
import CreateStepsScreen from '../Screens/Goals/CreateStepsScreen';
import GoalsDashboardScreen from '../Screens/Goals/GoalsDashboardScreen';
import TherapyScreen from '../Screens/Therapy/TherapyScreen';
import FindTherapistScreen from '../Screens/Therapy/FindTherapistScreen';
import TherapyReasonsScreen from '../Screens/Therapy/TherapyReasonsScreen';
import UserSurveyScreen from '../Screens/Therapy/UserSurveyScreen';
import TherapistPreferenceScreen from '../Screens/Therapy/TherapistPreferenceScreen';
import TherapistMatchingScreen from '../Screens/Therapy/TherapistMatchingScreen';
import MessagesScreen from '../Screens/menu/MessagesScreen';
import ChatScreen from '../Screens/menu/ChatScreen';
import SettingsScreen from '../Screens/menu/SettingsScreen';
import NotificationsScreen from '../Screens/menu/NotificationsScreen';
import ChangePasswordScreen from '../Screens/menu/ChangePasswordScreen';
import HelpSupportScreen from '../Screens/menu/HelpSupportScreen';
import EditProfileScreen from '../Screens/menu/EditProfileScreen';
import CalendarScreen from '../Screens/menu/CalendarScreen';
import SessionDetailScreen from '../Screens/menu/SessionDetailScreen';
import HelpScreen from '../Screens/menu/HelpScreen';
import ExploreScreen from '../Screens/Explore/ExploreScreen';
import MyFeedDetail from '../Screens/Home/MyFeedDetail';

export type RootStackParamList = {
  splashScreen: undefined;
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  VerificationCode: undefined;
  SuccessScreen: undefined;
  HomeScreen: undefined;
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
  ChatWithExpertsScreen: undefined;
  PeerChatScreen: undefined;
  ChatConfirmationScreen: undefined;
  AIPeerChatScreen: undefined;
  PeerChat: undefined;
  GroupSessionsScreen: undefined;
  GoalsScreen: undefined;
  GoalDetailsScreen: undefined;
  CreateSteps: undefined;
  GoalsDashboard: undefined;
  TherapyScreen: undefined;
  FindTherapist: undefined;
  TherapyReasons: undefined;
  UserSurvey: undefined;
  TherapistPreference: undefined;
  TherapistMatching: undefined;
  MessagesScreen: undefined;
  ChatScreen: undefined;
  SettingsScreen: undefined;
  NotificationsScreen: undefined;
  ChangePasswordScreen: undefined;
  HelpSupportScreen: undefined;
  HelpScreen: undefined;
  EditProfileScreen: undefined;
  CalendarScreen: undefined;
  SessionDetailScreen: undefined;
  ExploreScreen: undefined;
  MyFeedDetail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MyStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="splashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
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
      <Stack.Screen
        name="DoctorProfileScreen"
        component={DoctorProfileScreen}
      />
      <Stack.Screen name="BookAppointment" component={BookAppointment} />
      <Stack.Screen name="MyJourneyScreen" component={MyJourneyScreen} />
      <Stack.Screen name="IncomingCallScreen" component={IncomingCallScreen} />
      <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
      <Stack.Screen name="Coaching" component={Coaching} />
      <Stack.Screen
        name="OnboardingJourney"
        component={OnboardingJourneyScreen}
      />
      <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      <Stack.Screen name="MentorshipApply" component={MentorshipApplyScreen} />
      <Stack.Screen
        name="MentorshipConnecting"
        component={MentorshipConnectingScreen}
      />
      <Stack.Screen name="DoctorList" component={DoctorListScreen} />
      <Stack.Screen name="PaymentsMainScreen" component={PaymentsMainScreen} />
      <Stack.Screen
        name="PaymentDetailsScreen"
        component={PaymentDetailsScreen}
      />
      <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
      <Stack.Screen name="EarnPointsScreen" component={EarnPointsScreen} />
      <Stack.Screen
        name="OnboardingJourneyScreen"
        component={OnboardingJourneyScreen}
      />
      <Stack.Screen
        name="ChatWithExpertsScreen"
        component={ChatWithExpertsScreen}
      />
      <Stack.Screen name="PeerChatScreen" component={PeerChatScreen} />
      <Stack.Screen name="AIPeerChatScreen" component={AIPeerChatScreen} />
      <Stack.Screen
        name="ChatConfirmationScreen"
        component={ChatConfirmationScreen}
      />
      <Stack.Screen name="PeerChat" component={PeerChat} />
      <Stack.Screen
        name="GroupSessionsScreen"
        component={GroupSessionsScreen}
      />
      <Stack.Screen name="GoalsScreen" component={GoalsScreen} />
      <Stack.Screen name="GoalDetailsScreen" component={GoalDetailsScreen} />
      <Stack.Screen name="CreateSteps" component={CreateStepsScreen} />
      <Stack.Screen name="GoalsDashboard" component={GoalsDashboardScreen} />
      <Stack.Screen name="TherapyScreen" component={TherapyScreen} />
      <Stack.Screen name="FindTherapist" component={FindTherapistScreen} />
      <Stack.Screen name="TherapyReasons" component={TherapyReasonsScreen} />
      <Stack.Screen name="UserSurvey" component={UserSurveyScreen} />
      <Stack.Screen
        name="TherapistPreference"
        component={TherapistPreferenceScreen}
      />
      <Stack.Screen
        name="TherapistMatching"
        component={TherapistMatchingScreen}
      />
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen
        name="SessionDetailScreen"
        component={SessionDetailScreen}
      />
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="MyFeedDetail" component={MyFeedDetail} />
    </Stack.Navigator>
  );
};

export default MyStack;
