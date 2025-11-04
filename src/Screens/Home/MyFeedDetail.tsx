import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from '../../style/FeedDetails';
import { useResponsive } from 'react-native-responsive-hook';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  useNavigation,
  useRoute,
  RouteProp,
  NavigationProp,
} from '@react-navigation/native';

import FeedPost from '../../components/FeedPost';
import {
  RichEditor,
  RichToolbar,
  actions,
} from 'react-native-pell-rich-editor';

import Feedpopup from '../../components/Feedpopup';
import ShowToast from '../../utils/ShowToast';
import { API_FEED_CREATE, API_FEED_LIST, API_FEED_UPDATE } from '../../utils/api/APIConstant';
import {
  apiPost,
  apiPATCH,
  getApiByParams,
  apiPUT,
} from '../../utils/api/common';
import { getSession } from '../../storage/mmkvPersister';
import { htmlToPlainText } from '../../components/htmlToPlainText';

type RootStackParamList = {
  MyFeedDetail: { id?: string };
};

const MyFeedDetail = () => {
  const [thought, setThought] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute<RouteProp<RootStackParamList, 'MyFeedDetail'>>();
  const editId = route.params?.id; // ✅ id if editing

  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);

  const richText = useRef<RichEditor>(null);

  // Prefill editor when editing
 useEffect(() => {
  if (editId) {
    const fetchFeedDetail = async () => {
      try {
        const res = await getApiByParams({
          url: API_FEED_LIST,
          params: editId,
        });

     
        if (res?.success && res?.data?.length > 0) {
         
          const content = res.data[0].content; 
          setThought(content); 
          richText.current?.setContentHTML(content); 
        }
      } catch (e) {
        console.error('Error loading feed:', e);
      }
    };
    fetchFeedDetail();
  }
}, [editId]);


  const handlePost = async () => {
    try {
      const session = getSession();
      const token = session?.accessToken;
      if (!token) return ShowToast('You must be logged in to post', 'error');

      const html = await richText.current?.getContentHtml?.();
      const plain = htmlToPlainText(html || thought);

      if (!plain) {
        return ShowToast('Please write something before posting', 'error');
      }

      let res;
      if (editId) {
        // Update
        res = await apiPUT({
          url: API_FEED_UPDATE,
          values: { id: editId, content: plain },
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Create
        res = await apiPost({
          url: API_FEED_CREATE,
          values: { content: plain },
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      if (res?.success) {
        ShowToast(res?.message || (editId ? 'Updated!' : 'Posted!'), 'success');
        if (!editId) {
          setThought(res.data.content);
          richText.current?.setContentHTML('');
       
        } else {
          navigation.goBack();
        }
        setRefreshKey(prev => prev + 1);
      } else {
        ShowToast(res?.message || 'Failed to save feed', 'error');
      }
    } catch (e: any) {
      console.error('Save failed:', e);
      ShowToast(e?.message || 'Something went wrong', 'error');
    }
  };
  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={s.bgimg}
    >
      <View style={s.container}>
        {/* Header */}
        <View style={s.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={s.backButton}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={wp(8)}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={s.title}>My Feed</Text>
        </View>

        {/* Rich Text Editor */}
        <View style={s.thoughtBoxcontainer}>
          <Text style={s.sharetitle}>
            {editId ? 'Edit your Post' : 'Share your Thoughts'}
          </Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: wp(3),
              backgroundColor: '#fff',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <ScrollView style={{ maxHeight: hp(40) }}>
              <RichEditor
                ref={richText}
                placeholder="Write something amazing..."
                onChange={html => setThought(html)}
                initialHeight={hp(12)}
                useContainer
              />
            </ScrollView>

            <RichToolbar
              editor={richText}
              actions={[
                actions.setBold,
                actions.setItalic,
                actions.setUnderline,
                actions.insertBulletsList,
                actions.insertOrderedList,
              ]}
              iconTint="#444"
              selectedIconTint="#007bff"
              style={{
                borderTopWidth: 1,
                borderTopColor: '#eee',
                backgroundColor: '#fafafa',
              }}
            />
          </View>

          {/* Post / Update button */}
          <TouchableOpacity style={s.button} onPress={handlePost}>
            <Text style={s.buttonText}>{editId ? 'Update' : 'Post'}</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Feed */}

        <Text style={s.subtitle}>Recent Feed</Text>
        <FeedPost refreshKey={refreshKey} />

        {/* Popup */}
        <Feedpopup
          visible={showPopup}
          onClose={() => {
            setShowPopup(false);
            setIsChecked(false);
          }}
          onAgree={() => setShowPopup(false)}
        />
      </View>
    </ImageBackground>
  );
};

export default MyFeedDetail;
