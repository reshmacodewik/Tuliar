import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useResponsive } from '../Responsive/useResponsive';
import styles from '../style/homestyles';
import { apiDelete, apiPost, getApiWithOutQuery } from '../utils/api/common';
import {
  API_ADD_COMMENT,
  API_FEED_DELETE,
  API_FEED_LIST,
  API_FEED_TOGGLE_FAVORITE,
} from '../utils/api/APIConstant';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getSession } from '../storage/mmkvPersister';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ShowToast from '../utils/ShowToast';
import CommentSheet from './CommentSheet';
import { useQuery } from '@tanstack/react-query';
interface FeedPostProps {
  refreshKey?: number;
}
const FeedPost: React.FC<FeedPostProps> = ({ refreshKey }) => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const navigation = useNavigation<NavigationProp<any>>();
  const [feedPosts, setFeedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const commentSheetRef = useRef<InstanceType<any> | null>(null);

  const bumpCommentsCount = (postId: string, inc = 1) => {
    setFeedPosts(prev =>
      prev.map(p =>
        p._id === postId ? { ...p, comments: (p.comments ?? 0) + inc } : p,
      ),
    );
  };

  const openComments = (postId: string) => {
    setSelectedPostId(postId);
    setTimeout(() => commentSheetRef.current?.open(), 0);
  };

  const { data, refetch, isFetched, isLoading } = useQuery({
    queryKey: ['feed-list'],
    queryFn: () => getApiWithOutQuery({ url: API_FEED_LIST }),
  });

  const handleEdit = (id: string) => {
    navigation.navigate('MyFeedDetail', { id });
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await apiDelete({ url: API_FEED_DELETE(id) });

      if (res?.success) {
        setFeedPosts(prev => prev.filter(p => p._id !== id));
        refetch();
      }
    } catch (error) {
      console.error('Error deleting feed:', error);
    }
  };

  useEffect(() => {
    refetch();
  }, [refreshKey]);

  const toggleLike = async (post: any) => {
    const isLiked = !!post.isLike;
    const delta = isLiked ? -1 : 1;

    // optimistic update
    setFeedPosts(prev =>
      prev.map(p =>
        p._id === post._id
          ? {
              ...p,
              isFavorite: !isLiked,
              likes: Math.max(0, (p.likes ?? 0) + delta),
            }
          : p,
      ),
    );

    try {
      const res = await apiPost({
        url: API_FEED_TOGGLE_FAVORITE,
        values: { referenceId: post._id, type: !isLiked ? 1 : 0 },
      });

      if (!res?.success) {
        // rollback
        setFeedPosts(prev =>
          prev.map(p =>
            p._id === post._id
              ? {
                  ...p,
                  isFavorite: isLiked,
                  likes: Math.max(0, (p.likes ?? 0) - delta),
                }
              : p,
          ),
        );
        ShowToast(res?.message || 'Failed to update like', 'error');
      }
    } catch (e) {
      // rollback on error
      setFeedPosts(prev =>
        prev.map(p =>
          p._id === post._id
            ? {
                ...p,
                isFavorite: isLiked,
                likes: Math.max(0, (p.likes ?? 0) - delta),
              }
            : p,
        ),
      );
      ShowToast('Error updating like', 'error');
    }
  };

  return (
    <View>
      {Array.isArray(data?.data) &&
        data?.data?.map((post: any) => {
          const liked = !!post.isLike;
          return (
            <View key={post._id} style={s.feedCard}>
              {/* Header */}
              <View style={s.feedHeader}>
                <Image
                  source={require('../../src/Theme/assets/image/ellispe.png')}
                  style={s.feedAvatar}
                />

                {/* Username + menu aligned right */}
                <View
                  style={[
                    s.feedspace,
                    {
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                  ]}
                >
                  <Text style={s.feedUser}>
                    {post.author?.nickName || 'Unknown'}
                  </Text>

                  <Menu>
                    <MenuTrigger
                      customStyles={{
                        TriggerTouchableComponent: TouchableOpacity,
                        triggerWrapper: { padding: wp(1.5) },
                      }}
                      hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
                    >
                      <Ionicons
                        name="ellipsis-vertical"
                        size={wp(5)}
                        color="#555"
                      />
                    </MenuTrigger>

                    <MenuOptions
                      customStyles={{
                        optionsContainer: {
                          width: wp(32),
                          paddingVertical: 6,
                          borderRadius: 10,
                          marginTop: 6,
                        },
                        optionsWrapper: { paddingVertical: 2 },
                      }}
                    >
                      <MenuOption onSelect={() => handleEdit(post._id)}>
                        <Text
                          style={{ paddingVertical: 8, paddingHorizontal: 12 }}
                        >
                          Edit
                        </Text>
                      </MenuOption>
                      <MenuOption onSelect={() => handleDelete(post._id)}>
                        <Text
                          style={{
                            paddingVertical: 8,
                            paddingHorizontal: 12,
                            color: 'red',
                          }}
                        >
                          Delete
                        </Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                </View>
              </View>

              <Text style={s.feedText}>{post.content}</Text>
              <View style={s.feedStats}>
                <TouchableOpacity
                  style={s.statItem}
                  onPress={() => toggleLike(post)}
                >
                  <Ionicons
                    name={liked ? 'heart' : 'heart-outline'}
                    size={wp(5.2)}
                    color={liked ? '#E53935' : '#9e9e9e'}
                  />
                  <Text style={s.statText}>{post.likeCount ?? 0}</Text>
                </TouchableOpacity>

                <View style={s.statItem}>
                  <TouchableOpacity
                    style={s.statItem}
                    onPress={() => openComments(post._id)}
                  >
                    <Image
                      source={require('../../src/Theme/assets/image/feedchat.png')}
                      style={s.feedicon}
                    />
                    <Text style={s.statText}>{post.commentCount ?? 0}</Text>
                  </TouchableOpacity>
                </View>

                <View style={s.statItem}>
                  <Image
                    source={require('../../src/Theme/assets/image/send.png')}
                    style={s.feedicon}
                  />
                  <Text style={s.statText}>{post.shares ?? 0}</Text>
                </View>
              </View>
            </View>
          );
        })}
      {/* Comment Sheet */}
      {selectedPostId && (
        <CommentSheet
          onRefReady={ref => {
            commentSheetRef.current = ref?.current ?? null;
          }}
          postId={selectedPostId}
          onSuccess={refetch}
          onClosed={() => setSelectedPostId(null)}
        />
      )}
    </View>
  );
};

export default FeedPost;
