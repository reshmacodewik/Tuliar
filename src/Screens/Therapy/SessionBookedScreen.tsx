import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useResponsive } from 'react-native-responsive-hook';
import styles from '../../style/SessionBookedStyles';

const SessionBookedScreen = ({ navigation }: any) => {
  const { top } = useSafeAreaInsets();
  const { wp, hp, rf } = useResponsive();
  const s = styles(wp, hp, rf);

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={s.container}
    >
      <View style={[s.safeArea, { paddingTop: top }]}>
        {/* Back */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={rf(24)} color="#000" />
        </TouchableOpacity>
        <View style={s.logoContainer}>
          <Image
            source={require('../../Theme/assets/image/logo.png')}
            style={s.logo}
          />
        </View>

        <Text style={s.title}>Your Session Is{'\n'}Booked!</Text>

        {/* Subtitle */}
        <Text style={s.subtitle}>
          You have an upcoming therapy session on April 24 at 10:00 AM.
        </Text>

        {/* Therapist Card */}
        <View style={s.card}>
          <Image
            source={require('../../Theme/assets/image/maskuser.png')}
            style={s.avatar}
          />
          <View>
            <Text style={s.name}>Dr. Laurn Miller</Text>
            <Text style={s.role}>Therapy</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F8FCFD',
        marginTop: hp(10),
        }}
      >
        <View style={s.chatBubble}>
          <Text style={s.chatText}>
            Hi there! I’m really glad you reached out.
            {'\n'}What’s on your mind today?
          </Text>
        </View>

        <Text style={s.timeText}>10:33 AM</Text>

        {/* Input */}
        <View style={s.inputRow}>
          <TextInput
            placeholder="Type something..."
            placeholderTextColor="#A0A3BD"
            style={s.input}
          />
          <TouchableOpacity style={s.sendBtn}>
            <Ionicons name="send" size={rf(18)} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SessionBookedScreen;
