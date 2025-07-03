/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from '../style/search';

const recentSearches = [
  'Relationship Expert',
  'Therapy',
  'Dr.',
  'Mood',
  'Depression',
];

const experts = [
  {
    id: '1',
    name: 'John Smith',
    title: 'Clinical Psychologist',
    price: 'KSh 2,500',
    tags: ['Sleep', 'Anxiety'],
    selected: 24,
    image: require('../../assets/image/doc1.png'),
  },
  {
    id: '2',
    name: 'John Smith',
    title: 'Clinical Psychologist',
    price: 'KSh 2,500',
    tags: ['Relax', 'Anger'],
    selected: 24,
    image: require('../../assets/image/doc2.png'),
  },
];

const SearchScreen = () => {
  const { wp, hp } = useResponsive();

  return (
    <ImageBackground
      source={require('../../assets/image/background.png')}
      style={styles.bgimg}
    >
      <View style={[styles.container, { padding: wp(4) }]}>
        <View
          style={[
            styles.searchContainer,
            { padding: wp(1), borderRadius: wp(10), paddingHorizontal: wp(4) },
          ]}
        >
          <Image
            source={require('../../assets/icon/search.png')}
            style={{
              width: wp(5),
              height: wp(5),
              resizeMode: 'contain',
              paddingLeft: hp(2),
            }}
          />
          <TextInput
            placeholder="Search ..."
            placeholderTextColor="#999"
            style={[
              styles.searchInput,
              { fontSize: wp(4), paddingLeft: wp(2) },
            ]}
          />
          <Image
            source={require('../../assets/icon/mic.png')}
            style={{ width: wp(5), height: wp(5), resizeMode: 'contain' }}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Recent Search */}
          <Text
            style={[
              styles.sectionTitle,
              { fontSize: wp(4.5), marginTop: hp(2), marginBottom: hp(1) },
            ]}
          >
            Recent Search
          </Text>
          <View style={styles.recentSearchList}>
            {recentSearches.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.searchTag,
                  {
                    borderRadius: wp(10),
                    paddingHorizontal: wp(3.5),
                    paddingVertical: hp(0.8),
                    marginRight: wp(2),
                    marginBottom: hp(1),
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: wp(3.5),
                    color: '#979797',
                    fontFamily: 'Poppins-Regular',
                  }}
                >
                  {item}
                </Text>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/icon/x.png')}
                    style={{
                      width: wp(5),
                      height: wp(5),
                      marginLeft: wp(4),
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <Text
            style={[
              styles.sectionTitle,
              { fontSize: wp(4.2), marginVertical: hp(1) },
            ]}
          >
            Continue Booking for
          </Text>
          {experts.slice(0, 1).map(item => (
            <View
              key={item.id}
              style={[
                styles.expertCard,
                { borderRadius: wp(3), padding: wp(3), marginBottom: hp(2) },
              ]}
            >
              <Image
                source={item.image}
                style={[
                  styles.expertImage,
                  { width: wp(22), height: wp(25), borderRadius: wp(2) },
                ]}
              />
              <View style={styles.expertInfo}>
                <Text style={[styles.expertName, { fontSize: wp(4) }]}>
                  {item.name}
                </Text>
                <Text style={[styles.expertTitle, { fontSize: wp(3) }]}>
                  {item.title}
                </Text>

                <View style={styles.tagRow}>
                  {item.tags.map((tag, index) => (
                    <View
                      key={index}
                      style={[
                        styles.tag,
                        {
                          borderRadius: wp(3),
                          paddingHorizontal: wp(3),
                          paddingVertical: hp(0.5),
                        },
                      ]}
                    >
                      <Text style={{ fontSize: wp(3), color: '#000' }}>
                        {tag}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.iconRow}>
                <Image
                  source={require('../../assets/image/video.png')}
                  style={styles.icon}
                />
                <Image
                  source={require('../../assets/image/message.png')}
                  style={styles.icon}
                />
                <Image
                  source={require('../../assets/image/call.png')}
                  style={styles.icon}
                />
              </View>

              <Text style={[styles.priceText, { fontSize: wp(3.8) }]}>
                Starts at <Text style={styles.priceValue}>{item.price}</Text>
              </Text>

              <View
                style={[
                  styles.selectionBanner,
                  { borderRadius: wp(10), paddingVertical: hp(1) },
                ]}
              >
                <Text style={{ color: '#fff', fontSize: wp(3.2) }}>
                  {item.selected} people chose this expert in past month
                </Text>
              </View>
            </View>
          ))}

          {/* Recommended Therapist */}
          <Text
            style={[
              styles.sectionTitle,
              { fontSize: wp(4.2), marginVertical: hp(1), marginTop: wp(-2) },
            ]}
          >
            Recommended Therapist
          </Text>
          {experts.slice(1).map(item => (
            <View
              key={item.id}
              style={[
                styles.expertCard,
                { borderRadius: wp(3), padding: wp(3), marginBottom: hp(2) },
              ]}
            >
              <Image
                source={item.image}
                style={[
                  styles.expertImage,
                  { width: wp(22), height: wp(25), borderRadius: wp(2) },
                ]}
              />
              <View style={styles.expertInfo}>
                <Text style={[styles.expertName, { fontSize: wp(4) }]}>
                  {item.name}
                </Text>
                <Text style={[styles.expertTitle, { fontSize: wp(3) }]}>
                  {item.title}
                </Text>

                <View style={styles.tagRow}>
                  {item.tags.map((tag, index) => (
                    <View
                      key={index}
                      style={[
                        styles.tag,
                        {
                          borderRadius: wp(10),
                          paddingHorizontal: wp(3),
                          paddingVertical: hp(0.5),
                        },
                      ]}
                    >
                      <Text style={{ fontSize: wp(3), color: '#000' }}>
                        {tag}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.iconRow}>
                <Image
                  source={require('../../assets/image/video.png')}
                  style={styles.icon}
                />
                <Image
                  source={require('../../assets/image/message.png')}
                  style={styles.icon}
                />
                <Image
                  source={require('../../assets/image/call.png')}
                  style={styles.icon}
                />
              </View>

              <Text style={[styles.priceText, { fontSize: wp(3.8) }]}>
                Starts at <Text style={styles.priceValue}>{item.price}</Text>
              </Text>

              <View
                style={[
                  styles.selectionBanner,
                  { borderRadius: wp(10), paddingVertical: hp(1) },
                ]}
              >
                <Text style={{ color: '#fff', fontSize: wp(3.2) }}>
                  {item.selected} people chose this expert in past month
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SearchScreen;
