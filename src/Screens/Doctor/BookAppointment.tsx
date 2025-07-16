import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  ImageBackground,
  Image,
} from 'react-native';
import styles from '../../style/BookAppointment';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Calendar } from 'react-native-calendars';

const SESSION_DURATIONS = [60, 75, 90];

const BookAppointment = () => {
  const [commStyle, setCommStyle] = useState<'video' | 'chat'>('video');
  const [duration, setDuration] = useState<number>(60);
  const [selectedDate, setSelectedDate] = useState('2024-07-15');
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Book Appointment</Text>

        <View style={styles.successBanner}>
          <Text style={styles.successText}>
            <Text style={styles.bold}>Congratulations!</Text> First session is
            free for new!
          </Text>
        </View>

        <Text style={styles.sectionLabel}>Communication Style</Text>
        <View style={styles.commRow}>
          {[
            {
              type: 'video',
              label: 'Video Call',
              icon: require('../../../assets/image/video.png'),
            },
            {
              type: 'chat',
              label: 'Online Chat',
              icon: require('../../../assets/image/message.png'),
            },
          ].map(item => {
            const isActive = commStyle === item.type;
            return (
              <View key={item.type} style={styles.commColumn}>
                <TouchableOpacity
                  style={[
                    styles.commButtonSquare,
                    isActive
                      ? styles.commButtonActive
                      : styles.commButtonInactive,
                  ]}
                  onPress={() => setCommStyle(item.type as 'video' | 'chat')}
                >
                  <Image
                    source={item.icon}
                    style={[
                      styles.commIconSquare,
                      { tintColor: isActive ? '#fff' : '#1c4431' },
                    ]}
                  />
                </TouchableOpacity>
                <Text style={styles.commLabelSquare}>{item.label}</Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.sectionLabel}>Select Duration of the Session</Text>
        <View style={styles.durationBox}>
          <Text style={styles.durationNote}>
            Can be extend by 15 minutes for an extra fee.
          </Text>
          <View style={styles.durationRow}>
            {SESSION_DURATIONS.map(min => (
              <TouchableOpacity
                key={min}
                style={[
                  styles.durationButtonNew,
                  duration === min && styles.durationButtonActiveNew,
                ]}
                onPress={() => setDuration(min)}
              >
                <Text
                  style={[
                    styles.durationButtonTextNew,
                    duration === min && styles.durationButtonTextActiveNew,
                  ]}
                >
                  {min} min
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Text style={styles.sectionLabel}>Pick your preferred Day</Text>
        <View style={styles.calendarBox}>
          <Calendar
            current={selectedDate}
            onDayPress={day => {
              setSelectedDate(day.dateString);
            }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: '#256029',
                selectedTextColor: '#fff',
              },
            }}
            theme={{
              backgroundColor: '#fff',
              calendarBackground: '#fff',
              textSectionTitleColor: '#888',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#256029',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#256029',
              dayTextColor: '#222',
              textDisabledColor: '#d9e1e8',
              dotColor: '#256029',
              selectedDotColor: '#ffffff',
              arrowColor: '#256029',
              monthTextColor: '#256029',
              textDayFontWeight: 'normal',
              textMonthFontWeight: 'bold',
              textDayFontSize: width < 400 ? 12 : 14,
              textMonthFontSize: width < 400 ? 14 : 16,
              textDayHeaderFontSize: width < 400 ? 11 : 13,
            }}
            style={{
              borderRadius: 12,
              padding: 8,
            }}
          />
        </View>

        {/* Optional: You can add session timing or continue button below here */}
      </ScrollView>
    </ImageBackground>
  );
};

export default BookAppointment;
