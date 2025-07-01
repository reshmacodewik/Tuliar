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


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
