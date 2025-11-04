import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
// @ts-ignore
import { useResponsive } from '../../Responsive/useResponsive';
import s from './exploreStyles';

const ExploreScreen = () => {
  const { wp, hp } = useResponsive();
  const styles = s(wp, hp);
  const navigation = useNavigation<NavigationProp<any>>();

  const cards = [
    {
      title: 'Group Sessions',
      desc: 'Join live group calls on wellness topics.',
      cta: 'Join Now',
    },
    {
      title: 'Therapists',
      desc: 'Browse our network of wellness professionals',
      cta: 'Find a Provider',
    },
    {
      title: 'Coaches and mentors',
      desc: 'Browse our network of wellness professionals',
      cta: 'Find a Provider',
    },
    {
      title: 'Tuliar Tools',
      desc: 'Journal, mood tracker, and more',
      cta: 'Get Started',
    },
    {
      title: 'Special Offers',
      desc: 'Unlock exclusive group sessions and discounts',
      cta: 'View Plans',
    },
  ];

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles.bgimg}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <View style={{ width: wp(8) }} />
        </View>

        {/* Logo and subtitle */}
        <View style={styles.logoBlock}>
          <Image
            source={require('../../Theme/assets/image/logo1.png')}
            style={styles.logo}
          />
          <Text style={styles.subtitle}>Explore Tuliar</Text>
          <Text style={styles.tagline}>
            Discover wellness tools, group sessions,{'\n'}
            and more
          </Text>
        </View>

        {cards.map((c, idx) => (
          <View key={idx} style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{c.title}</Text>
              <Text style={styles.cardDesc}>{c.desc}</Text>
            </View>
            <TouchableOpacity
              style={styles.ctaBtn}
              onPress={() => {
                if (c.cta === 'Join Now') {
                  navigation.navigate('GroupSessionsScreen');
                }
              }}
            >
              <Text style={styles.ctaText}>{c.cta}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default ExploreScreen;
