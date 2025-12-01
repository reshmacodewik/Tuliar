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
import Feedpopup from '../../components/Feedpopup';
import ShowToast from '../../utils/ShowToast';
import {
  API_FEED_CREATE,
  API_FEED_DETAIL_BY_ID,
  API_FEED_UPDATE,
} from '../../utils/api/APIConstant';
import { apiPost, getApiByParams, apiPUT } from '../../utils/api/common';
import { htmlToPlainText } from '../../components/htmlToPlainText';
import CommonTextEditor from '../../components/CommonTextEditor';
import { RichEditor } from 'react-native-pell-rich-editor';

type RootStackParamList = {
  MyFeedDetail: { id?: string };
};

const MyFeedDetail = () => {
  const [thought, setThought] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const richText = useRef<RichEditor>(null);
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute<RouteProp<RootStackParamList, 'MyFeedDetail'>>();
  const editId = route.params?.id;

  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);


  useEffect(() => {
    if (editId) {
      const fetchFeedDetail = async () => {
        try {
          const res = await getApiByParams({
            url: API_FEED_DETAIL_BY_ID,
            params: editId,
          });
          if (res?.success) {
            const content = res.data.content;
            setThought(content);
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
      const plain = htmlToPlainText(thought);
      if (!plain) {
        return ShowToast('Please write something before posting', 'error');
      }

      let res;
      if (editId) {
        res = await apiPUT({
          url: API_FEED_UPDATE,
          values: { id: editId, content: plain },
        });
      } else {
        res = await apiPost({
          url: API_FEED_CREATE,
          values: { content: plain },
        });
      }

      if (res?.success) {
        ShowToast(res?.message || (editId ? 'Updated!' : 'Posted!'), 'success');
        if (!editId) {
          setThought(res.data.content);
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
            <CommonTextEditor
              key={editId}
              value={thought}
              onChange={setThought}
              editorRef={richText}
              maxHeight={hp(15)}
            />
          </View>

          <TouchableOpacity style={s.button} onPress={handlePost}>
            <Text style={s.buttonText}>{editId ? 'Update' : 'Post'}</Text>
          </TouchableOpacity>
        </View>

        <Text style={s.subtitle}>Recent Feed</Text>
        <FeedPost refreshKey={refreshKey} />

        <Feedpopup
          visible={showPopup}
          onClose={() => {
            setShowPopup(false);
          }}
          onAgree={() => setShowPopup(false)}
        />
      </View>
    </ImageBackground>
  );
};

export default MyFeedDetail;
