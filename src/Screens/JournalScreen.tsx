import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/journal';

const JournalScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation();
  const [journalText, setJournalText] = useState('');

  const recentActivities = [
    {
      id: '1',
      title: 'My Success',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ut sit quam curabitur feugiat nec nisi in. Sed vel ac magna a mi sed ut.',
      time: '30 min ago',
      icon: require('../../assets/icon/book.png'),
      bgColor: '#FFECC7',
    },
    {
      id: '2',
      title: 'My Success',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ut sit quam curabitur feugiat nec nisi in. Sed vel ac magna a mi sed ut.',
      time: '30 min ago',
      icon: require('../../assets/icon/book.png'),
      bgColor: '#E8DAF9',
    },
  ];

  return (
     <ImageBackground
      source={require('../../assets/image/background.png')}
      style={styles.bgimg}
    >
    <View style={styles.container}>

      <View style={[styles.header, { marginBottom: hp(3),marginLeft: hp(-1.1) }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={wp(8.5)}
            color="#000"
          />
        </TouchableOpacity>
        <Text
          style={[styles.headerTitle, { fontSize: wp(5), marginLeft: wp(3) }]}
        >
          My Journal
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={[
            styles.sectionTitle,
            { fontSize: wp(4.5), marginBottom: hp(1.5) },
          ]}
        >
          New Journal Entry
        </Text>

        <View
          style={[
            styles.entryCard,
            { borderRadius: wp(3), padding: wp(3), marginBottom: hp(3) },
          ]}
        >
          <TextInput
            placeholder="Write in your own Journal................................."
            placeholderTextColor="#999"
            value={journalText}
            onChangeText={setJournalText}
            multiline
            style={[styles.textInput, { height: hp(15), fontSize: wp(3.8) }]}
          />

          <TouchableOpacity
            style={[
              styles.addButton,
              {
                borderRadius: wp(10),
                paddingVertical: hp(1.8),
                paddingHorizontal: wp(5),
                marginTop: hp(2),
              },
            ]}
          >
            <Text style={[styles.addButtonText, { fontSize: wp(3.8),fontFamily:"Poppins-Medium" }]}>
              Add to My Journal
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.sectionTitle,
            { fontSize: wp(4.5), marginBottom: hp(2) },
          ]}
        >
          Recent Activities
        </Text>

        {recentActivities.map(item => (
          <View
            key={item.id}
            style={[
              styles.activityCard,
              { borderRadius: wp(3), padding: wp(3), marginBottom: hp(2) },
            ]}
          >
            <View
              style={[
                styles.iconWrapper,
                {
                  backgroundColor: item.bgColor,
                  borderRadius: wp(10),
                  padding: wp(3.5),
                  marginRight: wp(3),
                },
              ]}
            >
              <Image
                source={item.icon}
                style={{ width: wp(6.5), height: wp(6.5), resizeMode: 'contain' }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={[styles.activityTitle, { fontSize: wp(3.8) }]}>
                {item.title}{' '}
                <Text style={styles.activitySubtitle}>created in Journal</Text>
              </Text>
              <Text
                style={[
                  styles.activityDescription,
                  {
                    fontSize: wp(3.5),
                    marginTop: hp(0.5),
                    marginBottom: hp(1),
                  },
                ]}
              >
                {item.description}
              </Text>
              <Text style={[styles.activityTime, { fontSize: wp(3) }]}>
                {item.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    </ImageBackground>
  );
};
export default JournalScreen;
