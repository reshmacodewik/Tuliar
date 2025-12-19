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
  TextInput,
  Modal,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './PeerChatStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PeerChat: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const [message, setMessage] = useState('');
  const [topUpVisible, setTopUpVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const [remainingMinutes, setRemainingMinutes] = useState<number>(0);
  // example: 15, 5, 0
  const TimeWarningBanner = ({ minutes }: { minutes: number }) => {
    if (minutes > 15 || minutes <= 0) return null;

    return (
      <View style={styles.timeWarningContainer}>
        <Text style={styles.timeWarningText}>
          You have {minutes} minutes left of the peer chat time of this month
        </Text>
      </View>
    );
  };
  const TopUpModal = () => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={topUpVisible}
      onRequestClose={() => setTopUpVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add more chat time</Text>
          <Text style={styles.modalSubtitle}>
            Choose how much time you’d like to add
          </Text>

          {/* Options */}
          {[
            { id: '30', label: '+30 minutes', price: '$2.99' },
            { id: '60', label: '+1 hour', price: '$4.99' },
            {
              id: 'monthly',
              label: 'Monthly peer chat pack',
              price: '$14.99',
              note: 'Automatically renew 1 hour each month\nYou can turn off anytime',
            },
          ].map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.planOption,
                selectedPlan === item.id && styles.planSelected,
              ]}
              onPress={() => setSelectedPlan(item.id)}
            >
              <View>
                <Text style={styles.planLabel}>{item.label}</Text>
                {item.note && (
                  <Text style={styles.planNote}>{item.note}</Text>
                )}
              </View>
              <Text style={styles.planPrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}

          {/* Pay Button */}
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay & Continue Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setTopUpVisible(false)}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

  const ChatPausedCard = () => {
    return (
      <View style={styles.chatPausedCard}>
        <Text style={styles.chatPausedTitle}>
          Your peer chat session is paused
        </Text>

        <Text style={styles.chatPausedSubtitle}>
          Your messages are saved and you can continue anytime
        </Text>

        <View style={styles.chatPausedActions}>
          <TouchableOpacity
            style={styles.topUpButton}
            onPress={() => setTopUpVisible(true)}
          >
            <Text style={styles.topUpButtonText}>Top up & Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.urgentHelpBox}>
          <Text style={styles.urgentTitle}>Need Urgent Help?</Text>
          <Text style={styles.urgentSubtitle}>
            If you feel in danger of self-harm or unsafe, request approval to
            continue
          </Text>

          <TouchableOpacity style={styles.requestApprovalButton}>
            <Text style={styles.requestApprovalText}>Request Approval</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
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
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      showQuickReplies: false,
    };
    setMessages([...messages, newMessage]);
  };

  const renderMessage = (msg: any) => (
    <View
      key={msg.id}
      style={
        msg.type === 'ai'
          ? styles.aiMessageContainer
          : styles.userMessageContainer
      }
    >
      {msg.type === 'ai' && (
        <Image
          source={require('../../Theme/assets/image/doc2.png')}
          style={styles.aiProfileImage}
        />
      )}
      <View
        style={msg.type === 'ai' ? styles.aiMessageRow : styles.userMessageRow}
      >
        {msg.type === 'ai' ? (
          <>
            <View style={styles.aiMessageBubble}>
              <Text style={styles.aiMessageText}>{msg.text}</Text>
            </View>
            <Text style={styles.aiTimestamp}>{msg.timestamp}</Text>
          </>
        ) : (
          <>
            <Text style={styles.userTimestamp}>{msg.timestamp}</Text>
            <View style={styles.userMessageBubble}>
              <Text style={styles.userMessageText}>{msg.text}</Text>
            </View>
          </>
        )}
      </View>

      {/* {msg.showQuickReplies && (
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
      )} */}
    </View>
  );

return (
  <View style={{ flex: 1 }}>
    {/* BACKGROUND CONTENT */}
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(9)}
              color="#000"
            />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Image
              source={require('../../Theme/assets/image/doc2.png')}
              style={styles.headerProfileImage}
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerTitle}>Stacy</Text>
              <Text style={styles.headerSubtitle}>
                {remainingMinutes > 0
                  ? `Time remaining this month: ${remainingMinutes} min`
                  : 'No time remaining this month'}
              </Text>
            </View>
          </View>
        </View>

        {/* Messages */}
        <ScrollView
          style={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.messagesContent}
        >
          {messages.map(renderMessage)}
          {remainingMinutes === 0 && <ChatPausedCard />}
        </ScrollView>

        {/* Input */}
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
            <Image
              source={require('../../Theme/assets/icon/sendicon.png')}
              style={styles.sendButtonImage}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>

    {/* ✅ MODAL — MUST BE HERE */}
    <Modal
      transparent
      visible={topUpVisible}
      animationType="fade"
      onRequestClose={() => setTopUpVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add more chat time</Text>
          <Text style={styles.modalSubtitle}>
            Choose how much time you’d like to add
          </Text>

          {[
            { id: '30', label: '+30 minutes', price: '$2.99' },
            { id: '60', label: '+1 hour', price: '$4.99' },
            {
              id: 'monthly',
              label: 'Monthly peer chat pack',
              price: '$14.99',
              note: 'Automatically renew 1 hour each month\nYou can turn off anytime',
            },
          ].map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.planOption,
                selectedPlan === item.id && styles.planSelected,
              ]}
              onPress={() => setSelectedPlan(item.id)}
            >
              <View>
                <Text style={styles.planLabel}>{item.label}</Text>
                {item.note && (
                  <Text style={styles.planNote}>{item.note}</Text>
                )}
              </View>
              <Text style={styles.planPrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay & Continue Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setTopUpVisible(false)}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>
);

};

export default PeerChat;
