// src/components/CustomHeader.tsx
import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface CustomHeaderProps {
  title: string;
  onBack?: () => void;   // Optional back action
  showBackButton?: boolean; // Toggle back button
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, onBack, showBackButton = true }) => {
  return (
 
      <View style={styles.headerContent}>
        {showBackButton && (
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
         <MaterialIcons
              name="keyboard-arrow-left"
              size={30}
              color="#000"
            />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

  );
};

const styles = StyleSheet.create({
  headerBackground: {
    height: 80,
    justifyContent: "flex-end",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  backButton: {
    paddingRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default CustomHeader;
