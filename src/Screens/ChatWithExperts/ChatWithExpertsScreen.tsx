/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './chatWithExpertsStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChatWithExpertsScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePeerChat = () => {
    // Navigate to peer chat screen
    navigation.navigate('PeerChatScreen');
  };

  const handleAIChat = () => {
    // Navigate to AI chat screen
    navigation.navigate('AIChatScreen');
  };

  const handleAIPeerChat = () => {
    // Navigate to AI peer chat screen
    navigation.navigate('AIPeerChatScreen');
  };

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')} // Use your background image
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        {/* Back Arrow */}
        <TouchableOpacity
          style={[styles.backButton, { top: hp(2), left: wp(5) }]}
          onPress={handleBackPress}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={wp(8.5)}
            color="#000"
          />
        </TouchableOpacity>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/image/logo.png')}
            style={styles.logo}
          />
        </View>

        {/* Main Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.mainQuestion}>
            Who would you like to talk to today?
          </Text>
          <Text style={styles.subtitle}>
            Support is available 24/7 - choose what suits you best.
          </Text>
        </View>

        {/* Cards Container */}
        <View style={styles.cardsContainer}>
          {/* Peer Chat Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <View style={styles.peerIcon}>
                  <Image
                    source={require('../../../assets/image/chAT.png')}
                    style={styles.peerIcon}
                  />
                </View>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Talk to a Peer</Text>
                <Text style={styles.cardDescription}>
                  Connect with someone who understands your journey. Anonymous
                  and supportive.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={handlePeerChat}
            >
              <Text style={styles.cardButtonText}>Start Peer Chat</Text>
            </TouchableOpacity>
          </View>

          {/* AI Companion Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <View style={styles.aiIcon}>
                  <Image
                    source={require('../../../assets/image/ai-bot.png')}
                    style={styles.peerIcon}
                  />
                </View>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Talk to an AI Companion</Text>
                <Text style={styles.cardDescription}>
                  Need to vent or reflect? Our AI is here for you anytime,
                  anywhere.
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.cardButton} onPress={handleAIPeerChat}>
              <Text style={styles.cardButtonText}>Start Chat with AI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ChatWithExpertsScreen;
