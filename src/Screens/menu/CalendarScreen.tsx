import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Modal,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useResponsive } from '../../Responsive/useResponsive';
import s from './calendarStyles';

type DayCell = { day: number; isCurrentMonth: boolean; date: Date };

const getDaysInMonth = (monthDate: Date): DayCell[] => {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: DayCell[] = [];
  // Leading days from prev month
  for (let i = startWeekday - 1; i >= 0; i -= 1) {
    const day = daysInPrevMonth - i;
    cells.push({ day, isCurrentMonth: false, date: new Date(year, month - 1, day) });
  }
  // Current month days
  for (let d = 1; d <= daysInMonth; d += 1) {
    cells.push({ day: d, isCurrentMonth: true, date: new Date(year, month, d) });
  }
  // Trailing days to complete weeks (up to 6 rows)
  while (cells.length % 7 !== 0) {
    const d = cells.length - (startWeekday + daysInMonth) + 1;
    cells.push({ day: d, isCurrentMonth: false, date: new Date(year, month + 1, d) });
  }
  return cells;
};

const filterOptions = ['Free', 'Premium', 'This Week', 'Wellness', 'Career & Growth'];

const CalendarScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { wp, hp } = useResponsive();
  const styles = s(wp, hp);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const monthCells = useMemo(() => getDaysInMonth(currentMonth), [currentMonth]);

  const changeMonth = (dir: 'prev' | 'next') => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + (dir === 'next' ? 1 : -1), 1));
  };

  const handleDayPress = (date: Date, isCurrent: boolean) => {
    if (!isCurrent) return;
    setSelectedDate(date);
  };

  return (
    <ImageBackground source={require('../../Theme/assets/image/background.png')} style={styles.bgimg} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={wp(8)} color="#000" />
          </TouchableOpacity>
          <View style={styles.filtertext}>
          <Text style={styles.header}>Calendar</Text>
          <TouchableOpacity onPress={() => setShowFilter(true)}>
            <MaterialIcons name="tune" size={wp(6)} color="#000" />
          </TouchableOpacity>
          </View>
        </View>

        {/* Calendar Card */}
        <View style={styles.card}>
          <View style={styles.customCalendarHeader}>
            <Text style={styles.calendarHeaderYear}>{selectedDate.getFullYear()}</Text>
            <Text style={styles.calendarHeaderDate}>
              {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })}
            </Text>
          </View>

          <View style={styles.calendarNav}>
            <TouchableOpacity onPress={() => changeMonth('prev')}>
              <MaterialIcons name="chevron-left" size={wp(6)} color="#264734" />
            </TouchableOpacity>
            <Text style={styles.monthTitle}>
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </Text>
            <TouchableOpacity onPress={() => changeMonth('next')}>
              <MaterialIcons name="chevron-right" size={wp(6)} color="#264734" />
            </TouchableOpacity>
          </View>

          <View style={styles.calendarGrid}>
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
              <View key={d} style={[styles.calendarDay, { backgroundColor: 'transparent' }]}>
                <Text style={[styles.calendarDayText, styles.calendarDow]}>{d}</Text>
              </View>
            ))}

            {monthCells.map((cell, idx) => {
              const isSelected = selectedDate.toDateString() === cell.date.toDateString();
              const isToday = new Date().toDateString() === cell.date.toDateString();
              return (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.calendarDay,
                    isSelected && styles.calendarDaySelected,
                    isToday && !isSelected && styles.calendarToday,
                  ]}
                  onPress={() => handleDayPress(cell.date, cell.isCurrentMonth)}
                >
                  <Text
                    style={[
                      styles.calendarDayText,
                      !cell.isCurrentMonth && styles.outsideMonth,
                      isSelected && styles.calendarDayTextSelected,
                      isToday && !isSelected && styles.calendarTodayText,
                    ]}
                  >
                    {cell.day}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Appointments Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Appointments</Text>
          <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('SessionDetailScreen')}>
            <MaterialIcons name="event" size={wp(4.5)} color="#264734" />
            <Text style={styles.itemText}> 2:00 PM Therapy Session</Text>
          </TouchableOpacity>
          <View style={styles.itemRow}><MaterialIcons name="event" size={wp(4.5)} color="#264734" /><Text style={styles.itemText}> 2:00 PM Meditation Reminder</Text></View>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          <View style={styles.itemRow}><MaterialIcons name="event" size={wp(4.5)} color="#264734" /><Text style={styles.itemText}> April 25, 2025 Coaching Session</Text></View>
          <View style={styles.itemRow}><MaterialIcons name="event" size={wp(4.5)} color="#264734" /><Text style={styles.itemText}> April 26, 2025 Peer Group Call</Text></View>
        </View>

        {/* Filter Dropdown */}
        <Modal visible={showFilter} transparent animationType="fade" onRequestClose={() => setShowFilter(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.filterCard}>
              {filterOptions.map(opt => (
                <TouchableOpacity
                  key={opt}
                  style={[styles.filterItem, activeFilter === opt && styles.activeFilter]}
                  onPress={() => {
                    setActiveFilter(opt === activeFilter ? null : opt);
                    setShowFilter(false);
                  }}
                >
                  <Text style={styles.filterText}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

export default CalendarScreen;


