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
} from 'react-native';
import { useResponsive } from '../../Responsive/useResponsive';

import { Calendar } from 'react-native-calendars';
import styles from '../../style/BookAppointment';

const services = [
  {
    label: 'Video Call',
    icon: require('../../../assets/image/greenvideo.png'),
  },
  { label: 'Online Chat', icon: require('../../../assets/image/message.png') },
  { label: 'Audio call', icon: require('../../../assets/image/phone.png') },
];

const timeSlots = [
  '09:00 AM - 09:30 AM',
  '10:00 AM - 10:30 AM',
  '11:00 AM - 11:30 AM',
  '12:00 PM - 12:30 PM',
  '02:00 PM - 02:30 PM',
  '03:00 PM - 03:30 PM',
];

const ScheduleAppointmentScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const [selectedService, setSelectedService] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={s.container}>
          <Image
            source={require('../../../assets/image/logo.png')}
            style={s.logo}
          />
          <Text style={s.header}>Schedule Appointment</Text>
          <Image
            source={require('../../../assets/image/maskuser.png')}
            style={s.avatar}
          />
          <Text style={s.name}>Dr. Laurn Miller</Text>
          <Text style={s.role}>Mentor</Text>

          <View style={{ width: '100%' }}>
          <Text style={s.sectionTitle}>Select your Service</Text>
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
            <Calendar
              onDayPress={day => setSelectedDate(new Date(day.dateString))}
              markedDates={{
                [selectedDate.toISOString().split('T')[0]]: {
                  selected: true,
                  selectedColor: '#264734',
                },
              }}
              theme={{
                backgroundColor: '#264734',
                calendarBackground: '#fff',
                textSectionTitleColor: '#264734',
                selectedDayBackgroundColor: '#264734',
                selectedDayTextColor: '#fff',
                todayTextColor: '#264734',
                dayTextColor: '#222',
                textDisabledColor: '#d9d9d9',
                todayBackgroundColor: '#264734',
                arrowColor: '#264734',
                monthTextColor: '#264734',
                textDayFontFamily: 'Montserrat-Medium',
                textMonthFontFamily: 'Poppins-Bold',
                textDayHeaderFontFamily: 'Poppins-Bold',
                textDayFontSize: wp(3.7),
                textMonthFontSize: wp(4),
                textDayHeaderFontSize: wp(3.5),
              }}
              style={{ borderRadius: wp(4) }}
            />
          </View>

          <View style={{ width: '100%' }}>
            <Text style={s.sectionTitle}>Select your time slot</Text>
          </View>
          <View style={s.dropdown}>
            <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
              <Text style={s.dropdownText}>
                {selectedSlot || 'Select Time Slot'}
              </Text>
            </TouchableOpacity>
            {dropdownOpen && (
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: wp(2),
                  marginTop: hp(1),
                  elevation: 2,
                  position: 'absolute',
                  top: hp(3),
                  left: 0,
                  right: 0,
                  zIndex: 1000,
                }}
              >
                {timeSlots.map((slot, idx) => (
                  <TouchableOpacity
                    key={slot}
                    onPress={() => {
                      setSelectedSlot(slot);
                      setDropdownOpen(false);
                    }}
                    style={{
                      padding: wp(3),
                      borderBottomWidth: idx !== timeSlots.length - 1 ? 1 : 0,
                      borderBottomColor: '#eee',
                    }}
                  >
                    <Text style={{ color: '#222', fontSize: wp(4) }}>
                      {slot}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          <Pressable style={s.payButton} onPress={() => {}}>
            <Text style={s.payButtonText}>Pay Now</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ScheduleAppointmentScreen;
