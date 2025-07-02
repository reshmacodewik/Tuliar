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

const features = [
  { label: 'Chat with your expects', icon: require('../../assets/image/message.png') },
  { label: 'Group Sessions', icon: require('../../assets/image/users.png') },
  { label: 'Coaching', icon: require('../../assets/image/video.png') },
  { label: 'Therapy', icon: require('../../assets/image/feather.png') },
];

const sessions = [
  {
    id: '1',
    title: 'Therapy',
    time: 'Next Session with Dr. on April 25 at 10:00 AM',
    image: require('../../assets/image/image.png'),
  },
  {
    id: '2',
    title: 'Therapy',
    time: 'Next Session with Dr. on April 25 at 10:00 AM',
    image: require('../../assets/image/image.png'),
  },
];

const events = [
  {
    id: '1',
    title: 'Upcoming Wellness & Mental heath workshop',
    desc: 'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent nec quam et hac...',
    image: require('../../assets/image/events.png'),
  },
  {
    id: '2',
    title: 'Upcoming Wellness & Mental heath workshop',
    desc: 'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent nec quam et hac...',
    image: require('../../assets/image/events.png'),
  },
];

const feedPosts = [
  {
    id: '1',
    user: 'Acnxk ojkb lc',
    avatar: require('../../assets/image/ellispe.png'),
    content: 'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent nec quam et hac. Duis et turpis nisl arcu amet parturient sodales lorem nunc.',
    likes: '20k',
    comments: '10k',
    shares: '5k',
  },
   {
    id: '2',
    user: 'Acnxk ojkb lc',
    avatar: require('../../assets/image/ellispe.png'),
    content: 'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent nec quam et hac. Duis et turpis nisl arcu amet parturient sodales lorem nunc.',
    likes: '20k',
    comments: '10k',
    shares: '5k',
  },
];

const HomeScreen = () => {
  const { wp, hp } = useResponsive();

  return (
      <ImageBackground
          source={require('../../assets/image/background.png')}
          style={styles(wp, hp).bgimg}
        >
      <ScrollView contentContainerStyle={styles(wp, hp).container}>
      
        <View style={styles(wp, hp).header}>
          <Image source={require('../../assets/image/logo1.png')} style={styles(wp, hp).logo} />
         
          <View style={styles(wp, hp).rightHeader}>
            <TouchableOpacity>
              <Image source={require('../../assets/icon/bell.png')} style={styles(wp, hp).icon} />
            </TouchableOpacity>
            <Image source={require('../../assets/image/homeuser.png')} style={styles(wp, hp).avatar} />
          </View>
        </View>
        <View style={styles(wp, hp).featureRow}>
          {features.map((item, index) => (
            <TouchableOpacity key={index} style={styles(wp, hp).featureButton}>
              <Image source={item.icon} style={styles(wp, hp).featureIcon} />
              <Text style={styles(wp, hp).featureText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles(wp, hp).sectionTitle}>My Journey</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {sessions.map(session => (
            <View key={session.id} style={styles(wp, hp).sessionCard}>
              <Image source={session.image} style={styles(wp, hp).sessionImage} />
              <Text style={styles(wp, hp).sessionTitle}>{session.title}</Text>
              <Text style={styles(wp, hp).sessionTime}>{session.time}</Text>
              <TouchableOpacity style={styles(wp, hp).sessionButton}>
                <Text style={styles(wp, hp).buttonText}>See Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <Text style={styles(wp, hp).sectionTitle}>Events</Text>
        {events.map(event => (
          <View key={event.id} style={styles(wp, hp).eventCard}>
            <Image source={event.image} style={styles(wp, hp).eventImage} />
            <View style={styles(wp, hp).eventContent}>
              <View style={styles(wp, hp).eventTag}>
                <Text style={styles(wp, hp).eventTagText}>From Tuliar</Text>
              </View>
              <Text style={styles(wp, hp).eventTitle}>{event.title}</Text>
              <Text style={styles(wp, hp).eventDesc}>{event.desc}</Text>
            </View>
          </View>
        ))}

        <Text style={styles(wp, hp).sectionTitle}>User Feed</Text>
        {feedPosts.map(post => (
          <View key={post.id} style={styles(wp, hp).feedCard}>
            <View style={styles(wp, hp).feedHeader}>
              <Image source={post.avatar} style={styles(wp, hp).feedAvatar} />
              <Text style={styles(wp, hp).feedUser}>{post.user}</Text>
            </View>
            <Text style={styles(wp, hp).feedText}>{post.content}</Text>
            <View style={styles(wp, hp).feedStats}>
              <Text>❤️ {post.likes}</Text>
              <Text>💬 {post.comments}</Text>
              <Text>🔁 {post.shares}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
