import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground,
  TextInput
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './aiPeerChatStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AIPeerChatScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: "Hi there! I'm really glad you reached out. What's on your mind today?",
      timestamp: '10:33AM',
      showQuickReplies: true,
    },
    {
      id: 2,
      type: 'user',
      text: "I'm feeling overwhelmed",
      timestamp: '10:35AM',
      showQuickReplies: false,
    },
  ]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        text: message.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showQuickReplies: false,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleQuickReply = (replyText: string) => {
    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showQuickReplies: false,
    };
    setMessages([...messages, newMessage]);
  };

  const renderMessage = (msg: any) => (
    <View key={msg.id} style={msg.type === 'ai' ? styles.aiMessageContainer : styles.userMessageContainer}>
      {msg.type === 'ai' && (
        <Image 
          source={require('../../../assets/image/doc2.png')} 
          style={styles.aiProfileImage} 
        />
      )}
      <View style={msg.type === 'ai' ? styles.aiMessageRow : styles.userMessageRow}>
        {msg.type === 'ai' ? (
          <>
            <View style={styles.aiMessageBubble}>
              <Text style={styles.aiMessageText}>
                {msg.text}
              </Text>
            </View>
            <Text style={styles.aiTimestamp}>
              {msg.timestamp}
            </Text>
          </>
        ) : (
          <>
           {msg.showQuickReplies && (
        <View style={styles.quickRepliesContainer}>
          <TouchableOpacity 
            style={styles.quickReplyButton}
            onPress={() => handleQuickReply('Feeling overwhelmed')}
          >
            <Text style={styles.quickReplyText}>Feeling overwhelmed</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.quickReplyButton}
            onPress={() => handleQuickReply('Having relationship issues')}
          >
            <Text style={styles.quickReplyText}>Having relationship issues</Text>
          </TouchableOpacity>
        </View>
      )}
            <Text style={styles.userTimestamp}>
              {msg.timestamp}
            </Text>
            <View style={styles.userMessageBubble}>
              <Text style={styles.userMessageText}>
                {msg.text}
              </Text>
            </View>
          </>
        )}
        
      </View>
     
    </View>
  );

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackPress}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(9)}
              color="#000"
            />
          </TouchableOpacity>
          
          <View style={styles.headerCenter}>
            <Image 
              source={require('../../../assets/image/ai1.png')} 
              style={styles.headerProfileImage} 
            />
            <Text style={styles.headerTitle}>AI</Text>
          </View>
          
          <Image 
            source={require('../../../assets/image/aibot.png')} 
            style={styles.headerIcon} 
          />
        </View>

        {/* Chat Messages */}
        <ScrollView 
          style={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.messagesContent}
        >
          {messages.map(renderMessage)}
        </ScrollView>

        {/* Message Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type something..."
            placeholderTextColor="#9CA3AF"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity 
            style={styles.sendButton}
            onPress={handleSendMessage}
          >
           <Image source={require('../../../assets/icon/sendicon.png')} style={styles.sendButtonImage} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AIPeerChatScreen;
