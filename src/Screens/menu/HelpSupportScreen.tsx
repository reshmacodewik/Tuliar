import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from './HelpSupportStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useResponsive } from '../../Responsive/useResponsive';

const HelpSupportScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();
      const { wp, hp } = useResponsive();
  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={styles.bgimg}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8.5)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Help & Support</Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HelpScreen')}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>💬</Text>
            </View>
            <Text style={styles.buttonText}>Chat with us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>❓</Text>
            </View>
            <Text style={styles.buttonText}>Browse FAQs</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.topicHeader}>Help Topics</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.topicButton}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>💳</Text>
            </View>
            <Text style={styles.topicText}>Payment & Billing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topicButton}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>🧑‍⚕️</Text>
            </View>
            <Text style={styles.topicText}>Therapy & Coaching</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topicButton}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>🔍</Text>
            </View>
            <Text style={styles.topicText}>Peer Chats & Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topicButton}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>🎯</Text>
            </View>
            <Text style={styles.topicText}>Tuliar Points</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.assistText}>
          Still need help? Talk to the assistance
        </Text>
        <TouchableOpacity style={styles.talkButton}>
          <Text style={styles.talkButtonText}>💬 Talk Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default HelpSupportScreen;
