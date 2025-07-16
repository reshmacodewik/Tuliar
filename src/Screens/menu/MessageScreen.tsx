/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Icon from 'react-native-vector-icons/Ionicons';

const messages = [
  {
    id: '1',
    name: 'Dr. John Smith',
    message:
      'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent ne',
    time: '09:25 AM',
    unread: true,
  },
  {
    id: '2',
    name: 'Dr. John Smith',
    message:
      'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent ne',
    time: '09:25 AM',
    unread: false,
  },
  {
    id: '3',
    name: 'Dr. John Smith',
    message:
      'Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent ne',
    time: '09:25 AM',
    unread: true,
  },
];

const MessageScreen = () => {
  const { wp, hp } = useResponsive();
  const styles = getStyles(wp, hp);

  const renderMessage = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={require('../../../assets/image/ellispe.png')} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={[styles.message, item.unread && styles.boldText]} numberOfLines={2}>
            {item.message}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.time}>{item.time}</Text>
          {item.unread && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>1</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={styles.bgimg}
    >
      <View style={styles.container}>
        <View style={[styles.header]}>
          <TouchableOpacity>
            <Icon
              name="arrow-back"
              style={styles.tabIcon}
              color="#000"
            />
          </TouchableOpacity>
          <Text
            style={[styles.headerText, { fontSize: wp(5), marginLeft: wp(3) }]}
          >
            Messages
          </Text>
        </View>

        <View style={[styles.searchContainer, styles.searchContainer]}>
          <Icon name="search" style={styles.tabIcon} color="#FF914D" />
          <TextInput
            placeholder="Search ..."
            placeholderTextColor="#999"
            style={[
              styles.searchInput,
              { marginLeft: wp(2), fontSize: wp(3.8) },
            ]}
          />
        </View>

        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={renderMessage}
          contentContainerStyle={{
            paddingHorizontal: wp(4),
            paddingBottom: hp(12),
          }}
        />

        <View
          style={[
            styles.bottomTab,
            { height: hp(8), paddingHorizontal: wp(8) },
          ]}
        >
          <TouchableOpacity style={styles.tabButton}>
            <Icon name="home" style={styles.tabIcon} color="#FF914D" />
            <Text style={[styles.tabText, dynamicStyles.tabText]}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}>
            <Icon name="book" style={dynamicStyles.tabIcon} color="#aaa" />
            <Text style={[styles.tabText, dynamicStyles.tabText]}>Journal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.plusButton, dynamicStyles.plusButton]}
          >
            <Icon name="add" style={dynamicStyles.addIcon} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}>
            <Icon name="heart" style={dynamicStyles.tabIcon} color="#aaa" />
            <Text style={[styles.tabText, dynamicStyles.tabText]}>Explore</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}>
            <Icon name="search" style={dynamicStyles.tabIcon} color="#aaa" />
            <Text style={[styles.tabText, dynamicStyles.tabText]}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MessageScreen;

const getStyles = (wp: any, hp: any) =>
  StyleSheet.create({
    bgimg: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      padding: wp(4),
      marginTop: hp(2),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(2),
      marginBottom: hp(2),
    },
    backIcon: {
      fontSize: wp(6),
    },
    headerTitle: {
      fontSize: wp(4.8),
      fontFamily: 'Poppins-SemiBold',
    },
    searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: wp(25),
      paddingHorizontal: wp(3),
      marginBottom: hp(2),
    },
    searchIcon: {
      fontSize: wp(5),
    },
    searchInput: {
      flex: 1,
      fontSize: wp(3.8),
      marginLeft: wp(2),
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      marginBottom: hp(1.5),
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(6),
    },
    content: {
      flex: 1,
      marginLeft: wp(3),
    },
    name: {
      fontSize: wp(4),
      fontFamily: 'Poppins-Bold',
    },
    message: {
      fontSize: wp(3.5),
      marginTop: hp(0.5),
      color: '#555',
    },
    boldText: {
      fontWeight: 'bold',
      color: '#000',
    },
    rightSection: {
      alignItems: 'flex-end',
    },
    time: {
      fontSize: wp(3),
      color: '#555',
    },
    unreadBadge: {
      backgroundColor: '#184A45',
      width: wp(6),
      height: wp(6),
      borderRadius: wp(3),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp(1),
    },
    unreadText: {
      color: '#fff',
      fontSize: wp(3),
      fontFamily: 'Poppins-Bold',
    },
  bottomTab: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tabButton: {
    alignItems: 'center',
    marginBottom: 10,
  },
  tabText: {
    marginTop: 2,
  },
  plusButton: {
    backgroundColor: '#184A45',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
