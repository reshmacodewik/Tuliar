import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
  StatusBar,
  Modal,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from './editProfileStyles';
import { useMutation, useQuery } from '@tanstack/react-query';
import { API_PROFILE_LIST, API_UPDATE_PROFILE } from '../../utils/api/APIConstant';
import { apiPost, getApiWithOutQuery } from '../../utils/api/common';
import ShowToast from '../../utils/ShowToast';

const EditProfileScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);

  // State for form fields
  const [selectedProfile, setSelectedProfile] = useState(0); // 0 for photo, 1 for avatar
  const [selectedAvatar, setSelectedAvatar] = useState(1); // Track selected avatar
  const [tempSelectedAvatar, setTempSelectedAvatar] = useState(1); // Temporary selection in modal
  const [nickname, setNickname] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [month, setMonth] = useState('MM');
  const [day, setDay] = useState('DD');
  const [year, setYear] = useState('YYYY');
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('5265 3625 231');
  const [timezone, setTimezone] = useState('');

  // Modal states for dropdowns
  const [showMonthModal, setShowMonthModal] = useState(false);
  const [showDayModal, setShowDayModal] = useState(false);
  const [showYearModal, setShowYearModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['profile-info'], // pass id as dependency
    queryFn: () => getApiWithOutQuery({ url: API_PROFILE_LIST }),
  });

  // Mutation for updating profile
