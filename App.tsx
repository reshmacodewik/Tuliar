import 'react-native-gesture-handler';
import React, { JSX } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
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
function ToastWithInsets() {
  const insets = useSafeAreaInsets();
  return <Toast topOffset={insets.top + 8} />;
}

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <SafeAreaProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            translucent
            backgroundColor="transparent"
          />
          <MenuProvider>
            <QueryProvider>
              <AuthProvider>
                <AppNavigation />
                <Toast />
              </AuthProvider>
            </QueryProvider>
          </MenuProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
