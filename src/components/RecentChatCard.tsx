import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

type Props = {
  name: string;
  status: 'now' | 'later';
  lastChatted: string;
  message: string;
  image: any;
  onPress: () => void;
};

const RecentChatCard: React.FC<Props> = ({
  name,
  status,
  lastChatted,
  message,
  image,
  onPress,
}) => {
  const { wp, hp, rf } = useResponsive();

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={image} style={styles.avatar} />
    
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>

          <View style={styles.statusRow}>
            <View
              style={[
                styles.dot,
                { backgroundColor: status === 'now' ? '#1F3827' : '#F59E0B' },
              ]}
            />
            <Text style={styles.statusText}>
              {status === 'now'
                ? 'Available now'
                : 'Available later today'}
            </Text>
          </View>

          
        </View>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Continue Chat</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.lastChat}>Last chatted: {lastChatted}</Text>
          <Text style={styles.message} numberOfLines={2}>
            {message}
          </Text>
    </View>
  );
};

export default RecentChatCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    marginHorizontal: 15,        
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontFamily: 'Quicksand-Bold',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 10,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#374151',
  },
  lastChat: {
    fontSize: 12,
    color: '#000',
    marginTop: 2,
  },
  message: {
    fontSize: 13,
    color: '#111827',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#1F3827',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Quicksand-Bold',
  },
});
