/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from '.';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
const features = [
  {
    title: 'Chat with experts',
    image: require('../../src/Theme/assets/image/chatexperts.png'),
  },
  {
    title: 'Group Sessions',
    image: require('../../src/Theme/assets/image/groupsession.png'),
  },
  {
    title: 'Coaching',
    image: require('../../src/Theme/assets/image/coachng.png'),
  },
  {
    title: 'Therapy',
    image: require('../../src/Theme/assets/image/Therapy.png'),
  },
];



const StacyScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleMenuSelect = (raw: string) => {
    const value = raw.trim().toLowerCase();

    switch (value) {
      case 'profile':
        navigation.navigate('ProfileScreen');
        break;
      case 'message':
        navigation.navigate('MessagesScreen');
        break;
      case 'settings':
        navigation.navigate('SettingsScreen');
        break;
      case 'my wallet':
        navigation.navigate('PaymentsMainScreen');
        break;
      case 'calendar':
        navigation.navigate('CalendarScreen');
        break;
      case 'help':
        navigation.navigate('HelpSupportScreen');
        break;
      case 'logout':
        console.log('Logging out...');
        // await logout(); // if you have one
        break;
      default:
        console.warn('Unknown menu value:', raw);
    }

    // DO NOT call handleMenuSelect again here!
  };

  return (
    <ImageBackground
      source={require('../../src/Theme/assets/image/background.png')}
      style={styles(wp, hp).bgimg}
    >
      <View style={styles(wp, hp).mainContainer}>
        <ScrollView
          style={styles(wp, hp).container}
          contentContainerStyle={{ paddingBottom: hp(5) }}
          showsVerticalScrollIndicator={false}
        >
          {/* HEADER */}
          <View style={styles(wp, hp).header}>
            <View>
              <Image
                source={require('../../src/Theme/assets/image/logo1.png')}
                style={styles(wp, hp).logo}
              />
              <Text style={styles(wp, hp).headerText}>
                Real Connection. Real Support. Real Growth.
              </Text>
            </View>
            <View style={styles(wp, hp).headerIcons}>
              <TouchableOpacity>
                <Image
                  source={require('../../src/Theme/assets/icon/bell.png')}
                  style={styles(wp, hp).bellIcon}
                />
              </TouchableOpacity>
              <Menu onSelect={handleMenuSelect}>
                <MenuTrigger>
                  <Image
                    source={require('../../src/Theme/assets/image/homeuser.png')}
                    style={styles(wp, hp).userIcon}
                  />
                </MenuTrigger>
                <MenuOptions
                  customStyles={{
                    optionsContainer: {
                      borderRadius: wp(3),
                      padding: wp(2),
                      backgroundColor: '#fff',
                      elevation: 5,
                      width: wp(40),
                    },
                  }}
                >
                  {/* <MenuOption value="profile">
                  <View style={styles(wp, hp).menuItem}>
                    <Feather name="user" size={wp(5)} color="#000" />
                    <Text style={styles(wp, hp).menuText}>My Profile</Text>
                  </View>
                </MenuOption> */}
                  <MenuOption value="message">
                    <View style={styles(wp, hp).menuItem}>
                      <Feather
                        name="message-circle"
                        size={wp(5)}
                        color="#000"
                      />
                      <Text style={styles(wp, hp).menuText}>Message</Text>
                    </View>
                  </MenuOption>

                  <MenuOption value="settings">
                    <View style={styles(wp, hp).menuItem}>
                      <Ionicons
                        name="settings-outline"
                        size={wp(5)}
                        color="#000"
                      />
                      <Text style={styles(wp, hp).menuText}>Settings</Text>
                    </View>
                  </MenuOption>
                  <MenuOption value="my wallet">
                    <View style={styles(wp, hp).menuItem}>
                      <MaterialIcons name="payment" size={wp(5)} color="#000" />
                      <Text style={styles(wp, hp).menuText}>My Wallets</Text>
                    </View>
                  </MenuOption>
                  <MenuOption value="calendar">
                    <View style={styles(wp, hp).menuItem}>
                      <Ionicons
                        name="calendar-clear-outline"
                        size={wp(5)}
                        color="#000"
                      />
                      <Text style={styles(wp, hp).menuText}>Calendar</Text>
                    </View>
                  </MenuOption>
                  <MenuOption value="help">
                    <View style={styles(wp, hp).menuItem}>
                      <Ionicons
                        name="help-circle-outline"
                        size={wp(5)}
                        color="#000"
                      />
                      <Text style={styles(wp, hp).menuText}>Help</Text>
                    </View>
                  </MenuOption>
                  <MenuOption value="logout">
                    <View style={styles(wp, hp).menuItem}>
                      <Ionicons
                        name="log-out-outline"
                        size={wp(5)}
                        color="#000"
                      />
                      <Text style={styles(wp, hp).menuText}>Logout</Text>
                    </View>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </View>

         
</ScrollView>
       
         
      </View>
    </ImageBackground>
  );
};
export default StacyScreen;
