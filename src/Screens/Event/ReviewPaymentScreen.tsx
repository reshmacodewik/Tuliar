import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from '../../style/ReviewPaymentStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RadioButton } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const ReviewPaymentScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);
  const [paymentMethod, setPaymentMethod] = React.useState('card');

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={themedStyles.bgimg}
    >
      <View style={themedStyles.container}>
        <View>
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
        </View>

        <Text style={themedStyles.title}>Review & Payment</Text>

        <ScrollView contentContainerStyle={themedStyles.scrollContent}>
          <View style={themedStyles.card}>
            <Text style={themedStyles.amount}>$500.00</Text>
            <Text style={themedStyles.subText}>Goods and Services</Text>

            <View style={themedStyles.dividerRow}>
              <View style={themedStyles.dividerLine} />
              <Text style={themedStyles.payWith}>Pay with</Text>
              <View style={themedStyles.dividerLine} />
            </View>

            <Text style={themedStyles.howToPay}>
              How would you like to pay?
            </Text>
            <View style={themedStyles.radioRow}>
              <RadioButton
                value="card"
                status={paymentMethod === 'card' ? 'checked' : 'unchecked'}
                onPress={() => setPaymentMethod('card')}
                color="#F4A825" // Optional: to match orange
              />
              <Text style={themedStyles.radioLabel}>Credit or Debit card</Text>
            </View>

            <Text style={themedStyles.cardInfoLabel}>Card Informations</Text>

            <TextInput
              style={themedStyles.input}
              placeholder="Card Number"
              placeholderTextColor="#999"
            />
            <TextInput
              style={themedStyles.input}
              placeholder="Confirm Card Number"
              placeholderTextColor="#999"
            />

            <View style={themedStyles.row}>
              <TextInput
                style={[themedStyles.input, themedStyles.halfInput]}
                placeholder="MM/YY"
                placeholderTextColor="#999"
              />
              <TextInput
                style={[themedStyles.input, themedStyles.halfInput]}
                placeholder="CVV"
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={themedStyles.payButton}>
          <Text style={themedStyles.payButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ReviewPaymentScreen;
