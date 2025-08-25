import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useResponsive } from '../../Responsive/useResponsive';
import s from './sessionDetailStyles';

const SessionDetailScreen = () => {
  const { wp, hp } = useResponsive();
  const styles = s(wp, hp);
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <ImageBackground  style={styles.bgimg} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={wp(8)} color="#000" />
          </TouchableOpacity>
          <Text style={styles.header}>Detail</Text>
          <View style={{ width: wp(8) }} />
        </View>

        {/* Logo area */}
        <View style={styles.logoRow}>
        <Image  source={require('../../../assets/image/logo1.png')} resizeMode="contain" style={styles.logo}/>
        </View>

        {/* Title Block */}
        <Text style={styles.timeText}>April 25, 2025 - 2:00 PM</Text>
        <Text style={styles.titleText}>Therapy Session with Dr.Smith</Text>

        {/* Card */}
        <View style={styles.card}>
          <View style={styles.doctorRow}>
            <View style={styles.avatar}> 
              <Image  source={require('../../../assets/image/user2.png')} resizeMode="contain" style={styles.userimg}/>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.doctorName}>John Smith</Text>
              <Text style={styles.doctorRole}>Licensed Therapist</Text>
            </View>
          </View>

          <View style={{ marginTop: hp(-1.5) }}>
            <Text style={styles.subLabel}>Online</Text>
            <Text style={styles.linkText}>Link to Join</Text>
          </View>

          <View style={{ marginTop: hp(2) }}>
            <Text style={styles.subLabel}>Notes</Text>
            <View style={styles.noteBox}>
              <Text style={styles.noteText}>
                Jot down your discussion topics or questions here in preparation for the session
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Join Session</Text>
          </TouchableOpacity>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.secondaryBtn}>
              <Text style={styles.secondaryBtnText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dangerBtn}>
              <Text style={styles.dangerBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        <View style={{ marginTop: hp(1) }}>
          <Text style={styles.prepareTitle}>Prepare for the session</Text>
          <Text style={styles.prepareText}>Take a few deep breaths, have water nearby.</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SessionDetailScreen;


