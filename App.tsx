import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/Navigation/Mystack";
import { MenuProvider } from "react-native-popup-menu";
import { ThemeProvider, useAppTheme } from "./src/Theme/ThemeContext";
import QueryProvider from "./src/query/QueryProvider";
import Toast from "react-native-toast-message";

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
          <QueryProvider>
            <AppNavigation />
            <Toast />
          </QueryProvider>
        </ThemeProvider>
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
