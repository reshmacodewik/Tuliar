import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from '../../style/weeklyReportStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const WeeklyReportScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();

  // Dummy data
  const stats = [
    {
      title: 'Therapy Sessions Attended',
      value: 5,
      image: require('../../Theme/assets/image/feather.png'),
    },
    {
      title: 'Group Sessions Joined',
      value: 5,
      image: require('../../Theme/assets/image/video.png'),
    },
    {
      title: 'Mood Entries Logged',
      value: 5,
      image: require('../../Theme/assets/image/download.png'),
    },
    {
      title: 'Goals Completed',
      value: 5,
      image: require('../../Theme/assets/image/check-circle.png'),
    },
  ];

  const goals = [
    { title: 'Goal 1', status: 'Complete' },
    { title: 'Goal 2', status: 'In Process' },
    { title: 'Goal 3', status: 'Not Started' },
  ];

  const moods = [
    { emoji: '😀', label: 'Happy', days: 4 },
    { emoji: '😐', label: 'Neutral', days: 2 },
    { emoji: '😭', label: 'Sad', days: 1 },
  ];

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles(wp, hp).bgImg}
    >
      <ScrollView
        contentContainerStyle={{ padding: wp(5) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles(wp, hp).header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles(wp, hp).backButton}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8.5)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles(wp, hp).headertxt}>Weekly Report</Text>
        </View>
        <Text style={styles(wp, hp).subHeader}>
          Hi John, here how you did this week
        </Text>

        {/* Stats Grid */}
        <View style={styles(wp, hp).statsContainer}>
          {stats.map((item, index) => (
            <View key={index} style={styles(wp, hp).statBox}>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: hp(0),
                }}
              >
                <Image source={item.image} style={styles(wp, hp).statIcon} />
                <Text style={styles(wp, hp).statTitle}>{item.title}</Text>
              </View>
              <Text style={styles(wp, hp).statValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Goal & Streak */}
        <View style={styles(wp, hp).goalStreakContainer}>
          <View style={styles(wp, hp).goalContainer}>
            <Text style={styles(wp, hp).goalHeader}>Goal Process</Text>
            {goals.map((goal, i) => (
              <View key={i} style={styles(wp, hp).goalRow}>
                <MaterialCommunityIcons
                  name={
                    goal.status === 'Complete'
                      ? 'check'
                      : goal.status === 'In Process'
                      ? 'clock-outline'
                      : 'close-circle-outline'
                  }
                  size={wp(5)}
                  color={
                    goal.status === 'Complete'
                      ? '#fff'
                      : goal.status === 'In Process'
                      ? '#fff'
                      : '#fff'
                  }
                  style={{ marginRight: wp(2) }}
                />
                <Text style={styles(wp, hp).goalText}>
                  {goal.title} {goal.status}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles(wp, hp).streakContainer}>
            <Text style={styles(wp, hp).streakHeader}>Streak Highlight</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: hp(1),
                gap: 25,
              }}
            >
              <Image
                source={require('../../Theme/assets/image/Layer_3.png')}
                style={styles(wp, hp).streakImage}
              />
              <Text style={styles(wp, hp).streakValue}>
                5 Days {'\n'}Streak
              </Text>
            </View>
            <Text style={styles(wp, hp).streakText}>
              You are doing amazing !!!
            </Text>
          </View>
        </View>

        {/* Mood Overview */}
        <Text style={styles(wp, hp).moodHeader}>Mood Overview</Text>
        <View style={styles(wp, hp).moodContainer}>
          {moods.map((mood, index) => (
            <View key={index} style={styles(wp, hp).moodRow}>
              <Text style={styles(wp, hp).moodEmoji}>{mood.emoji}</Text>
              <Text style={styles(wp, hp).moodLabel}>{mood.label}</Text>
              <Text style={styles(wp, hp).moodDays}>{mood.days} days</Text>
            </View>
          ))}
        </View>

        {/* Share Button */}
        <TouchableOpacity style={styles(wp, hp).shareButton}>
          <Text style={styles(wp, hp).shareButtonText}>Share Report</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default WeeklyReportScreen;
