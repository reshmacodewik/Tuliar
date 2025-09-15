import 'react-native-gesture-handler';
import React, { JSX } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import Toast from 'react-native-toast-message';
import QueryProvider from './src/query/QueryProvider';
import MyStack from './src/Navigation/Mystack';
import { ThemeProvider, useAppTheme } from './src/Theme/ThemeContext';
import { navigationRef } from './src/Navigation/RootNavigation';
import { AuthProvider } from './src/Screens/Auth/AuthContext';

function AppNavigation(): JSX.Element {
  const { navigationTheme } = useAppTheme();

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <MyStack />
    </NavigationContainer>
  );
}

export default function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <MenuProvider>
          <ThemeProvider>
            <QueryProvider>
            <AuthProvider>
              <AppNavigation />
              <Toast />
            </AuthProvider>
            </QueryProvider>
          </ThemeProvider>
        </MenuProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
