import React from 'react';
import { View, Text, Image, ImageBackground, Pressable, ScrollView } from 'react-native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from '../../style/subscriptionStyles';
import SubscriptionCard from '../../components/SubscriptionCard';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../Navigation/Mystack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const plans = [
  {
    title: 'General Coaching',
    price: 'KES 3,000/month',
    features: [
      'Weekly one-on-one coaching throughout the month.',
      'Continuous chat access',
    ],
    alt: false,
  },
  {
    title: 'Standard professional Mentorship',
    price: 'KES 3,000/month',
    features: [
      'Weekly one-on-one coaching throughout the month.',
      'Continuous chat access',
    ],
    alt: true,
  },
  {
    title: 'Premium industry experts',
    price: 'KES 7,000/month',
    features: [
      'Weekly one-on-one coaching throughout the month.',
      'Continuous chat access',
    ],
    alt: false,
  },
];

const SubscriptionScreen = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={s.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={s.container}>
          <View style={s.headerContainer}>
            <Pressable onPress={() => navigation.goBack()} style={{ marginRight: wp(2), marginTop: hp(0.8) }}>
              <MaterialIcons name="keyboard-arrow-left" size={34} color="black" />
            </Pressable>
            <Text style={s.mainheader}>Subscriptions</Text>
          </View>
          <Image source={require('../../../assets/image/logo.png')} style={s.logo} />
          <Text style={s.header}>Here’s What You’ll Get</Text>
          <Text style={s.subheader}>Choose a plan to start your journey</Text>
          <View style={s.cardContainer}>
            <SubscriptionCard {...plans[0]} onSubscribe={() => navigation.navigate('MentorshipApply')} />
          </View>
          <View style={[s.cardContainer, { backgroundColor: 'transparent' }] }>
            <SubscriptionCard {...plans[1]} onSubscribe={() => navigation.navigate('MentorshipApply')} />
          </View>
          <View style={s.cardContainer}>
            <SubscriptionCard {...plans[2]} onSubscribe={() => navigation.navigate('MentorshipApply')} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SubscriptionScreen; 