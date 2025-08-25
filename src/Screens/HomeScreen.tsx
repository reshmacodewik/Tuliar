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
import styles from '../style/homestyles';
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
    image: require('../../assets/image/chatexperts.png'),
  },
  {
    title: 'Group Sessions',
    image: require('../../assets/image/groupsession.png'),
  },
  { title: 'Coaching', image: require('../../assets/image/coachng.png') },
  { title: 'Therapy', image: require('../../assets/image/Therapy.png') },
];

const feedPosts = [
  {
    id: '1',
    user: 'Acnxk ojkb lc',
    avatar: require('../../assets/image/ellispe.png'),
    content:
      'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent nec quam et hac. Duis et turpis nisl arcu amet parturient sodales lorem nunc.',
    likes: '20k',
    comments: '10k',
    shares: '5k',
  },
  {
    id: '2',
    user: 'Acnxk ojkb lc',
    avatar: require('../../assets/image/ellispe.png'),
    content:
      'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent nec quam et hac. Duis et turpis nisl arcu amet parturient sodales lorem nunc.',
    likes: '20k',
    comments: '10k',
    shares: '5k',
  },
];

const HomeScreen = () => {
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
      source={require('../../assets/image/background.png')}
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
                source={require('../../assets/image/logo1.png')}
                style={styles(wp, hp).logo}
              />
              <Text style={styles(wp, hp).headerText}>
                Real Connection. Real Support. Real Growth.
              </Text>
            </View>
            <View style={styles(wp, hp).headerIcons}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icon/bell.png')}
                  style={styles(wp, hp).bellIcon}
                />
              </TouchableOpacity>
              <Menu onSelect={handleMenuSelect}>
              <MenuTrigger>
                <Image
                  source={require('../../assets/image/homeuser.png')}
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
                    <Feather name="message-circle" size={wp(5)} color="#000" />
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
                    <Ionicons name="calendar-clear-outline" size={wp(5)} color="#000" />
                    <Text style={styles(wp, hp).menuText}>Calendar</Text>
                  </View>
                </MenuOption>
                <MenuOption value="help">
                  <View style={styles(wp, hp).menuItem}>
                    <Ionicons name="help-circle-outline" size={wp(5)} color="#000" />
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

          {/* FEATURE GRID */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles(wp, hp).grid}
          >
            {features.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={styles(wp, hp).featureBox}
                              onPress={() => {
                console.log('Card pressed:', item.title);
                if (item.title === 'Coaching') {
                 
                  navigation.navigate('Coaching');
                } else if (item.title === 'Chat with experts') {
                  navigation.navigate('ChatWithExpertsScreen');
                } else if (item.title === 'Group Sessions') {
                  navigation.navigate('GroupSessionsScreen');
                } else if (item.title === 'Therapy') {
                  navigation.navigate('TherapyScreen');
                }
              }}
              >
                <Image
                  source={item.image}
                  style={styles(wp, hp).featureImage}
                />
                <LinearGradient
                  colors={['rgba(38, 71, 52, 0)', '#264734']}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  style={styles(wp, hp).featureOverlay}
                >
                  <Text style={styles(wp, hp).featureText}>{item.title}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* INNER CONTENT — ALL VISIBLE & SCROLLABLE */}
          <View style={[styles(wp, hp).innercontainer, { flexGrow: 1 }]}>
            {/* MY JOURNEY */}
            <View style={styles(wp, hp).sectionHeader}>
              <Text style={styles(wp, hp).sectionTitle}>My Journey</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('GoalsScreen')}
              >
                <Ionicons name="chevron-forward" size={wp(7)} color="#000" />
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: hp(2) }}
              contentContainerStyle={{ paddingRight: wp(4) }}
            >
              {[
                {
                  image: require('../../assets/image/image.png'),
                  title: 'Therapy',
                  text: 'Next Session with Dr. on April 25 at 10:00 AM',
                  buttonText: 'View Details',
                },
                {
                  image: require('../../assets/image/journeycard2.png'),
                  title: 'Complete your today’s  goal',
                  text: 'Next Session with Dr.  on April 25 at 10:00 AM',
                  buttonText: 'View my goals',
                  
                },
                
                {
                  image: require('../../assets/image/journeycard1.png'),
                  title: 'Weekly Report',
                  text: 'Next Session with Dr.  on April 25 at 10:00 AM',
                  buttonText: 'View Report',
                },
              ].map((item, i) => (
                <View key={i} style={styles(wp, hp).journeyCard}>
                  <Image
                    source={item.image}
                    style={styles(wp, hp).journeyImg}
                  />
                  <View style={styles(wp, hp).journeyContent}>
                    <Text style={styles(wp, hp).journeyTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles(wp, hp).journeyText}>{item.text}</Text>
                    <TouchableOpacity style={styles(wp, hp).detailsBtn}>
                      <Text style={styles(wp, hp).detailsText}>
                        {item.buttonText}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* EVENTS */}
            <View style={styles(wp, hp).sectionHeader}>
              <Text style={styles(wp, hp).sectionTitle}>Events</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('EventsScreen')}
              >
                <Ionicons name="chevron-forward" size={wp(7)} color="#000" />
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginVertical: wp(2) }}
            >
              {[{ premium: true }, { premium: false }].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('EventDetailsScreen')}
                  style={{ marginRight: wp(3) }}
                >
                  <View style={styles(wp, hp).eventCard}>
                    <Image
                      source={require('../../assets/image/events.png')}
                      style={styles(wp, hp).eventImg}
                    />
                    <View style={styles(wp, hp).eventContent}>
                      <View style={styles(wp, hp).tagsRow}>
                        <View style={styles(wp, hp).fromTag}>
                          <Text style={styles(wp, hp).tagText}>
                            From Tuliar
                          </Text>
                        </View>
                        <View style={styles(wp, hp).typeTag}>
                          <Image
                            source={
                              item.premium
                                ? require('../../assets/icon/badge.png')
                                : require('../../assets/icon/free.png')
                            }
                            style={{ width: wp(4), height: wp(4) }}
                            resizeMode="contain"
                          />
                        </View>
                      </View>
                      <Text style={styles(wp, hp).eventTitle}>
                        Upcoming Wellness & Mental heath workshop
                      </Text>
                      <Text style={styles(wp, hp).eventDesc} numberOfLines={4}>
                        Lorem ipsum dolor sit amet consectetur. Molestie purus
                        eu volutpat praesent nec quam et hac. Duis et turpis
                        nisl arcu amet parturient sodales lorem nunc.
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* FEED */}
            <View style={styles(wp, hp).sectionHeader}>
              <Text style={styles(wp, hp).sectionTitle}>My Feed</Text>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={wp(7)} color="#000" />
              </TouchableOpacity>
            </View>

            {feedPosts.map(post => (
              <View key={post.id} style={styles(wp, hp).feedCard}>
                <View style={styles(wp, hp).feedHeader}>
                  <Image
                    source={post.avatar}
                    style={styles(wp, hp).feedAvatar}
                  />
                  <Text style={styles(wp, hp).feedUser}>{post.user}</Text>
                </View>
                <Text style={styles(wp, hp).feedText}>{post.content}</Text>
                <View style={styles(wp, hp).feedStats}>
                  <View style={styles(wp, hp).statItem}>
                    <Image
                      source={require('../../assets/image/heart.png')}
                      style={styles(wp, hp).feedicon}
                    />
                    <Text style={styles(wp, hp).statText}>{post.likes}</Text>
                  </View>

                  <View style={styles(wp, hp).statItem}>
                    <Image
                      source={require('../../assets/image/feedchat.png')}
                      style={styles(wp, hp).feedicon}
                    />
                    <Text style={styles(wp, hp).statText}>{post.comments}</Text>
                  </View>

                  <View style={styles(wp, hp).statItem}>
                    <Image
                      source={require('../../assets/image/send.png')}
                      style={styles(wp, hp).feedicon}
                    />
                    <Text style={styles(wp, hp).statText}>{post.shares}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* STATIC FLOATING MOOD BUTTON */}
        <View style={styles(wp, hp).staticFloatingContainer}>
          <TouchableOpacity style={styles(wp, hp).fab}>
            <Image
              source={require('../../assets/image/moodicon.png')}
              style={styles(wp, hp).icon}
            />
          </TouchableOpacity>
          <View style={styles(wp, hp).textContainer}>
            <Text style={styles(wp, hp).text}>
              Hi <Text style={{ fontWeight: 'bold' }}>Susan</Text> 👋
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default HomeScreen;
