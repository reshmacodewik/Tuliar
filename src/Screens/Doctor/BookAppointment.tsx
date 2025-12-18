/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useResponsive } from '../../Responsive/useResponsive';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import styles from '../../style/BookAppointment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const services = [
  {
    label: 'Video Call',
    icon: require('../../Theme/assets/image/greenvideo.png'),
  },
  {
    label: 'Online Chat',
    icon: require('../../Theme/assets/image/message.png'),
  },
  { label: 'Audio call', icon: require('../../Theme/assets/image/phone.png') },
];

const timeRanges = [
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 1:00',
  '2:00 - 3:00',
  '3:00 - 4:00',
  '4:00 - 5:00',
];

const ScheduleAppointmentScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedService, setSelectedService] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Custom calendar functions
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

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={s.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={wp(8.5)}
            color="#000"
          />
        </TouchableOpacity>

        <View style={s.container}>
          <Image
            source={require('../../Theme/assets/image/logo.png')}
            style={s.logo}
          />
          <Text style={s.header}>Schedule Appointment</Text>
          <Image
            source={require('../../Theme/assets/image/maskuser.png')}
            style={s.avatar}
          />
          <Text style={s.name}>Dr. Laurn Miller</Text>
          <Text style={s.role}>Mentor</Text>

          <View style={{ width: '100%' }}>
            <Text style={s.sectionTitleservice}>Select your Service</Text>
          </View>
          <View style={s.serviceRow}>
            {services.map((service, idx) => (
              <View key={service.label}>
                <TouchableOpacity
                  style={[
                    s.serviceButton,
                    selectedService === idx && s.serviceButtonActive,
                  ]}
                  onPress={() => setSelectedService(idx)}
                >
                  <Image
                    source={service.icon}
                    style={s.serviceIcon}
                    tintColor={selectedService === idx ? '#fff' : '#264734'}
                  />
                </TouchableOpacity>
                <View>
                  <Text
                    style={[
                      s.serviceLabel,
                      { color: '#000', textAlign: 'center', marginTop: 6 },
                    ]}
                  >
                    {service.label}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View style={{ width: '100%' }}>
            <Text style={s.sectionTitle}>Pick you preferred Day</Text>
          </View>
          <View style={s.calendarContainer}>
            <View style={s.customCalendarHeader}>
              <Text style={s.calendarHeaderYear}>
                {selectedDate.getFullYear()}
              </Text>
              <Text style={s.calendarHeaderDate}>
                {selectedDate.toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'long',
                  day: 'numeric',
                })}
              </Text>
            </View>
            <View style={s.calendarNav}>
              <TouchableOpacity onPress={() => changeMonth('prev')}>
                <MaterialIcons
                  name="chevron-left"
                  size={wp(6)}
                  color="#264734"
                />
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
                <MaterialIcons
                  name="chevron-right"
                  size={wp(6)}
                  color="#264734"
                />
              </TouchableOpacity>
            </View>
            <View style={s.calendarGrid}>
              {/* Days of week header */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                (day, _index) => (
                  <View
                    key={day}
                    style={[s.calendarDay, { backgroundColor: 'transparent' }]}
                  >
                    <Text
                      style={[
                        s.calendarDayText,
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
                      s.calendarDay,
                      isSelected && s.calendarDaySelected,
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
                        s.calendarDayText,
                        !dayData.isCurrentMonth && { color: '#d9d9d9' },
                        isSelected && s.calendarDayTextSelected,
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

          <View style={{ width: '100%' }}>
            <Text style={s.sectionTitle}>Select your time slot</Text>
          </View>
          <View style={s.dropdown}>
            <View style={s.timeSlotGrid}>
              {[
                '10:00 - 11:00',
                '11:00 - 12:00',
                '12:00 - 1:00',
                '2:00 - 3:00',
                '3:00 - 4:00',
                '4:00 - 5:00',
              ].map(slot => {
                const active = selectedSlot === slot;

                return (
                  <TouchableOpacity
                    key={slot}
                    style={[s.timePill, active && s.timePillActive]}
                    onPress={() => {
                      setSelectedSlot(slot);
                      setTimeModalVisible(true); // 👈 popup opens here
                    }}
                  >
                    <Text
                      style={[s.timePillText, active && s.timePillTextActive]}
                    >
                      {slot}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Modal visible={timeModalVisible} transparent animationType="slide">
              <View style={s.modalOverlay}>
                <View style={s.modalContainer}>
                  {/* Header */}
                  <Text style={s.modalTitle}>Select your time slot</Text>

                  {/* Slots */}
                  {[
                    '10:00 - 10:15',
                    '10:15 - 10:30',
                    '10:30 - 10:45',
                    '10:45 - 11:00',
                  ].map(slot => (
                    <TouchableOpacity
                      key={slot}
                      style={[
                        s.slotButton,
                        selectedSlot === slot && s.slotButtonActive,
                      ]}
                      onPress={() => setSelectedSlot(slot)}
                    >
                      <Text
                        style={[
                          s.slotText,
                          selectedSlot === slot && s.slotTextActive,
                        ]}
                      >
                        {slot}
                      </Text>
                    </TouchableOpacity>
                  ))}

                  {/* Book Now */}
                  <TouchableOpacity
                    style={s.bookNowButton}
                    onPress={() => setTimeModalVisible(false)}
                  >
                    <Text style={s.bookNowText}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          {/* <Pressable
            style={s.payButton}
            onPress={() => navigation.navigate('ReviewPaymentScreen')}
          >
            <Text style={s.payButtonText}>Pay Now</Text>
          </Pressable> */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ScheduleAppointmentScreen;
