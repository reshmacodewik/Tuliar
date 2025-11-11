/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from '../style/homestyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { apiPost, apiPUT, getApiByParams, getApiWithOutQuery } from '../utils/api/common';
import { clearSession, getSession } from '../storage/mmkvPersister';
import {
  useNavigation,
  useRoute,
  RouteProp,
  NavigationProp,
} from '@react-navigation/native';

import {
  RichEditor,
  RichToolbar,
  actions,
} from 'react-native-pell-rich-editor';
import ShowToast from '../utils/ShowToast';
import { API_FEED_CREATE, API_FEED_LIST, API_FEED_UPDATE } from '../utils/api/APIConstant';
import { htmlToPlainText } from '../components/htmlToPlainText';
import FeedPost from '../components/FeedPost';
import { RootStackParamList } from '../Navigation/types';
import { launchImageLibrary } from 'react-native-image-picker';
import { useQuery } from '@tanstack/react-query';
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

const HomeScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [thought, setThought] = useState('');
  const route = useRoute<RouteProp<RootStackParamList, 'MyFeedDetail'>>();
  //const editId = route.params?.id; // ✅ id if editing

  const pickImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
      });

      if (result.assets && result.assets[0].uri) {
        const uri = result.assets[0].uri;

        // Insert image into RichEditor
        richText.current?.insertImage(uri);
      }
    } catch (err) {
      console.log('Image pick error:', err);
    }
  };
  const s = styles(wp, hp);
  const richText = useRef<RichEditor>(null);

  // Prefill editor when editing
  // useEffect(() => {
  //   if (editId) {
  //     const fetchFeedDetail = async () => {
  //       try {
  //         const session = getSession();
  //         const token = session?.accessToken;
  //         const res = await getApiByParams({
  //           url: '/feed',
  //           params: editId,
  //         });
  //         if (res?.success && res.data?.content) {
  //           setThought(res.data.content);
  //           richText.current?.setContentHTML(res.data.content);
  //         }
  //       } catch (e) {
  //         console.error('Error loading feed:', e);
  //       }
  //     };
  //     fetchFeedDetail();
  //   }
  // }, [editId]);
  const { data, refetch, isFetched, isLoading } = useQuery({
    queryKey: ['feed-list'],
    queryFn: () => getApiWithOutQuery({ url: API_FEED_LIST }),
  });

   useEffect(() => {
      refetch();
    }, [refreshKey]);
  const handlePost = async () => {
    try {
      const session = getSession();
      const token = session?.accessToken;
      if (!token) return ShowToast('You must be logged in to post', 'error');

      const html = await richText.current?.getContentHtml?.();
      const plain = htmlToPlainText(html || thought);

      if (!plain) {
        return ShowToast('Please write something before posting', 'error');
      }

      const res = await apiPost({
        url: API_FEED_CREATE,
        values: { content: plain },
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res?.success) {
        ShowToast(res?.message || 'Posted!', 'success');
        setThought('');
        richText.current?.setContentHTML(''); // clear editor
        setRefreshKey(prev => prev + 1);
      } else {
        ShowToast(res?.message || 'Failed to save feed', 'error');
      }
    } catch (e: any) {
      console.error('Save failed:', e);
      ShowToast(e?.message || 'Something went wrong', 'error');
    }
  };
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
      navigation.navigate('PaymentsScreen');
      break;
    case 'calendar':
      navigation.navigate('CalendarScreen');
      break;
    case 'help':
      navigation.navigate('HelpScreen');
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

          {/* FEATURE GRID */}
          <View style={styles(wp, hp).grid}>
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
                    navigation.navigate('TherapistListScreen');
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
          </View>

          {/* INNER CONTENT — ALL VISIBLE & SCROLLABLE */}
          <View style={[styles(wp, hp).innercontainer, { flexGrow: 1 }]}>
            {/* MY JOURNEY */}
            <View style={styles(wp, hp).sectionHeader}>
              <Text style={styles(wp, hp).sectionTitle}>My Journey</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('JournalScreen')}
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
                  image: require('../../src/Theme/assets/image/image.png'),
                  title: 'Therapy',
                  text: 'Next Session with Dr. on April 25 at 10:00 AM',
                  buttonText: 'View Details',
                },
                {
                  image: require('../../src/Theme/assets/image/journeycard2.png'),
                  title: 'Complete your today’s  goal',
                  text: 'Next Session with Dr.  on April 25 at 10:00 AM',
                  buttonText: 'View my goals',
                },

                {
                  image: require('../../src/Theme/assets/image/journeycard1.png'),
                  title: 'Weekly Report',
                  text: 'Next Session with Dr.  on April 25 at 10:00 AM',
                  buttonText: 'View Report',
                  navigateTo: 'WeeklyReportScreen',
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
                    <TouchableOpacity
                      style={styles(wp, hp).detailsBtn}
                      onPress={() => {
                        if (item.navigateTo) {
                          navigation.navigate(item.navigateTo as never);
                        }
                      }}
                    >
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
                      source={require('../../src/Theme/assets/image/events.png')}
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
                                ? require('../../src/Theme/assets/icon/badge.png')
                                : require('../../src/Theme/assets/icon/free.png')
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
              <TouchableOpacity
                style={styles(wp, hp).thoughtBox}
                onPress={() => navigation.navigate('MyFeedDetail')}
              >
                <Text style={styles(wp, hp).placeholder}>
                  What's on your mind?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={wp(7)} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={s.thoughtBoxcontainer}>
              <Text style={s.sharetitle}>Share your Thoughts</Text>

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#ddd',
                  borderRadius: wp(3),
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                <ScrollView style={{ maxHeight: hp(40) }}>
                  <RichEditor
                    ref={richText}
                    placeholder="Write something amazing..."
                    onChange={html => setThought(html)}
                    initialHeight={hp(12)}
                    useContainer
                  />
                </ScrollView>

                <RichToolbar
                  editor={richText}
                  actions={[
                    actions.setBold,
                    actions.setItalic,
                    actions.setUnderline,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                    actions.insertImage,
                  ]}
                  iconTint="#444"
                  selectedIconTint="#007bff"
                  style={{
                    borderTopWidth: 1,
                    borderTopColor: '#eee',
                    backgroundColor: '#fafafa',
                  }}
                  onPressAddImage={pickImage}
                />
              </View>

              {/* Post / Update button */}
              <TouchableOpacity style={s.postbutton} onPress={handlePost}>
                <Text style={s.buttonText}>Post</Text>
              </TouchableOpacity>
            </View>
            <FeedPost />
          </View>
        </ScrollView>
        {/* STATIC FLOATING MOOD BUTTON */}
        <View style={styles(wp, hp).staticFloatingContainer}>
          <TouchableOpacity style={styles(wp, hp).fab}>
            <Image
              source={require('../../src/Theme/assets/image/moodicon.png')}
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
      {/* LOGOUT MODAL */}
      <Modal
        transparent
        visible={logoutVisible}
        animationType="fade"
        onRequestClose={() => setLogoutVisible(false)}
      >
        <View style={styles(wp, hp).overlay}>
          <View style={styles(wp, hp).Modalcontainer}>
            <Image
              source={require('../../src/Theme/assets/image/logout.png')} // 🔹 add your logout icon
              style={styles(wp, hp).Modalicon}
            />
            <Text style={styles(wp, hp).Modaltitle}>Logout</Text>
            <Text style={styles(wp, hp).subtitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>

            <TouchableOpacity
              style={styles(wp, hp).button}
              onPress={async () => {
                try {
                  // 🔹 Clear AsyncStorage
                  clearSession();

                  // 🔹 If you’re using Redux, also dispatch logout
                  // dispatch(logout());

                  // 🔹 Close modal
                  setLogoutVisible(false);

                  navigation.navigate('LoginScreen');
                } catch (err) {
                  console.log('Error clearing session:', err);
                }
              }}
            >
              <Text style={styles(wp, hp).buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};
export default HomeScreen;
