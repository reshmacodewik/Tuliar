import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './chatWithExpertsStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RecentChatCard from '../../components/RecentChatCard';

const PeerChatScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleChatNow = (peerName: string) => {
    navigation.navigate('ChatConfirmationScreen');
  };

  // Mock data for peers
  const peers = [
    {
      id: 1,
      name: 'Stacy',
      age: '18-25',
      gender: 'Female',
      condition: 'Anxiety',
      description:
        "I've been where you are. Let's navigate through this together!",
      image: require('../../Theme/assets/image/doc2.png'), // Using existing user icon
    },
    {
      id: 2,
      name: 'Stacy',
      age: '18-25',
      gender: 'Female',
      condition: 'Anxiety',
      description:
        "I've been where you are. Let's navigate through this together!",
      image: require('../../Theme/assets/image/doc2.png'),
    },
    {
      id: 3,
      name: 'Stacy',
      age: '18-25',
      gender: 'Female',
      condition: 'Anxiety',
      description:
        "I've been where you are. Let's navigate through this together!",
      image: require('../../Theme/assets/image/doc2.png'),
    },
    {
      id: 4,
      name: 'Stacy',
      age: '18-25',
      gender: 'Female',
      condition: 'Anxiety',
      description:
        "I've been where you are. Let's navigate through this together!",
      image: require('../../Theme/assets/image/doc2.png'),
    },
  ];
  const recentChats = [
    {
      id: '1',
      name: 'Stacy',
      status: 'now',
      lastChatted: '2 days ago',
      message: "I've been where you are, let's navigate through this together!",
      image: require('../../Theme/assets/image/doc2.png'),
    },
    {
      id: '2',
      name: 'Stacy',
      status: 'later',
      lastChatted: '2 days ago',
      message: "I've been where you are, let's navigate through this together!",
      image: require('../../Theme/assets/image/doc2.png'),
    },
  ];

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')} // Use your background image
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* Peer Cards */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.peerScrollContent}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

          <TouchableOpacity
            style={[styles.backButton, { top: hp(0), left: wp(2) }]}
            onPress={handleBackPress}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8.5)}
              color="#000"
            />
          </TouchableOpacity>

          {/* Header */}
          <View style={styles.peerHeader}>
            <Text style={styles.peerTitle}>Select a Peer</Text>
            <Text style={styles.peerSubtitle}>
              Choose someone to connect with. Your conversation will be
              anonymous.
            </Text>
          </View>
          <Text style={styles.sectionTitle}>Recent Chats</Text>

          {recentChats.map(item => (
            <RecentChatCard
              key={item.id}
              name={item.name}
              status={item.status}
              lastChatted={item.lastChatted}
              message={item.message}
              image={item.image}
              onPress={() => navigation.navigate('ChatConfirmationScreen')}
            />
          ))}

          {/* Filter Buttons */}
          <View style={styles.filterContainer}>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Language</Text>
              <MaterialIcons
                name="arrow-drop-down"
                size={wp(5)}
                color="#000"
                style={styles.filterArrow}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>18-25</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Anxiety</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.peerScrollView}>
            {peers.map(peer => (
              <View key={peer.id} style={styles.peerCard}>
                <View style={styles.peerCardContent}>
                  <Image source={peer.image} style={styles.peerImage} />
                  <View style={styles.peerInfo}>
                    <Text style={styles.peerName}>{peer.name}</Text>
                    <Text style={styles.peerDescription}>
                      {peer.age} - {peer.gender} - {peer.condition}{' '}
                      {peer.description}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.chatNowButton}
                  onPress={() => handleChatNow(peer.name)}
                >
                  <Text style={styles.chatNowButtonText}>Chat Now</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default PeerChatScreen;
