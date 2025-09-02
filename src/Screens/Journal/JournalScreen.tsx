import React, { useState } from 'react';
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

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './journalStyles';

const journeyCards = [
  {
    id: '1',
    type: 'therapy',
    title: 'Therapy',
    subtitle: 'Next session April 25 at 10:00 am',
    buttonText: 'Continue',
    icon: require('../../Theme/assets/icon/journeylogo.png'),
  },
  {
    id: '2',
    type: 'goals',
    title: 'Goals',
    subtitle: "You're on Goal 2 of 4",
    buttonText: 'Add New Entry',
    icon: require('../../Theme/assets/icon/journeylogo.png'),
  },
];

const JournalScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCardPress = (cardId: string) => {
    console.log('Card pressed:', cardId);
  };

  const handleCheckCalendar = () => {
    console.log('Check Calendar pressed');
  };

  const handleSetNewGoal = () => {
    navigation.navigate('GoalsScreen');
  };
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add previous month's days
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthDays - i),
      });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Add next month's days to fill the grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
      });
    }

    return days;
  };

  const handleDayPress = (day: number, isCurrentMonth: boolean, date: Date) => {
    if (isCurrentMonth) {
      setSelectedDate(date);
    }
  };

  const changeMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };
  const renderCalendar = () => (
    <View style={styles(wp, hp).calendarContainer}>
      <View style={styles(wp, hp).customCalendarHeader}>
        <Text style={styles(wp, hp).calendarHeaderYear}>
          {selectedDate.getFullYear()}
        </Text>
        <Text style={styles(wp, hp).calendarHeaderDate}>
          {selectedDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>
      <View style={styles(wp, hp).calendarNav}>
        <TouchableOpacity onPress={() => changeMonth('prev')}>
          <MaterialIcons name="chevron-left" size={wp(6)} color="#264734" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: wp(4),
            color: '#264734',
            fontFamily: 'Poppins-Bold',
          }}
        >
          {currentMonth.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </Text>
        <TouchableOpacity onPress={() => changeMonth('next')}>
          <MaterialIcons name="chevron-right" size={wp(6)} color="#264734" />
        </TouchableOpacity>
      </View>
      <View style={styles(wp, hp).calendarGrid}>
        {/* Days of week header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
          (day, _index) => (
            <View
              key={day}
              style={[
                styles(wp, hp).calendarDay,
                { backgroundColor: 'transparent' },
              ]}
            >
              <Text
                style={[
                  styles(wp, hp).calendarDayText,
                  { color: '#264734', fontFamily: 'Poppins-Bold' },
                ]}
              >
                {day}
              </Text>
            </View>
          ),
        )}

        {/* Calendar days */}
        {getDaysInMonth(currentMonth).map((dayData, index) => {
          const isSelected =
            selectedDate.toDateString() === dayData.date.toDateString();
          const isToday =
            new Date().toDateString() === dayData.date.toDateString();

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles(wp, hp).calendarDay,
                isSelected && styles(wp, hp).calendarDaySelected,
                isToday && !isSelected && { backgroundColor: '#fff' },
              ]}
              onPress={() =>
                handleDayPress(
                  dayData.day,
                  dayData.isCurrentMonth,
                  dayData.date,
                )
              }
            >
              <Text
                style={[
                  styles(wp, hp).calendarDayText,
                  !dayData.isCurrentMonth && { color: '#d9d9d9' },
                  isSelected && styles(wp, hp).calendarDayTextSelected,
                  isToday &&
                    !isSelected && {
                      color: '#264734',
                      fontFamily: 'Montserrat-Bold',
                      textDecorationLine: 'underline',
                    },
                ]}
              >
                {dayData.day}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles(wp, hp).bgimg}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={styles(wp, hp).mainContainer}>
        {/* Header */}
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
          <Text style={styles(wp, hp).headerTitle}>My Journey</Text>
          <View style={styles(wp, hp).headerSpacer} />
        </View>

        <ScrollView
          style={styles(wp, hp).container}
          contentContainerStyle={styles(wp, hp).scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Greeting Section */}
          <View style={styles(wp, hp).greetingSection}>
            <Text style={styles(wp, hp).greetingTitle}>
              Hi John, here's {'\n'} your progress this week
            </Text>
            <Text style={styles(wp, hp).greetingSubtitle}>
              Keep building the life you want, one small step at a time.
            </Text>
          </View>

                    {/* Journey Cards */}
          <View style={styles(wp, hp).cardsSection}>
            {journeyCards.map((card, index) => (
              <TouchableOpacity
                key={card.id}
                style={styles(wp, hp).journeyCard}
                onPress={() => handleCardPress(card.id)}
              >
                <View style={styles(wp, hp).cardContent}>
                  <View style={styles(wp, hp).cardHeader}>
                    <View style={styles(wp, hp).cardIcon}>
                      <Image
                        source={card.icon}
                        style={styles(wp, hp).iconImage}
                      />
                    </View>
                    <View style={styles(wp, hp).cardText}>
                        <View style={styles(wp, hp).cardTitleContainer}>
                      <Text style={styles(wp, hp).cardTitle}>
                        {card.title}
                      </Text>
                      <TouchableOpacity style={styles(wp, hp).cardButton}>
                    <Text style={styles(wp, hp).buttonText}>
                      {card.buttonText}
                    </Text>
                  </TouchableOpacity>
                  </View>
                      <Text style={styles(wp, hp).cardSubtitle}>
                        {card.subtitle}
                      </Text>
                    </View>
                  </View>
                 
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Goals and Calendar Cards */}
          <View style={styles(wp, hp).goalsCalendarSection}>
            {/* Goals Card */}
            <View style={styles(wp, hp).goalsCard}>
              <View style={styles(wp, hp).goalsCardHeader}>
                <View style={styles(wp, hp).cardIcon}>
                  <Image
                    source={require('../../Theme/assets/icon/journeylogo.png')}
                    style={styles(wp, hp).iconImage}
                  />
                </View>
                <View style={styles(wp, hp).goalsCardContent}>
                  <Text style={styles(wp, hp).cardTitle}>Goals</Text>
                  <Text style={styles(wp, hp).cardSubtitle}>
                    You're on Goal 2 of 4
                  </Text>
                </View>
              </View>
              <TouchableOpacity 
                style={styles(wp, hp).cardButtonGoal}
                onPress={() => navigation.navigate('GoalsScreen')}
              >
                <Text style={styles(wp, hp).buttonText}>Set Goal</Text>
              </TouchableOpacity>
            </View>

            {/* Calendar Card */}
            <View style={styles(wp, hp).calendarCard}>
              <Text style={styles(wp, hp).calendarTitle}>Calendar</Text>
              {renderCalendar()}
            </View>
          </View>

          {/* Weekly Progress Card */}
          <View style={styles(wp, hp).journeyCard}>
            <View style={styles(wp, hp).progressCardContent}>
              <View style={styles(wp, hp).cardHeader}>
                <View style={styles(wp, hp).cardIcon}>
                  <Image
                    source={require('../../Theme/assets/icon/journeylogo.png')}
                    style={styles(wp, hp).iconImage}
                  />
                </View>
                <View style={styles(wp, hp).cardText}>
                  <Text style={styles(wp, hp).cardTitle}>Weekly Progress</Text>
                  <Text style={styles(wp, hp).cardSubtitle}>
                    5 days streak - keep it going!
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles(wp, hp).trackButton}>
                <Text style={styles(wp, hp).buttonText}>Track</Text>
              </TouchableOpacity>

              <View style={styles(wp, hp).cardActionBar}>
                <Text style={styles(wp, hp).actionTitle}>
                  What would you like to focus on today?
                </Text>
                <View style={styles(wp, hp).actionButtons}>
                  <TouchableOpacity
                    style={styles(wp, hp).actionButton}
                    onPress={handleCheckCalendar}
                  >
                    <Text style={styles(wp, hp).actionButtonText}>
                      Check Calendar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles(wp, hp).actionButton}
                    onPress={handleSetNewGoal}
                  >
                    <Text style={styles(wp, hp).actionButtonText}>
                      Set a New Goal
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Action Bar */}
      </View>
    </ImageBackground>
  );
};

export default JournalScreen;
