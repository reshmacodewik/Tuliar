// ShareThoughts.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import styles from '../../style/FeedDetails';
import { useResponsive } from 'react-native-responsive-hook';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import FeedPost from '../../components/FeedPost';
import Feedpopup from '../../components/Feedpopup';

const MyFeedDetail = () => {
  const [thought, setThought] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp);
  const [showPopup, setShowPopup] = useState(false);
  // ✅ create a usable style object

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={s.bgimg}
    >
      <View style={s.container}>
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
        <View style={s.thoughtBoxcontainer}>
          <Text style={s.sharetitle}>Share your Thoughts</Text>
          <TextInput
            style={s.input}
            placeholder="Write something..."
            multiline
            value={thought}
            onChangeText={setThought}
          />

          <TouchableOpacity style={s.button} onPress={() => setShowPopup(true)}>
            <Text style={s.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <Text style={s.subtitle}>Recent Feed</Text>
        <View>
          <FeedPost />
        </View>
        <Feedpopup
          visible={showPopup}
          onClose={() => setShowPopup(false)}
          onAgree={() => {
            console.log("User agreed ✅, now post the thought:", thought);
            // 👉 Call your API here
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default MyFeedDetail;
