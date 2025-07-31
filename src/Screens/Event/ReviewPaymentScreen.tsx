/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from '../../style/ReviewPaymentStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const ReviewPaymentScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={themedStyles.bgimg}
    >
      <View style={themedStyles.container}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp(-2),
            marginBottom: hp(8),
          }}
        >
          <TouchableOpacity
            style={themedStyles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8.5)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={themedStyles.title}>Review & Payment</Text>
        </View>

        {/* Logo */}
        <View>
          <View style={{ alignItems: 'center', marginBottom: hp(0) }}>
            <Image
              source={require('../../../assets/image/logo1.png')}
              style={{ width: wp(35), height: wp(18), resizeMode: 'contain' }}
            />
          </View>

          {/* Confirm Payment */}
          <View style={{ alignItems: 'center', marginBottom: hp(1.5) }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: wp(4),
                color: '#222',
              }}
            >
              Confirm Payment
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: wp(3),
                color: '#222',
                marginTop: hp(0.5),
              }}
            >
              Mindfulness Group Session
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: wp(2.8),
                color: '#222',
              }}
            >
              June 20, 2025 – 12:00 PM
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#E5E5E5',
              marginVertical: hp(2),
              marginHorizontal: hp(1.5),
            }}
          />

          {/* Balance Section */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: hp(1),
              marginHorizontal: hp(1.5),
            }}
          >
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: wp(3.8),
                color: '#222',
              }}
            >
              Your Balance
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Meidum',
                fontSize: wp(3.8),
                color: '#222',
              }}
            >
              KES 1,200
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: hp(-0.5),
              marginHorizontal: hp(1.5),
            }}
          >
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: wp(3.5),
                color: '#222',
              }}
            >
              Wallet Balance
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: wp(3.5),
                color: '#222',
              }}
            >
              KES 1,200
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: hp(1.5),
              marginHorizontal: hp(1.5),
            }}
          >
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: wp(3.5),
                color: '#222',
              }}
            >
              Tuliar Points
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: wp(3.5),
                color: '#222',
              }}
            >
              50 (worth KES 25)
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#E5E5E5',
              marginBottom: hp(2),
              marginHorizontal: hp(1.5),
            }}
          />
          {/* Info Text */}
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: wp(3),
              color: '#222',
              marginBottom: hp(2),
              marginHorizontal: hp(1.5),
            }}
          >
            Available balance can be applied to this payment. You top if needed.
          </Text>

          {/* Pay Button Row */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: hp(1.5),
              marginHorizontal: hp(1.5),
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#264734',
                paddingVertical: hp(1),
                borderRadius: wp(10),
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                elevation: 3,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
              }}
            onPress={() => navigation.navigate('PaymentsMainScreen')}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: wp(4),
                  fontFamily: 'Poppins-Bold',
                }}
              >
                Pay
              </Text>
            
            </TouchableOpacity>
          </View>

          {/* Top Up Wallet Link */}
          <TouchableOpacity
            style={{ alignItems: 'center', marginTop: hp(0.5) }}
          >
            <Text
              style={{
                color: '#264734',
                fontSize: wp(3.5),
                fontFamily: 'Poppins-SemiBold',
              }}
            >
              Top Up Wallet
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ReviewPaymentScreen;
