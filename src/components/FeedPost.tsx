import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useResponsive } from '../Responsive/useResponsive';

interface FeedPostProps {
  post: {
    id: string;
    user: string;
    avatar: any;
    content: string;
    likes: string;
    comments: string;
    shares: string;
  };
  onLikePress?: () => void;
  onCommentPress?: () => void;
  onSharePress?: () => void;
}

const FeedPost: React.FC<FeedPostProps> = ({ 
  post, 
  onLikePress, 
  onCommentPress, 
  onSharePress 
}) => {
  const { wp, hp, fontSize, borderRadius } = useResponsive();

  const styles = StyleSheet.create({
    feedCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: borderRadius(12),
      padding: wp(4),
      marginBottom: hp(2),
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    feedHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    feedAvatar: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(5),
      marginRight: wp(3),
    },
    feedUser: {
      fontSize: fontSize(14),
      fontWeight: '600',
      color: '#000000',
    },
    feedText: {
      fontSize: fontSize(13),
      color: '#374151',
      lineHeight: fontSize(18),
      marginBottom: hp(2),
    },
    feedStats: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    statItem: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    feedicon: {
      width: wp(4),
      height: wp(4),
      marginRight: wp(1),
      tintColor: '#6B7280',
    },
    statText: {
      fontSize: fontSize(12),
      color: '#6B7280',
      fontWeight: '500',
    },
  });

  return (
    <View style={styles.feedCard}>
      <View style={styles.feedHeader}>
        <Image
          source={post.avatar}
          style={styles.feedAvatar}
        />
        <Text style={styles.feedUser}>{post.user}</Text>
      </View>
      
      <Text style={styles.feedText}>{post.content}</Text>
      
      <View style={styles.feedStats}>
        <TouchableOpacity 
          style={styles.statItem}
          onPress={onLikePress}
        >
          <Image
            source={require('../../assets/image/heart.png')}
            style={styles.feedicon}
          />
          <Text style={styles.statText}>{post.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.statItem}
          onPress={onCommentPress}
        >
          <Image
            source={require('../../assets/image/feedchat.png')}
            style={styles.feedicon}
          />
          <Text style={styles.statText}>{post.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.statItem}
          onPress={onSharePress}
        >
          <Image
            source={require('../../assets/image/send.png')}
            style={styles.feedicon}
          />
          <Text style={styles.statText}>{post.shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedPost; 