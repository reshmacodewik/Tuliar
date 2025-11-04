import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Pressable, ScrollView, TextInput } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../style/paymentDetailsStyles';
import { useResponsive } from 'react-native-responsive-hook';



const PaymentDetailsScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('mpesa');

  const topUpAmounts = ['KES 500', 'KES 1,235', 'KES 2,000'];

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={s.container}>
          {/* Header */}
          <View style={s.headerRow}>
            <Pressable onPress={() => navigation.goBack()} style={s.backButton}>
              <MaterialIcons name="keyboard-arrow-left" size={wp(9)} color="black" />
            </Pressable>
            <Text style={s.headerTitle}>Payment Details</Text>
          </View>

          {/* Logo */}
          <View style={s.logoContainer}>
            <Image source={require('../../Theme/assets/image/logo.png')} style={s.logo} />
          </View>

          {/* Top Up Section */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>Top Up Your Wallet</Text>
            <Text style={s.sectionSubtitle}>Choose payment method and confirm.</Text>
            
            {/* Amount Buttons */}
            <View style={s.amountButtonsContainer}>
              {topUpAmounts.map((amount, index) => (
                <Pressable
                  key={index}
                  style={[
                    s.amountButton,
                    selectedAmount === amount && s.amountButtonSelected
                  ]}
                  onPress={() => setSelectedAmount(amount)}
                >
                  <Text style={[
                    s.amountButtonText,
                    selectedAmount === amount && s.amountButtonTextSelected
                  ]}>
                    {amount}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* Custom Amount Input */}
            <View style={s.customAmountContainer}>
              <TextInput
                style={s.customAmountInput}
                placeholder="Enter custom amount"
                placeholderTextColor="#A0A3BD"
                value={customAmount}
                onChangeText={setCustomAmount}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Payment Method Section */}
          <View style={s.sectionpayment}>
            <Text style={s.sectionTitlepayment}>Payment Method</Text>
            <View style={s.paymentMethodsContainer}>
              <Pressable
                style={[
                  s.paymentMethodButton,
                  s.paymentMethodButtonLeft,
                  selectedPaymentMethod === 'mpesa' && s.paymentMethodButtonSelected
                ]}
                onPress={() => setSelectedPaymentMethod('mpesa')}
              >
              <Image
                    source={require('../../Theme/assets/image/mpesa.png')}
                    style={s.paymentMethodIcon}
                  />
                 
              </Pressable>
              <Pressable
                style={[
                  s.paymentMethodButton,
                  s.paymentMethodButtonCenter,
                  selectedPaymentMethod === 'card' && s.paymentMethodButtonSelected
                ]}
                onPress={() => setSelectedPaymentMethod('card')}
              >
                <Text style={[
                  s.paymentMethodText,
                  selectedPaymentMethod === 'card' && s.paymentMethodTextSelected
                ]}>
                  Visa/Mastercard
                </Text>
              </Pressable>
              <Pressable
                style={[
                  s.paymentMethodButton,
                  s.paymentMethodButtonRight,
                  selectedPaymentMethod === 'paypal' && s.paymentMethodButtonSelected
                ]}
                onPress={() => setSelectedPaymentMethod('paypal')}
              >
                <View style={s.paypalRow}>
                  <Image
                    source={require('../../Theme/assets/image/paypal.png')}
                    style={s.paypalIcon}
                  />
                 
                </View>
              </Pressable>
            </View>
            <Text style={s.paymentInstruction}>
              You'll receive an M-Pesa prompt - just enter your PIN to complete.
            </Text>
          </View>
          <Pressable style={s.saveButton} onPress={() => navigation.navigate('AddCardScreen')}>
            <Text style={s.saveButtonText}>Top Up With M-Pesa</Text>
          </Pressable>
          {/* Footer */}
          <View style={s.footer}>
            <Text style={s.footerText}>Secure transaction, Wallet updates instantly.</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PaymentDetailsScreen; 