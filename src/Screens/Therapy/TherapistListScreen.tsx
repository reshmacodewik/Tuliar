import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SessionCard, { Session } from '../../components/SessionCard';
import { useResponsive } from 'react-native-responsive-hook';
import TherapyCard from '../../components/TherapyCard';

const SESSIONS: Session[] = [
  {
    id: '1',
    name: 'Rachel',
    avatar: require('../../Theme/assets/image/doc2.png'),
    date: '',
    issue: 'Anxiety',
    time: '',
    price: 'KES200',
    type: 'video',
    showNotes: false, // ❌ no notes
  },
  {
    id: '2',
    name: 'Jordan',
    avatar: require('../../Theme/assets/image/user2.png'),
    date: 'Wednesday, May 1',
    issue: 'Anxiety',
    time: '02:00 PM',
    price: 'KES200',
    type: 'chat',
    showNotes: true, // ✅ show notes
  },
];

const THERAPY_SESSIONS = [
  {
    id: '1',
    title: 'Therapy',
    subtitle: 'Next Session with Dr. on April 25 at 10:00 AM',
  },
  {
    id: '2',
    title: 'Therapy',
    subtitle: 'Next Session with Dr. on April 26 at 10:00 AM',
  },
];

const TherapistListScreen = ({ navigation }: any) => {
  const { top, bottom } = useSafeAreaInsets();
  const { wp, hp, rf } = useResponsive();
  const handleJoinNow = (sessionTime: string) => {
    const now = new Date();
    const sessionDate = new Date(sessionTime);

    const diffInMinutes = (sessionDate.getTime() - now.getTime()) / (1000 * 60);

    if (diffInMinutes <= 5) {
      navigation.navigate('SessionDetailScreen');
    } else {
      navigation.navigate('SessionBookedScreen');
    }
  };

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingTop: top, paddingBottom: bottom }}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: wp(4) }}
          showsVerticalScrollIndicator={false}
        >
          {/* header */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: hp(2),
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={rf(25)} color="#111" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#1F3827',
                paddingHorizontal: wp(4),
                paddingVertical: hp(0.8),
                borderRadius: wp(8),
                alignItems: 'center',
              }}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('TherapyScreen')}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  marginRight: 5,
                }}
              >
                <Ionicons name="add" size={rf(18)} color="#000" />
              </View>

              <Text
                style={{
                  color: '#fff',
                  marginLeft: wp(1),
                  fontWeight: '700',
                  fontFamily: 'Quicksand-Bold',
                }}
              >
                Find New Therapist
              </Text>
            </TouchableOpacity>
          </View>

          {/* title + subtitle */}
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              marginBottom: hp(1),
              textAlign: 'center',
              fontFamily: 'Quicksand-Bold',
            }}
          >
            Your Therapist & Therapy
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              marginBottom: hp(3),
              textAlign: 'center',
            }}
          >
            Your sessions are listed below.{'\n'}Manage, change, or cancel
            anytime.
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: '#1F3827',
              paddingHorizontal: wp(4),
              paddingVertical: hp(1.5),
              borderRadius: wp(1),
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: hp(2),
            }}
            activeOpacity={0.85}
          >
            <Text
              style={{
                color: '#fff',
                marginLeft: wp(1),
                fontWeight: '700',
                fontFamily: 'Quicksand-Bold',
                textAlign: 'center',
                fontSize: 15,
              }}
            >
              Your Therapy
            </Text>
          </TouchableOpacity>
          <FlatList
            data={THERAPY_SESSIONS}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TherapyCard
                title={item.title}
                subtitle={item.subtitle}
                onJoin={() => handleJoinNow('2025-04-25T14:00:00')}
                onReschedule={() => console.log('Reschedule', item.id)}
              />
            )}
            scrollEnabled={false}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#1F3827',
              paddingHorizontal: wp(4),
              paddingVertical: hp(1.5),
              borderRadius: wp(1),
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: hp(2),
            }}
            activeOpacity={0.85}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: '700',
                fontFamily: 'Quicksand-Bold',
                textAlign: 'center',
                fontSize: 15,
              }}
            >
              Your Therapist
            </Text>
          </TouchableOpacity>

          {/* list */}
          <FlatList
            data={SESSIONS}
            keyExtractor={it => it.id}
            renderItem={({ item }) => (
              <SessionCard
                item={item}
                onReschedule={() => console.log('Reschedule', item.id)}
                onCancel={() => console.log('Cancel', item.id)}
              />
            )}
            scrollEnabled={false}
            contentContainerStyle={{ paddingBottom: hp(4) }}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default TherapistListScreen;
