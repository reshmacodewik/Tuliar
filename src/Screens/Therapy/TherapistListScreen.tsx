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

const SESSIONS: Session[] = [
  {
    id: '1',
    name: 'Stacy',
    avatar: 'https://i.pravatar.cc/160?img=16',
    date: 'Tuesday, April 30',
    issue: 'Anxiety',
    time: '10:00 AM',
    price: 'KES200',
    type: 'chat',
  },
  {
    id: '2',
    name: 'Stacy',
    avatar: 'https://i.pravatar.cc/160?img=16',
    date: 'Tuesday, April 30',
    issue: 'Anxiety',
    time: '10:00 AM',
    price: 'KES200',
    type: 'chat',
  },
];

const TherapistListScreen = ({ navigation }: any) => {
  const { top, bottom } = useSafeAreaInsets();
  const { wp, hp, rf } = useResponsive();

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingTop: top, paddingBottom: bottom }}>
        <ScrollView
          contentContainerStyle={{ padding: wp(4) }}
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
              onPress={() => navigation?.goBack?.()}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={rf(20)} color="#111" />
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
              onPress={()=> navigation.navigate('TherapyScreen')}
            >
              <View style={{backgroundColor:'#fff',borderRadius:20,marginRight:5}}>
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
              fontSize: 28,
              fontWeight: '600',
              marginBottom: hp(1),
              textAlign: 'center',
              fontFamily: 'Quicksand-Regular',
            }}
          >
            Your Therapist
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
