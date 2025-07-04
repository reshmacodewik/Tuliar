/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/Navigation/Mystack';
import { MenuProvider } from 'react-native-popup-menu';

const App = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
