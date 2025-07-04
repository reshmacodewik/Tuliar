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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
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
  const handleMenuSelect = (value: string) => {
    console.log('Selected:', value);
    if (value === 'profile') {
      navigation.navigate('ProfileScreen');
    } else if (value === 'logout') {
      console.log('Logging out...');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/image/background.png')}
      style={styles(wp, hp).bgimg}
    >
      <View style={styles(wp, hp).container}>
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
              <MenuOptions customStyles={{
                optionsContainer: {
                  borderRadius: wp(3),
                  padding: wp(2),
                  backgroundColor: '#fff',
                  elevation: 5,
                  width: wp(40),
                },
              }}>
                <MenuOption value="profile">
                  <View style={styles(wp, hp).menuItem}>
                    <Feather name="user" size={wp(5)} color="#000" />
                    <Text style={styles(wp, hp).menuText}>My Profile</Text>
                  </View>
                </MenuOption>
                  <MenuOption value="settings">
                  <View style={styles(wp, hp).menuItem}>
                    <Feather name="message-circle" size={wp(5)} color="#000" />
                    <Text style={styles(wp, hp).menuText}>Message</Text>
                  </View>
                </MenuOption>
                <MenuOption value="settings">
                  <View style={styles(wp, hp).menuItem}>
                    <Ionicons name="settings-outline" size={wp(5)} color="#000" />
                    <Text style={styles(wp, hp).menuText}>Settings</Text>
                  </View>
                </MenuOption>
                  <MenuOption value="settings">
                  <View style={styles(wp, hp).menuItem}>
                    <MaterialIcons name="payment" size={wp(5)} color="#000" />
                    <Text style={styles(wp, hp).menuText}>Payments</Text>
                  </View>
                </MenuOption>
                <MenuOption value="logout">
                  <View style={styles(wp, hp).menuItem}>
                    <Ionicons name="log-out-outline" size={wp(5)} color="#000" />
                    <Text style={styles(wp, hp).menuText}>Logout</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
        <View style={styles(wp, hp).featureRow}>
          <TouchableOpacity style={styles(wp, hp).featureBtn}>
            <Image
              source={require('../../assets/image/message.png')}
              style={styles(wp, hp).featureIcon}
            />
            <Text style={styles(wp, hp).featureText}>
              Chat with your experts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(wp, hp).featureBtn}>
            <Image
              source={require('../../assets/image/users.png')}
              style={styles(wp, hp).featureIcon}
            />
            <Text style={styles(wp, hp).featureText}>Group Sessions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(wp, hp).featureBtn}>
            <Image
              source={require('../../assets/image/video.png')}
              style={styles(wp, hp).featureIcon}
            />
            <Text style={styles(wp, hp).featureText}>Coaching</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(wp, hp).featureBtn}>
            <Image
              source={require('../../assets/image/feather.png')}
              style={styles(wp, hp).featureIcon}
            />
            <Text style={styles(wp, hp).featureText}>Therapy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles(wp, hp).innercontainer}>
          <ScrollView>
            {/* My Journey */}
            <View style={styles(wp, hp).sectionHeader}>
              <Text style={styles(wp, hp).sectionTitle}>My Journey</Text>
              <TouchableOpacity onPress={() => navigation.navigate('MyJourneyScreen')}>
                <Ionicons name="chevron-forward" size={wp(7)} color="#000" />
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3].map((_, i) => (
                <View key={i} style={styles(wp, hp).journeyCard}>
                  <Image
                    source={require('../../assets/image/image.png')}
                    style={styles(wp, hp).journeyImg}
                  />
                  <Text style={styles(wp, hp).journeyTitle}>Therapy</Text>
                  <Text style={styles(wp, hp).journeyText}>
                    Next Session with Dr. on April 25 at 10:00 AM
                  </Text>
                  <TouchableOpacity style={styles(wp, hp).detailsBtn}>
                    <Text style={styles(wp, hp).detailsText}>See Details</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <View style={styles(wp, hp).sectionHeader}>
              <Text style={styles(wp, hp).sectionTitle}>Events</Text>
              <TouchableOpacity onPress={() => navigation.navigate('EventsScreen')}>
                <Ionicons name="chevron-forward" size={wp(7)} color="#000" />
              </TouchableOpacity>
            </View>
            
            {[{ premium: true }, { premium: false }].map((item, index) => (
              <TouchableOpacity onPress={() => navigation.navigate('EventDetailsScreen')}>
              <View key={index} style={styles(wp, hp).eventCard} >
                <Image
                  source={require('../../assets/image/events.png')}
                  style={styles(wp, hp).eventImg}
                />
                <View style={styles(wp, hp).eventContent}>
                  <View style={styles(wp, hp).tagsRow}>
                    <View style={styles(wp, hp).fromTag}>
                      <Text style={styles(wp, hp).tagText}>From Tuliar</Text>
                    </View>
                    <View
                      style={[
                        styles(wp, hp).typeTag,
                        {
                          backgroundColor: item.premium ? '#264734' : '#F6B500',
                          paddingHorizontal: item.premium ? wp(3.5) : wp(6),
                        },
                      ]}
                    >
                      <Text style={styles(wp, hp).tagText}>
                        {item.premium ? 'Premium' : 'Free'}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles(wp, hp).eventTitle}>
                    Upcoming Wellness & Mental heath workshop
                  </Text>
                  <Text style={styles(wp, hp).eventDesc}>
                    Lorem ipsum dolor sit amet consectetur. Molestie purus eu
                    volutpat praesent nec quam et hac. Duis et turpis nisl arcu
                    amet parturient sodales lorem nunc.
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            ))}
          
            {/* User Feed */}
            <View style={styles(wp, hp).sectionHeader}>
              <Text style={styles(wp, hp).sectionTitle}>User Feed</Text>
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
          </ScrollView>

          <View style={styles(wp, hp).outercontainer}>
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
      </View>
    </ImageBackground>
  );
};
export default HomeScreen;

