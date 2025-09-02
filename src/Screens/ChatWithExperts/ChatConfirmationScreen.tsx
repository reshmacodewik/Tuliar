import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StatusBar, ImageBackground } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './chatConfirmationStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChatConfirmationScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleStartChat = () => {
   navigation.navigate('PeerChat');
  };

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')} // Use your background image
      style={{ flex: 1 }}
      resizeMode="cover"
    >
    <SafeAreaView style={styles.container}>
     
    <TouchableOpacity
          style={[styles.backButton, { top: hp(0), left: wp(2) }]}
          onPress={handleBackPress}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={wp(8.5)}
            color="#000"
          />
        </TouchableOpacity>
   

 

      {/* Logo */}
      <View style={styles.logoContainer}>
       <Image source={require('../../Theme/assets/image/logo.png')} style={styles.logoImage} />
      </View>

      {/* Confirmation Message */}
      <View style={styles.confirmationContainer}>
        <Text style={styles.confirmationTitle}>You're all set!</Text>
        <Text style={styles.confirmationSubtitle}>You will be chatting with Ethan</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileContainer}>
        <Image 
          source={require('../../Theme/assets/image/doc2.png')} 
          style={styles.profileImage}
        />
      </View>

      {/* Start Chat Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startChatButton} onPress={handleStartChat}>
          <Text style={styles.startChatButtonText}>Start Chat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default ChatConfirmationScreen;