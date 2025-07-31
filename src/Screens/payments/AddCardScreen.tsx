import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Pressable, ScrollView, TextInput } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../style/addCardStyles';
import { useResponsive } from '../../Responsive/useResponsive';

const AddCardScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<NavigationProp<any>>();
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
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
            <Text style={s.headerTitle}>Cards</Text>
          </View>

          {/* Logo */}
          <View style={s.logoContainer}>
            <Image source={require('../../../assets/image/logo.png')} style={s.logo} />
          </View>

          {/* Title & Subtitle */}
          <Text style={s.title}>Add Card</Text>
          <Text style={s.subtitle}>Add your credit or debit card details to top up your account.</Text>

          {/* Card Form */}
          <View style={s.cardFormContainer}>
            <View style={s.cardLabelRow}>
              <Text style={s.cardLabel}>Card Number</Text>
              <View style={s.cardLogosRow}>
                <Image source={require('../../../assets/image/visa.png')} style={s.cardLogo} />
              
              </View>
            </View>
            <TextInput
              style={s.cardNumberInput}
              placeholder="4444 4444 4444 4444"
              placeholderTextColor="#000"
              value={cardNumber}
              onChangeText={setCardNumber}
              keyboardType="numeric"
              maxLength={19}
            />
            <View style={s.cardDivider} />
            <View style={s.cardFormRow}>
              <View style={s.cardFieldCol}>
                <Text style={s.cardFieldLabel}>Expiry Date</Text>
                <TextInput
                  style={s.expiryInput}
                  placeholder="MM/YY"
                  placeholderTextColor="#000"
                  value={expiry}
                  onChangeText={setExpiry}
                  keyboardType="numeric"
                  maxLength={5}
                />
              </View>
              <View style={s.verticalDivider} />
              <View style={s.cardFieldCol}>
                <Text style={s.cardFieldLabel}>CVV</Text>
                <TextInput
                  style={s.cvvInput}
                  placeholder="***"
                  placeholderTextColor="#000"
                  value={cvv}
                  onChangeText={setCvv}
                  keyboardType="numeric"
                  maxLength={4}
                  secureTextEntry
                />
              </View>
            </View>
          </View>

          {/* Save Card Button */}
          <Pressable style={s.saveButton} onPress={() => navigation.navigate('EarnPointsScreen')}>
            <Text style={s.saveButtonText}>Save Card</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddCardScreen; 