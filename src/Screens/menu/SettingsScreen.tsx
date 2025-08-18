import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Switch,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from './settingsStyles';
import { ScrollView } from 'react-native-gesture-handler';

const SettingsScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);
  const handleNotificationSwitch = (value: boolean) => {
  setNotifications(value);
  if (value) {
    navigation.navigate('NotificationsScreen');
  }
};

  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
 // const [language, setLanguage] = useState('English');
   const [language] = useState('English');

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={themedStyles.bgimg}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
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
          <Text style={themedStyles.headerText}>Settings</Text>
        </View>

        {/* Notifications */}
        <Text style={themedStyles.sectionTitle}>Notifications</Text>
        <View style={themedStyles.card}>
          <View style={themedStyles.cardIcon}>
            <MaterialIcons name="notifications" size={wp(5.5)} color="#000" />
          </View>
          <Text style={themedStyles.cardText}>Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={handleNotificationSwitch}
            trackColor={{ false: '#ccc', true: '#A3D9A5' }}
            thumbColor={notifications ? '#fff' : '#fff'}
            style={themedStyles.switch}
          />
        </View>

        {/* Profiles */}
        <Text style={themedStyles.sectionTitle}>Profiles</Text>
        <TouchableOpacity style={themedStyles.card}>
          <View style={themedStyles.cardIcon}>
            <MaterialIcons name="person" size={wp(5.5)} color="#000" />
          </View>
          <Text style={themedStyles.cardText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={themedStyles.card}
          onPress={() => navigation.navigate('ChangePasswordScreen')}
        >
          <View style={themedStyles.cardIcon}>
            <MaterialIcons name="lock" size={wp(5.5)} color="#000" />
          </View>
          <Text style={themedStyles.cardText}>Change Password</Text>
        </TouchableOpacity>

        {/* Mode */}
        <Text style={themedStyles.sectionTitle}>Mode</Text>
        <View style={themedStyles.card}>
          <View style={themedStyles.cardIcon}>
            <MaterialIcons name="brightness-4" size={wp(5.5)} color="#000" />
          </View>
          <Text style={themedStyles.cardText}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#ccc', true: '#A3D9A5' }}
            thumbColor={darkMode ? '#fff' : '#fff'}
            style={themedStyles.switch}
          />
        </View>

        {/* Privacy & Security */}
        <Text style={themedStyles.sectionTitle}>Privacy & Security</Text>
        <View style={themedStyles.card}>
          <View style={themedStyles.cardIcon}>
            <MaterialIcons name="language" size={wp(5.5)} color="#000" />
          </View>
          <Text style={themedStyles.cardText}>Language</Text>
          <View style={themedStyles.dropdown}>
            <Text style={themedStyles.dropdownText}>{language}</Text>
            <MaterialIcons name="arrow-drop-down" size={wp(6)} color="#000" />
          </View>
        </View>
        <TouchableOpacity style={themedStyles.card}>
          <View style={themedStyles.cardIcon}>
            <MaterialIcons name="security" size={wp(5.5)} color="#000" />
          </View>
          <Text style={themedStyles.cardText}>Two Factor Authentication</Text>
        </TouchableOpacity>

        {/* Delete Account */}
        <TouchableOpacity style={themedStyles.deletecard}>
          <View style={themedStyles.cardIcon}>
            <MaterialIcons name="delete" size={wp(5.5)} color="#000" />
          </View>
          <Text style={themedStyles.deletecardText}>Delete my account</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default SettingsScreen;
