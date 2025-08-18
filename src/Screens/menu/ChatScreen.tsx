import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from './chatStyles';

const ChatScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'doctor',
      text: "Hi there! I'm really glad you reached out. What's on your mind today?",
      time: '10:33AM',
    },
    {
      id: 2,
      sender: 'user',
      text: "I'm feeling overwhelmed",
      time: '10:35AM',
    },
    {
      id: 3,
      sender: 'doctor',
      text: "Hi there! I'm really glad you reached out. What's on your mind today?",
      time: '10:33AM',
    },
  ]);
  const [showOptions, setShowOptions] = useState(true);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), sender: 'user', text: input, time: '10:36AM' },
      ]);
      setInput('');
      setShowOptions(false);
    }
  };

  const handleOption = (option: string) => {
    setMessages([
      ...messages,
      { id: Date.now(), sender: 'user', text: option, time: '10:35AM' },
    ]);
    setShowOptions(false);
  };

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={themedStyles.bgimg}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={hp(2)}
      >
        {/* Header */}
        <View style={themedStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <Image
            source={require('../../../assets/image/ellispe.png')}
            style={themedStyles.avatar}
          />
          <Text style={themedStyles.headerTitle}>Dr. John Smith</Text>
        </View>

        {/* Chat Messages */}
        <ScrollView
          style={themedStyles.scroll}
          contentContainerStyle={themedStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map(msg =>
            msg.sender === 'doctor' ? (
              <View key={msg.id} style={themedStyles.doctorRow}>
                <Image
                  source={require('../../../assets/image/ellispe.png')}
                  style={themedStyles.doctorAvatar}
                />
               
                 <View style={themedStyles.bubbleRow}>
                  <View style={themedStyles.doctorBubble}>
                    <Text style={themedStyles.bubbleText}>{msg.text}</Text>
                  </View>
                  <Text style={themedStyles.bubbleTime}>{msg.time}</Text>
                </View>
              </View>
            ) : (
              <View key={msg.id} style={themedStyles.userRow}>
                <View style={themedStyles.bubbleRow}>
                      <Text style={themedStyles.bubbleTime}>{msg.time}</Text>
                  <View style={themedStyles.userBubble}>
                    <Text style={themedStyles.userBubbleText}>{msg.text}</Text>
                  </View>
                
                </View>
              </View>
            ),
          )}

          {/* Options */}
          {showOptions && (
            <View style={themedStyles.optionRow}>
              <TouchableOpacity
                onPress={() => handleOption('Feeling overwhelmed')}
                style={themedStyles.optionBtn}
              >
                <Text style={themedStyles.optionText}>Feeling overwhelmed</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleOption('Having relationship issues')}
                style={[themedStyles.optionBtn, { marginRight: 0 }]}
              >
                <Text style={themedStyles.optionText}>
                  Having relationship issues
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>

        {/* Input Bar */}
        <View style={themedStyles.inputBar}>
          <View style={themedStyles.inputContainer}>
            <TextInput
              style={themedStyles.input}
              placeholder="Type something..."
              placeholderTextColor="#9CA3AF"
              value={input}
              onChangeText={setInput}
              onFocus={() => setShowOptions(false)}
            />
          </View>
          <TouchableOpacity onPress={handleSend} disabled={!input.trim()}>
            <Image
              source={require('../../../assets/icon/sendicon.png')}
              style={themedStyles.sendButtonImage}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ChatScreen;
