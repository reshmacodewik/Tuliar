
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/explore';
import { useWindowDimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Expert {
  id: string;
  name: string;
  profession: string;
  tags: string[];
  type: string;
  price: string;
  chosenBy: number;
  image: any;
}

const experts: Expert[] = [
  {
    id: '1',
    name: 'John Smith',
    profession: 'Clinical Psychologist',
    tags: ['Sleep', 'Anxiety'],
    type: 'Therapist',
    price: 'KSh 2,500',
    chosenBy: 24,
    image: require('../../src/Theme/assets/image/doc1.png'),
  },
  {
    id: '2',
    name: 'John Smith',
    profession: 'Clinical Psychologist',
    tags: ['Sleep', 'Anxiety'],
    type: 'Mentor',
    price: 'KSh 2,500',
    chosenBy: 24,
    image: require('../../src/Theme/assets/image/doc2.png'),
  },
  {
    id: '3',
    name: 'John Smith',
    profession: 'Clinical Psychologist',
    tags: ['Sleep', 'Anxiety'],
    type: 'Mentor',
    price: 'KSh 2,500',
    chosenBy: 24,
    image: require('../../src/Theme/assets/image/doc2.png'),
  },
];

const ExploreScreen = () => {
  const navigation = useNavigation();
  const { wp, hp } = useResponsiveScreen();

  const renderExpert = ({ item }: { item: Expert }) => (
    <TouchableOpacity
   
    // onPress={() => {
    //   navigation.navigate('DoctorProfileScreen', { expert: item });
    // }}

  >
    <View style={[styles(wp, hp).card, { backgroundColor: '#fff' }]}>
      <View style={styles(wp, hp).row}>
        <Image source={item.image} style={styles(wp, hp).avatar} />

        <View style={{ flex: 1, marginLeft: wp(2) }}>
          <View style={styles(wp, hp).nameRow}>
            <View>
              <Text style={styles(wp, hp).name}>{item.name}</Text>
              <Text style={styles(wp, hp).profession}>{item.profession}</Text>
            </View>

            <View
              style={[
                styles(wp, hp).typeBadge,
                {
                  backgroundColor:
                    item.type === 'Therapist' ? '#E6D8FF' : '#D8FFEE',
                },
              ]}
            >
              <Text style={styles(wp, hp).typeText}>{item.type}</Text>
            </View>
          </View>

          <View style={styles(wp, hp).tagRow}>
            <View style={styles(wp, hp).tagContainer}>
              {item.tags.map(tag => {
                let backgroundColor = '#E5E7EB'; // Default light gray

                if (tag.toLowerCase() === 'sleep') {
                  backgroundColor = '#D8FFEE'; // Green for Sleep
                } else if (tag.toLowerCase() === 'anxiety') {
                  backgroundColor = '#E6D8FF'; // Purple for Anxiety
                }

                return (
                  <View
                    key={tag}
                    style={[styles(wp, hp).tag, { backgroundColor }]}
                  >
                    <Text style={styles(wp, hp).tagText}>{tag}</Text>
                  </View>
                );
              })}
            </View>

            <View style={styles(wp, hp).iconRow}>
              <Image
                source={require('../../src/Theme/assets/image/users.png')}
                style={styles(wp, hp).icon}
              />
              <Image
                source={require('../../src/Theme/assets/image/video.png')}
                style={styles(wp, hp).icon}
              />
              <Image
                source={require('../../src/Theme/assets/image/message.png')}
                style={styles(wp, hp).icon}
              />
            </View>
          </View>
        </View>
      </View>

      <Text style={styles(wp, hp).priceText}>
        Starts at{' '}
        <Text
          style={{ color: '#000', fontFamily: 'Poppins-Bold', fontSize: wp(4) }}
        >
          {item.price}
        </Text>
      </Text>

      <View style={styles(wp, hp).bottomBar}>
        <Text style={styles(wp, hp).bottomBarText}>
          {item.chosenBy} people chose this expert in past month
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../src/Theme/assets/image/background.png')}
      style={styles(wp, hp).bgimg}
    >
      <View style={styles(wp, hp).container}>
        <View style={styles(wp, hp).header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8.5)}
              color="#000"
               style={{
              marginTop:wp(-1)
            }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap:wp(34)
            }}
          >
            <Text style={styles(wp, hp).headerTitle}>Search for Experts</Text>
            <Feather
              name="search"
              size={wp(5)}
              color="#000"
              style={{
              marginTop:wp(-1.2)
            }}
            />
          </View>
        </View>

        <View style={styles(wp, hp).filterRow}>
          {['Sleep', 'Anxiety', 'Depression'].map(filter => (
            <TouchableOpacity key={filter} style={styles(wp, hp).filterBtn}>
              <Text style={styles(wp, hp).filterText}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={experts}
          keyExtractor={item => item.id}
          renderItem={renderExpert}
          contentContainerStyle={{ paddingBottom: hp(5) }}
        />
      </View>
    </ImageBackground>
  );
};

export default ExploreScreen;
function useResponsiveScreen(): {
  wp: (percent: number) => number;
  hp: (percent: number) => number;
} {
  const { width, height } = useWindowDimensions();

  const wp = (percent: number) => (width * percent) / 100;
  const hp = (percent: number) => (height * percent) / 100;

  return { wp, hp };
}