const { mutate: updateProfile, isPending } = useMutation({
  mutationFn: (payload: any) =>
    apiPost({ url: API_UPDATE_PROFILE, values: payload }),
  onSuccess: (res) => {
      ShowToast(res?.message, 'success');
    navigation.goBack();
  },
  onError: (err) => {
    console.error("Update failed:", err);
  },
});
const handleUpdated = () => {
  const dob = `${year}-${month}-${day}`; // build DOB string

  const payload = {
    fullName,
    email,
    profile: selectedProfile === 0 ? "photo" : "avatar", // or avatar id if backend expects
    phoneNo: phoneNumber,
    nickName: nickname,
    country: timezone, // replace with actual country if different
    countryCode,
    dob,
  };

  console.log("Sending payload:", payload);
  updateProfile(payload); // trigger API call
};

  // Open-only-one modal helpers for date and country pickers
  const openMonth = () => {
    setShowMonthModal(true);
    setShowDayModal(false);
    setShowYearModal(false);
    setShowCountryModal(false);
  };
  const openDay = () => {
    setShowMonthModal(false);
    setShowDayModal(true);
    setShowYearModal(false);
    setShowCountryModal(false);
  };
  const openYear = () => {
    setShowMonthModal(false);
    setShowDayModal(false);
    setShowYearModal(true);
    setShowCountryModal(false);
  };
  const openCountry = () => {
    setShowMonthModal(false);
    setShowDayModal(false);
    setShowYearModal(false);
    setShowCountryModal(true);
  };
  useEffect(() => {
    if (data?.data) {
      setFullName(data.data.fullName || '');
      setNickname(data.data.nickName || '');
      setEmail(data.data.email || '');
      setCountryCode(data.data.countryCode || '+91');
      setPhoneNumber(data.data.phoneNo || '');
    }
  }, [data]);
  // Generate months, days, and years for dropdowns
  const months = [
    'MM',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const days = [
    'DD',
    ...Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0')),
  ];
  const years = [
    'YYYY',
    ...Array.from({ length: 100 }, (_, i) => String(2024 - i)),
  ];
  const countries = [
    '+91',
    '+1',
    '+44',
    '+86',
    '+81',
    '+49',
    '+33',
    '+39',
    '+34',
    '+7',
  ];

  // Avatar options
  const avatarOptions = [
    {
      id: 1,
      color: '#FF4444',
      borderColor: '#2E7D32',
      gender: 'male',
      style: 'formal',
    },
    {
      id: 2,
      color: '#FFD700',
      borderColor: 'transparent',
      gender: 'male',
      style: 'casual',
    },
    {
      id: 3,
      color: '#90EE90',
      borderColor: 'transparent',
      gender: 'female',
      style: 'elegant',
    },
    {
      id: 4,
      color: '#87CEEB',
      borderColor: 'transparent',
      gender: 'female',
      style: 'professional',
    },
    {
      id: 5,
      color: '#FFA500',
      borderColor: 'transparent',
      gender: 'female',
      style: 'casual',
    },
  ];


  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={themedStyles.bgimg}
      resizeMode="cover"
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ScrollView
        contentContainerStyle={themedStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={themedStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={themedStyles.headerText}>Edit My Profile</Text>
        </View>

        {/* Profile Picture Section */}
        <View style={themedStyles.profileSection}>
          <View style={themedStyles.profileOptions}>
            <TouchableOpacity
              style={[
                themedStyles.profileOption,
                selectedProfile === 0 && themedStyles.selectedProfile,
              ]}
              onPress={() => setSelectedProfile(0)}
            >
              <Image
                source={require('../../Theme/assets/image/user2.png')}
                style={themedStyles.profileImage}
                defaultSource={require('../../Theme/assets/image/user2.png')}
              />
              <TouchableOpacity
                style={themedStyles.editIcon}
                onPress={() => setShowPhotoModal(true)}
              >
                <MaterialIcons name="edit" size={wp(3)} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                themedStyles.profileOption,
                selectedProfile === 1 && themedStyles.selectedProfile,
              ]}
              onPress={() => setSelectedProfile(1)}
            >
              <View
                style={[
                  themedStyles.avatarPlaceholder,
                  {
                    backgroundColor:
                      avatarOptions[selectedAvatar - 1]?.color || '#FF6B35',
                  },
                ]}
              >
                <MaterialIcons name="person" size={wp(12)} color="#fff" />
              </View>
              <TouchableOpacity
                style={themedStyles.editIcon}
                onPress={() => {
                  setTempSelectedAvatar(selectedAvatar);
                  setShowAvatarModal(true);
                }}
              >
                <MaterialIcons name="edit" size={wp(3)} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={themedStyles.changeProfileButton}>
            <Text style={themedStyles.changeProfileText}>
              Change profile picture
            </Text>
          </TouchableOpacity>

          <View style={themedStyles.visibilityInfo}>
            <Text style={themedStyles.visibilityText}>
              This Avatar Will be Displayed in Public
            </Text>
            <Text style={themedStyles.visibilityText}>
              Profile Picture will be visible only to Doctors
            </Text>
          </View>
        </View>

        {/* Form Fields */}
        <View style={themedStyles.formContainer}>
          {/* Nickname */}
          <View style={themedStyles.inputGroup}>
            <Text style={themedStyles.inputLabel}>Nickname</Text>
            <TextInput
              style={themedStyles.textInput}
              placeholder="Enter your nickname"
              placeholderTextColor="#999"
              value={nickname} // 👈 comes from API
              onChangeText={setNickname}
            />
            <Text style={themedStyles.helperText}>
              This Name Will be Displayed in Public
            </Text>
          </View>

          {/* Full Name */}
          <View style={themedStyles.inputGroup}>
            <Text style={themedStyles.inputLabel}>Full Name</Text>
            <TextInput
              style={themedStyles.textInput}
              placeholder="Enter your Full Name"
              placeholderTextColor="#999"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Email Address */}
          <View style={themedStyles.inputGroup}>
            <Text style={themedStyles.inputLabel}>Email Address</Text>
            <TextInput
              style={themedStyles.textInput}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              value={email}
              editable={false}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          {/* Date of Birth */}
          <View style={themedStyles.inputGroup}>
            <Text style={themedStyles.inputLabel}>Date of birth</Text>
            <View style={themedStyles.datePickerContainer}>
              <TouchableOpacity
                style={themedStyles.datePicker}
                onPress={openMonth}
              >
                <Text style={themedStyles.datePickerText}>{month}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={wp(4)}
                  color="#666"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={themedStyles.datePicker}
                onPress={openDay}
              >
                <Text style={themedStyles.datePickerText}>{day}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={wp(4)}
                  color="#666"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={themedStyles.datePicker}
                onPress={openYear}
              >
                <Text style={themedStyles.datePickerText}>{year}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={wp(4)}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Phone Number */}
          <View style={themedStyles.inputGroup}>
            <Text style={themedStyles.inputLabel}>Phone Number</Text>
            <View style={themedStyles.phoneContainer}>
              <TouchableOpacity
                style={themedStyles.countryCodePicker}
                onPress={openCountry}
              >
                <Text style={themedStyles.datePickerText}>{countryCode}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={wp(4)}
                  color="#666"
                />
              </TouchableOpacity>
              <TextInput
                style={themedStyles.phoneInput}
                placeholder="Enter phone number"
                placeholderTextColor="#999"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {/* Timezone */}
          <View style={themedStyles.inputGroup}>
            <Text style={themedStyles.inputLabel}>Timezone</Text>
            <TextInput
              style={themedStyles.textInput}
              placeholder="Enter timezone"
              placeholderTextColor="#999"
              value={timezone}
              onChangeText={setTimezone}
            />
          </View>
        </View>

        {/* Update Button */}
        <TouchableOpacity
          style={themedStyles.updateButton}
          onPress={handleUpdated}
        >
          <Text style={themedStyles.updateButtonText}>{isPending ? "Updating..." : "Update"}</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}

      {/* Month Modal */}
      <Modal
        visible={showMonthModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowMonthModal(false)}
      >
        <View style={themedStyles.modalOverlay}>
          <View style={themedStyles.modalContent}>
            <ScrollView style={themedStyles.modalScrollView}>
              {months.map(m => (
                <TouchableOpacity
                  key={m}
                  style={themedStyles.modalItem}
                  onPress={() => {
                    setMonth(m);
                    setShowMonthModal(false);
                  }}
                >
                  <Text style={themedStyles.modalItemText}>{m}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Day Modal */}
      <Modal
        visible={showDayModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDayModal(false)}
      >
        <View style={themedStyles.modalOverlay}>
          <View style={themedStyles.modalContent}>
            <ScrollView style={themedStyles.modalScrollView}>
              {days.map(d => (
                <TouchableOpacity
                  key={d}
                  style={themedStyles.modalItem}
                  onPress={() => {
                    setDay(d);
                    setShowDayModal(false);
                  }}
                >
                  <Text style={themedStyles.modalItemText}>{d}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Year Modal */}
      <Modal
        visible={showYearModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowYearModal(false)}
      >
        <View style={themedStyles.modalOverlay}>
          <View style={themedStyles.modalContent}>
            <ScrollView style={themedStyles.modalScrollView}>
              {years.map(y => (
                <TouchableOpacity
                  key={y}
                  style={themedStyles.modalItem}
                  onPress={() => {
                    setYear(y);
                    setShowYearModal(false);
                  }}
                >
                  <Text style={themedStyles.modalItemText}>{y}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Country Code Modal */}
      <Modal
        visible={showCountryModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCountryModal(false)}
      >
        <View style={themedStyles.modalOverlay}>
          <View style={themedStyles.modalContent}>
            <ScrollView style={themedStyles.modalScrollView}>
              {countries.map(c => (
                <TouchableOpacity
                  key={c}
                  style={themedStyles.modalItem}
                  onPress={() => {
                    setCountryCode(c);
                    setShowCountryModal(false);
                  }}
                >
                  <Text style={themedStyles.modalItemText}>{c}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Avatar Selection Modal */}
      <Modal
        visible={showAvatarModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowAvatarModal(false)}
      >
        <View style={themedStyles.modalOverlay}>
          <View style={themedStyles.avatarModalContent}>
            <View style={themedStyles.modalHeader}>
              <Text style={themedStyles.modalTitle}>Choose your avatar</Text>
            </View>

            <View style={themedStyles.avatarGrid}>
              {avatarOptions.map(avatar => (
                <TouchableOpacity
                  key={avatar.id}
                  style={[
                    themedStyles.avatarOption,
                    {
                      backgroundColor: avatar.color,
                      borderColor: avatar.borderColor,
                    },
                    tempSelectedAvatar === avatar.id &&
                      themedStyles.selectedAvatarOption,
                  ]}
                  onPress={() => {
                    setTempSelectedAvatar(avatar.id);
                  }}
                >
                  <MaterialIcons name="person" size={wp(8)} color="#fff" />
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={themedStyles.changeAvatarButton}
              onPress={() => {
                setSelectedAvatar(tempSelectedAvatar);
                setShowAvatarModal(false);
              }}
            >
              <Text style={themedStyles.changeAvatarButtonText}>
                Change my avatar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Photo Selection Modal */}
      <Modal
        visible={showPhotoModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowPhotoModal(false)}
      >
        <View style={themedStyles.modalOverlay}>
          <View style={themedStyles.photoModalContent}>
            <Text style={themedStyles.photoModalTitle}>
              Choose your Profile Picture
            </Text>
            <TouchableOpacity
              style={themedStyles.mediaButton}
              onPress={() => {
                // TODO: integrate react-native-image-picker here
                setSelectedProfile(0);
                setShowPhotoModal(false);
              }}
            >
              <View style={themedStyles.mediaCircle}>
                <MaterialIcons
                  name="insert-drive-file"
                  size={wp(10)}
                  color="#fff"
                />
              </View>
              <Text style={themedStyles.mediaText}>Media Files</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default EditProfileScreen;
