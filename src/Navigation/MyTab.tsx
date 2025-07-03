/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */


import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { useResponsive } from 'react-native-responsive-hook';
import HomeScreen from '../Screens/HomeScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import JournalScreen from '../Screens/JournalScreen';
import SearchScreen from '../Screens/SearchScreen';

const Tab = createBottomTabNavigator();


const BottomTabs = () => {
  const { wp, hp } = useResponsive();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          height: hp(8),
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={wp(6)} color={focused ? '#FFA726' : '#B0B0B0'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#FFA726' : '#B0B0B0' }]}>Home</Text>
          ),
        }}
      />
      <Tab.Screen
        name="JournalScreen"
       component={JournalScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="clock" size={wp(6)} color={focused ? '#FFA726' : '#B0B0B0'} />
            
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#FFA726' : '#B0B0B0' }]}>Journal</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Mood"
      component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View style={[styles.moodButton, { width: wp(15), height: wp(15), borderRadius: wp(7.5) }]}>
              <Icon name="plus" size={wp(7)} color="#fff" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="heart" size={wp(6)} color={focused ? '#FFA726' : '#B0B0B0'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#FFA726' : '#B0B0B0' }]}>Explore</Text>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="search" size={wp(6)} color={focused ? '#FFA726' : '#B0B0B0'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#FFA726' : '#B0B0B0' }]}>Search</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    marginTop: 2,
  },
  moodButton: {
    backgroundColor: '#264C3F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'android' ? 30 : 40,
    elevation: 5,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
