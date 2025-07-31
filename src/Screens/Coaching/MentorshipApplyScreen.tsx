/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from '../../style/mentorshipApplyStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../Navigation/Mystack';

const industries = ['Technology', 'Finance', 'Healthcare', 'Education', 'Other'];

const MentorshipApplyScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [industryOpen, setIndustryOpen] = useState(false);
  const [industry, setIndustry] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={s.container}>
          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginBottom: hp(1) }}>
            <Pressable onPress={() => navigation.goBack()} style={{ marginRight: wp(2), marginTop: hp(0.8) }}>
              <MaterialIcons name="keyboard-arrow-left" size={34} color="black" />
            </Pressable>
          </View>
          <Image source={require('../../../assets/image/logo.png')} style={s.logo} />
          <Text style={s.header}>Apply For Mentorship</Text>
          <Text style={s.subheader}>Please fill out the form to help your potential mentor learn about you.</Text>

          <Text style={s.label}>Full Name</Text>
          <View style={s.inputContainer}>
            <TextInput style={s.input} placeholder="Enter name" placeholderTextColor="#A0A3BD" />
          </View>

          <Text style={s.label}>Age</Text>
          <View style={s.inputContainer}>
            <TextInput style={s.input} placeholder="Enter age" placeholderTextColor="#A0A3BD" keyboardType="numeric" />
          </View>

          <Text style={s.label}>Industry</Text>
          <TouchableOpacity style={s.select} onPress={() => setIndustryOpen(!industryOpen)}>
            <Text style={{ color: industry ? '#222' : '#A0A3BD', fontFamily: 'Montserrat-Regular', fontSize: wp(4) }}>{industry || 'Select'}</Text>
            <MaterialIcons name={industryOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={28} color="#A0A3BD" style={s.selectIcon} />
          </TouchableOpacity>
          {industryOpen && (
            <View style={{ width: '100%', backgroundColor: '#fff', borderRadius: wp(3), marginTop: hp(0.5), borderWidth: 1, borderColor: '#E0E0E0' }}>
              {industries.map((item, idx) => (
                <Pressable key={idx} onPress={() => { setIndustry(item); setIndustryOpen(false); }} style={{ padding: wp(4), borderBottomWidth: idx !== industries.length - 1 ? 1 : 0, borderBottomColor: '#E0E0E0' }}>
                  <Text style={{ color: '#222', fontFamily: 'Montserrat-Regular', fontSize: wp(4) }}>{item}</Text>
                </Pressable>
              ))}
            </View>
          )}

          <Text style={s.label}>Why do you Want mentorship?</Text>
          <TextInput style={[s.textarea,{paddingTop: hp(1.6)}]} placeholder="Enter" placeholderTextColor="#A0A3BD" multiline numberOfLines={3} />

          <Text style={s.label}>What are your goals for mentorship?</Text>
          <TextInput style={[s.textarea,{paddingTop: hp(1.6)}]} placeholder="Enter " placeholderTextColor="#A0A3BD" multiline numberOfLines={3} />

          <View style={s.checkboxRow}>
            <Pressable style={[s.checkbox, checked && s.checkboxChecked]} onPress={() => setChecked(!checked)}>
              {checked && <MaterialIcons name="check" size={22} color="#fff" />}
            </Pressable>
            <Text style={s.checkboxLabel}>I understand the commitment required for mentoship</Text>
          </View>

          <Pressable style={s.submitButton} onPress={() => navigation.navigate({ name: 'MentorshipConnecting', params: undefined })}>
            <Text style={s.submitButtonText}>Submit</Text>
          </Pressable>

          <View style={s.loginRow}>
            <Text style={s.loginText}>Already have a accoun? </Text>
            <Text style={s.loginLink}onPress={() => navigation.navigate('LoginScreen')}>Log In</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default MentorshipApplyScreen; 