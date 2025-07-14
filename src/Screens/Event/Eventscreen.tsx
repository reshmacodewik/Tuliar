/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../../style/eventstyle';

const EventScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);

  const eventData = [
    { id: 1, premium: true },
    { id: 2, premium: false },
    { id: 3, premium: false },
    { id: 4, premium: true },
  ];

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={themedStyles.bgimg}
    >
      <View style={themedStyles.container}>
        <View >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={themedStyles.backButton}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8.5)}
              color="#000"
            />
          </TouchableOpacity>
          <Text
            style={[themedStyles.title, { fontSize: wp(5), marginLeft: wp(0) }]}
          >
            Events
          </Text>
        </View>

        {/* Events List */}
        <ScrollView contentContainerStyle={{ paddingBottom: hp(5) }}>
          {eventData.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('EventDetailsScreen')}
              activeOpacity={0.8}
              style={[themedStyles.eventCard, { marginTop: hp(2) }]}
            >
              <Image
                source={
                  item.premium
                    ? require('../../../assets/image/events.png') // Image for premium
                    : require('../../../assets/image/eventuser2.png') // Image for free
                }
                style={themedStyles.eventImg}
              />
              <View style={themedStyles.eventContent}>
                <View style={themedStyles.tagsRow}>
                  <View style={themedStyles.fromTag}>
                    <Text style={themedStyles.tagText}>From Tuliar</Text>
                  </View>
                  <View style={[themedStyles.typeTag]}>
                    <Image
                      source={
                        item.premium
                          ? require('../../../assets/icon/badge.png')
                          : require('../../../assets/icon/free.png')
                      }
                      style={{ width: wp(5), height: wp(5) }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <Text style={[themedStyles.eventTitle, { marginTop: hp(1) }]}>
                  Upcoming Wellness & Mental health workshop
                </Text>

                <Text
                  style={[
                    themedStyles.eventDesc,
                    { marginTop: hp(-0.8), fontSize: wp(3) },
                  ]}
                  numberOfLines={3}
                >
                  Lorem ipsum dolor sit amet consectetur. Molestie purus eu
                  volutpat praesent nec quam et hac. Duis et turpis nisl arcu
                  amet parturient sodales lorem nunc.
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default EventScreen;
