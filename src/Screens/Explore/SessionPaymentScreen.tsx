import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { useResponsive } from '../../Responsive/useResponsive';
import s from './sessionPaymentStyles';

const SessionPaymentScreen = () => {
  const { wp, hp } = useResponsive();
  const styles = s(wp, hp);
  const navigation = useNavigation();

  const handleConfirm = () => {
    // Handle confirmation logic
    console.log('Confirm payment');
  };

  const handleMenuSelect = (value: any) => {
    // Handle menu selection
    console.log('Selected menu item:', value);
  };

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles.bgimg}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />

          {/* Header */}
          <View style={styles.headerContainer}>
            <View>
              <Image
                source={require('../../Theme/assets/image/logo1.png')}
                style={styles.headerLogo}
              />
              <Text style={styles.headerTagline}>
                Real Connection. Real Support. Real Growth.
              </Text>
            </View>

            <View style={styles.headerRight}>
              <View style={styles.headerIcons}>
                <TouchableOpacity>
                  <Image
                    source={require('../../Theme/assets/icon/bell.png')}
                    style={styles.bellIcon}
                  />
                </TouchableOpacity>
                <Menu onSelect={handleMenuSelect}>
                  <MenuTrigger>
                    <Image
                      source={require('../../Theme/assets/image/homeuser.png')}
                      style={styles.userIcon}
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
                    <MenuOption value="message">
                      <View style={styles.menuItem}>
                        <Feather
                          name="message-circle"
                          size={wp(5)}
                          color="#000"
                        />
                        <Text style={styles.menuText}>Message</Text>
                      </View>
                    </MenuOption>

                    <MenuOption value="settings">
                      <View style={styles.menuItem}>
                        <Ionicons
                          name="settings-outline"
                          size={wp(5)}
                          color="#000"
                        />
                        <Text style={styles.menuText}>Settings</Text>
                      </View>
                    </MenuOption>
                    <MenuOption value="my wallet">
                      <View style={styles.menuItem}>
                        <MaterialIcons
                          name="payment"
                          size={wp(5)}
                          color="#000"
                        />
                        <Text style={styles.menuText}>My Wallets</Text>
                      </View>
                    </MenuOption>
                    <MenuOption value="calendar">
                      <View style={styles.menuItem}>
                        <Ionicons
                          name="calendar-clear-outline"
                          size={wp(5)}
                          color="#000"
                        />
                        <Text style={styles.menuText}>Calendar</Text>
                      </View>
                    </MenuOption>
                    <MenuOption value="help">
                      <View style={styles.menuItem}>
                        <Ionicons
                          name="help-circle-outline"
                          size={wp(5)}
                          color="#000"
                        />
                        <Text style={styles.menuText}>Help</Text>
                      </View>
                    </MenuOption>
                    <MenuOption value="logout">
                      <View style={styles.menuItem}>
                        <Ionicons
                          name="log-out-outline"
                          size={wp(5)}
                          color="#000"
                        />
                        <Text style={styles.menuText}>Logout</Text>
                      </View>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            </View>
          </View>

          {/* Title */}
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={wp(10)}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.title}>
              Therapeutic support & Peer Mentorship
            </Text>
          </View>
          <View style={styles.tagcardContainer}>
            <View style={styles.tagContainer}>
              <Image source={require('../../Theme/assets/icon/badge.png')} />
            </View>
            <Image
              source={require('../../Theme/assets/image/yoga.png')}
              style={styles.sessionImage}
            />

            {/* Session Info */}
            <View style={styles.sessionInfoContainer}>
              <Text style={styles.sessionTitle}>Mindfulness Practices</Text>
              <Text style={styles.sessionDescription}>
                Share and learn mindfulness techniques
              </Text>

              {/* Date and Time */}
              <View style={styles.dateTimeContainer}>
                <Ionicons
                  name="calendar-outline"
                  size={wp(5)}
                  color="#000"
                  style={styles.dateTimeIcon}
                />
                <Text style={styles.dateTimeText}>April 25, 5:00pm</Text>
              </View>
            </View>
            {/* Format and Registered Count */}
            <View style={styles.formatContainer}>
              <Text style={styles.formatLabel}>Format: Chat sessions</Text>
              <Text style={styles.registeredCount}>15 people Registed</Text>
            </View>
          </View>

          {/* Access Payment */}
          <View style={styles.accessPaymentContainer}>
            <Text style={styles.sectionTitle}>Access Payment</Text>
            <Text style={styles.paymentLabel}>
              Auto grant access after payment
            </Text>

            {/* Payment Summary */}
            <Text style={styles.sectionTitle}>Payout Summary</Text>
            <View style={styles.paymentInfoContainer}>
              <View style={styles.paymentRow}>
                <Text style={styles.paymentLabel}>Collected:</Text>
                <Text style={styles.paymentValue}>KES 2,500</Text>
              </View>
              <View style={styles.paymentRow}>
                <Text style={styles.paymentLabel}>Platform Fee:</Text>
                <Text style={styles.paymentValue}>KES 2,500</Text>
              </View>
              <View style={styles.paymentRow}>
                <Text style={styles.paymentLabel}>Net Payout:</Text>
                <Text style={styles.paymentValue}>KES 2,500</Text>
              </View>
            </View>

            {/* Confirm Button */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SessionPaymentScreen;
