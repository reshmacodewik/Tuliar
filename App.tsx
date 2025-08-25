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
import { ThemeProvider, useAppTheme } from './src/Theme/ThemeContext';

const AppNavigation = () => {
  const { navigationTheme } = useAppTheme();
  return (
    <NavigationContainer theme={navigationTheme}>
      <MyStack />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
