import React from 'react';
import { View, Text, Image, ImageBackground, Pressable, ScrollView } from 'react-native';
import { useResponsive } from '../Responsive/useResponsive';
import styles from '../style/paymentsStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PaymentsScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);

  return (
    <ImageBackground
      source={require('../../assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={s.container}>
          <View style={s.headerRow}>
            <Pressable onPress={() => {}} style={{ marginRight: wp(2) }}>
              <MaterialIcons name="keyboard-arrow-left" size={32} color="black" />
            </Pressable>
            <Text style={s.header}>Payments</Text>
            <Pressable onPress={() => {}}>
              <MaterialIcons name="tune" size={28} color="black" />
            </Pressable>
          </View>
          <Text style={s.subheader}>Real Connection. Real Support. Real Growth.</Text>

          {/* Top Up Wallet Card */}
          <View style={s.card}>
            <Text style={s.cardTitle}>Top Up Wallet</Text>
            <Text style={s.cardSubtitle}>Your Balance</Text>
            <Text style={s.balance}>KES 2,350</Text>
            <View style={s.paymentLogosRow}>
              <Image source={require('../../assets/image/visa.png')} style={s.paymentLogo} />
              <Image source={require('../../assets/image/mpesa.png')} style={s.paymentLogo} />
            </View>
            <View style={s.paymentLogosRow}>
              <Image source={require('../../assets/image/paypal.png')} style={s.paymentLogo} />
            </View>
            <Pressable style={s.actionButton} onPress={() => {}}>
              <Text style={s.actionButtonText}>Top Up</Text>
            </Pressable>
          </View>

          {/* Earn Tuliar Points Card */}
          <View style={s.card}>
            <Text style={s.cardTitle}>Earn Tuliar Points</Text>
            <Text style={s.cardSubtitle}>Watch ads to earn points & subsidize services</Text>
            <Text style={s.cardSubtitle}>Watch 1 ad = 5 points{"\n"}100 points = 1 free peer chat OR KES 50 off a service.</Text>
            <Pressable style={s.actionButton} onPress={() => {}}>
              <Text style={s.actionButtonText}>Earn Points</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PaymentsScreen; 