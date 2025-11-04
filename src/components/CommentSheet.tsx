// CommentSheet.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ListRenderItem,
  Image,
} from 'react-native';
import moment from 'moment';
import RBSheet from 'react-native-raw-bottom-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwipeableFlatList from 'react-native-swipeable-list';
import { useQuery } from '@tanstack/react-query';
import { apiDelete, apiPost, getApiWithOutQuery } from '../utils/api/common';
import {
  API_ADD_COMMENT,
  API_COMMENT_DELETE,
  API_COMMENT_LIST,
} from '../utils/api/APIConstant';

type Comment = {
  _id: string;
  userId?: { nickName?: string; avatarUrl?: string };
  comment: string;
  createdAt?: string;
};

type CommentSheetProps = {
  onRefReady?: (ref: React.RefObject<any>) => void;
  postId?: string | null;
  visible?: boolean;
  onClosed?: () => void;
  onSuccess?: () => void;
  createApi?: (postId: string, comment: string) => Promise<Comment>;
  deleteApi?: (
    postId: string,
    commentId: string,
  ) => Promise<{ success?: boolean } | void>;
};

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const SHEET_HEIGHT = Math.round(SCREEN_HEIGHT * 0.65);

const RowInner = ({ c }: { c: Comment }) => (
  <View style={{ paddingVertical: 12, flexDirection: 'row' }}>
      <Image
      source={require('../../src/Theme/assets/image/ellispe.png')} // replace with your static image path
      style={{
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
      }}
    />
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontWeight: '700' }}>
          {c.userId?.nickName || 'User'}
        </Text>
        {!!c.createdAt && (
          <Text style={{ marginTop: 6, fontSize: 12, color: '#8e8e8e' }}>
            {moment(c.createdAt).fromNow()}
          </Text>
        )}
      </View>
      <Text style={{ marginTop: 4, lineHeight: 20 }}>{c.comment}</Text>
    </View>
  </View>
);

const CommentSheet: React.FC<CommentSheetProps> = ({
  onRefReady,
  postId,
  onClosed,
  createApi,
  deleteApi,
  onSuccess,
}) => {
  const bsRef = useRef<InstanceType<any> | null>(null);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);

  // expose ref
  useEffect(() => {
    onRefReady?.(bsRef as unknown as React.RefObject<any>);
  }, [onRefReady]);

  // -------- GET with useQuery --------
  // const { data: comments = [], isLoading, refetch, isFetched } = useQuery({
  //     queryKey: ['comment-list',postId],
  //     queryFn: () => getApiWithOutQuery({ url: API_GET_COMMENT(postId as string)}),
  //   });
  const {
    data: comment,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['comment-list', postId],
    enabled: !!postId,
    queryFn: () => getApiWithOutQuery({ url: API_COMMENT_LIST + '/' + postId }),
  });

  const defaultDeleteApi = async () => {
    return apiDelete({
      url: API_COMMENT_DELETE,
    });
  };
  const _deleteApi = deleteApi ?? defaultDeleteApi;

  const confirmAndDelete = (c: Comment) => {
    Alert.alert('Delete comment?', 'This action cannot be undone.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          if (!postId) return;
          try {
            await _deleteApi(postId, c._id);
          } finally {
            refetch(); // refresh from server
          }
        },
      },
    ]);
  };
  const renderItem: ListRenderItem<Comment> = ({ item }) => (
    <RowInner c={item} />
  );
  // const renderQuickActions = ({ item }: { item: Comment }) => (
  //   <View
  //     style={{
  //       flex: 1,
  //       alignItems: 'flex-end',
  //       justifyContent: 'center',
  //       paddingRight: 12,
  //     }}
  //   >
  //     <TouchableOpacity
  //       onPress={() => confirmAndDelete(item)}
  //       activeOpacity={0.85}
  //       style={{
  //         width: 84,
  //         height: 44,
  //         borderRadius: 12,
  //         backgroundColor: '#E53935',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }}
  //     >
  //       <Ionicons name="trash" size={20} color="#fff" />
  //       <Text style={{ color: '#fff', fontSize: 12, marginTop: 2 }}>
  //         Delete
  //       </Text>
  //     </TouchableOpacity>
  //   </View>
  // );

  const sendComment = async () => {
    if (!postId || !input.trim() || sending) return;
    const text = input.trim();
    setSending(true);
    setInput('');
    try {
      const get = await apiPost({
        url: API_ADD_COMMENT,
        values: { referenceId: postId, comment: text },
      });
      if (get?.success) {
        onSuccess?.();
        onClosed?.();
      }
    } finally {
      setSending(false);
      refetch();
    }
  };

  return (
    <RBSheet
      ref={bsRef}
      height={SHEET_HEIGHT}
      openDuration={240}
      closeDuration={200}
      draggable
      dragOnContent
      closeOnPressMask
      customStyles={{
        wrapper: { backgroundColor: 'rgba(0,0,0,0.35)' },
        draggableIcon: { backgroundColor: '#bbb' },
        container: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          paddingHorizontal: 0,
        },
      }}
      customModalProps={{ animationType: 'slide', statusBarTranslucent: true }}
      customAvoidingViewProps={{
        enabled: Platform.OS === 'ios',
        keyboardVerticalOffset: Platform.OS === 'ios' ? 12 : 0,
      }}
      onClose={onClosed}
    >
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingTop: 8,
            paddingBottom: 6,
          }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: '700', textAlign: 'center' }}
          >
            Comments
          </Text>
        </View>

        {/* List */}
        {isLoading ? (
          <View style={{ padding: 16 }}>
            <ActivityIndicator />
          </View>
        ) : (
          <SwipeableFlatList
            data={comment?.data}
            keyExtractor={(item: Comment) => item._id}
            renderItem={renderItem}
            shouldBounceOnMount={true}
            maxSwipeDistance={80}
            onSwipeValueChange={({
              key,
              value,
            }: {
              key: string;
              value: number;
            }) => {
              if (Math.abs(value) > 80) {
                const commentItem = comment?.data.find(
                  (c: Comment) => c._id === key,
                );
                if (commentItem) {
                  confirmAndDelete(commentItem);
                }
              }
            }}
            ListEmptyComponent={
              <View style={{ padding: 16 }}>
                <Text style={{ color: '#8e8e8e' }}>No comments yet.</Text>
              </View>
            }
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }}
          />
        )}

        {/* Input */}
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderTopWidth: 1,
            borderTopColor: '#eee',
            backgroundColor: '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 24,
              paddingHorizontal: 14,
              paddingVertical: Platform.OS === 'ios' ? 10 : 6,
            }}
          >
            <TextInput
              placeholder="Add a comment..."
              value={input}
              onChangeText={setInput}
              multiline
              style={{ maxHeight: 90 }}
              returnKeyType="send"
              onSubmitEditing={sendComment}
              blurOnSubmit={false}
            />
          </View>

          <TouchableOpacity
            onPress={sendComment}
            disabled={sending || !input.trim()}
          >
            {sending ? (
              <ActivityIndicator />
            ) : (
              <Ionicons
                name="send"
                size={22}
                color={!input.trim() ? '#999' : '#111'}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </RBSheet>
  );
};

export default CommentSheet;
