import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from './groupSessionsStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const featuredSession = {
  title: 'Therapeutic support & Peer Mentorship',
  date: 'Apr 26, 6:00 PM',
  leader: {
    name: 'Alex M.',
    image: require('../../Theme/assets/icon/groupdoc.png'),
    participants: '15 people registered',
  },
};

const sessions = [
  {
    id: '1',
    title: 'Stress Management',
    date: 'Apr 26, 6:00 PM',
    leader: {
      name: 'John K.',
      image: require('../../Theme/assets/image/doc2.png'),
    },
    isFree: true,
  },
  {
    id: '2',
    title: 'Stress Management',
    date: 'Apr 26, 6:00 PM',
    leader: {
      name: 'John K.',
      image: require('../../Theme/assets/image/doc2.png'),
    },
    isFree: true,
  },
  {
    id: '3',
    title: 'Stress Management',
    date: 'Apr 26, 6:00 PM',
    leader: {
      name: 'John K.',
      image: require('../../Theme/assets/image/doc2.png'),
    },
    isFree: true,
  },
];

const GroupSessionsScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleChatNow = () => {
    console.log('Chat Now pressed');
  };

  const handleWatchAd = () => {
    navigation.navigate('EarnPointsScreen');
  };

  const handlePayToJoin = () => {
    navigation.navigate('ReviewPaymentScreen');
  };

  const handleReserveSpot = (sessionId: string) => {
    console.log('Reserve Spot pressed for session:', sessionId);
    navigation.navigate('SessionPaymentScreen');
  };

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles(wp, hp).bgimg}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={styles(wp, hp).mainContainer}>
        {/* Header */}
        <ScrollView
          style={styles(wp, hp).container}
          contentContainerStyle={styles(wp, hp).scrollContent}
          showsVerticalScrollIndicator={false}
        >
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

          <TouchableOpacity style={styles(wp, hp).profileButton}>
            <Image
              source={require('../../Theme/assets/image/doc2.png')}
              style={styles(wp, hp).profileImage}
            />
          </TouchableOpacity>
        </View>

       
          {/* Featured Session */}
          <View style={styles(wp, hp).featuredSection}>
            <Text style={styles(wp, hp).sectionTitle}>Featured Session</Text>
            <View style={styles(wp, hp).featuredCard}>
              <View style={styles(wp, hp).featuredContent}>
                <View style={styles(wp, hp).featuredLeft}>
                  <Text style={styles(wp, hp).featuredTitle}>
                    {featuredSession.title}
                  </Text>
                  <Text style={styles(wp, hp).featuredDate}>
                    {featuredSession.date}
                  </Text>
                  <View style={styles(wp, hp).featuredButtons}>
                    <TouchableOpacity
                      style={styles(wp, hp).chatButton}
                      onPress={handleChatNow}
                    >
                      <Text style={styles(wp, hp).buttonText}>Chat Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles(wp, hp).watchAdButton}
                      onPress={handleWatchAd}
                    >
                      <Text style={styles(wp, hp).buttonText}>
                        Watch Ad to Join
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles(wp, hp).featuredRight}>
                  <Image
                    source={featuredSession.leader.image}
                    style={styles(wp, hp).featuredLeaderImage}
                  />
                  <View style={styles(wp, hp).leaderInfo}>
                    <Text style={styles(wp, hp).leaderName}>
                      {featuredSession.leader.name}
                    </Text>
                    <Text style={styles(wp, hp).participants}>
                      {featuredSession.leader.participants}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles(wp, hp).payButton}
              onPress={handlePayToJoin}
            >
              <Text style={styles(wp, hp).payText}>Pay to Join</Text>
            </TouchableOpacity>
          </View>

          {/* Other Sessions */}
          <View style={styles(wp, hp).sessionsSection}>
            <Text style={styles(wp, hp).sectionTitle}>Other Sessions</Text>
            {sessions.map(session => (
              <View key={session.id} style={styles(wp, hp).sessionCard}>
                <View style={styles(wp, hp).sessionContent}>
                  <Image
                    source={session.leader.image}
                    style={styles(wp, hp).sessionLeaderImage}
                  />
                  <View style={styles(wp, hp).sessionInfo}>
                    <View style={styles(wp, hp).sessionTitleRow}>
                      <Text style={styles(wp, hp).sessionTitle}>
                        {session.title}
                      </Text>
                      {session.isFree && (
                        <View style={styles(wp, hp).freeBadge}>
                         <Image source={require('../../Theme/assets/icon/free.png')} style={styles(wp, hp).freeIcon}/>
                        </View>
                      )}
                    </View>
                    <Text style={styles(wp, hp).sessionDate}>
                      {session.date}
                    </Text>
                    <View style={styles(wp, hp).sessionLeader}>
                      <View style={styles(wp, hp).sessionLeaderInfo}>
                     
                    
                      </View>
                      <TouchableOpacity
                        style={styles(wp, hp).reserveButton}
                        onPress={() => handleReserveSpot(session.id)}
                      >
                        <Text style={styles(wp, hp).buttonText}>
                          Reserve Spot
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default GroupSessionsScreen;
