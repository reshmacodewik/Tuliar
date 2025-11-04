// components/Feedpopup.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useResponsive } from 'react-native-responsive-hook';

interface Props {
  visible: boolean;
  onClose: () => void;
  onAgree: () => void;
}

const Feedpopup: React.FC<Props> = ({ visible, onClose, onAgree }) => {
  const { wp, hp } = useResponsive();
  const [checked, setChecked] = useState(false);

  // reset checkbox whenever popup opens
  useEffect(() => {
    if (visible) {
      setChecked(false);
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      presentationStyle="overFullScreen"
      statusBarTranslucent
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          paddingHorizontal: wp(5),
        }}
      >
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: wp(5),
            maxHeight: hp(75),
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: hp(2) }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: wp(4),
                marginBottom: hp(1.5),
              }}
            >
              Community Reminder:
            </Text>

            <Text
              style={{
                fontSize: wp(3.2),
                marginBottom: hp(1),
                fontFamily: 'Poppins-Medium', // ⚠️ make sure you loaded this font
                marginLeft: hp(1),
              }}
            >
              • By posting, you agree to our Community Guidelines, which promote
              respect, inclusivity, and safety.
            </Text>
            <Text
              style={{
                fontSize: wp(3.2),
                marginBottom: hp(1),
                fontFamily: 'Poppins-Medium',
                marginLeft: hp(1),
              }}
            >
              • All posts are subject to moderation.
            </Text>
            <Text
              style={{
                fontSize: wp(3.2),
                marginBottom: hp(2),
                fontFamily: 'Poppins-Medium',
                marginLeft: hp(1),
              }}
            >
              • Content that is abusive, triggering, or violates standards may
              be removed.
            </Text>

            {/* Checkbox */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: hp(2),
                marginLeft: wp(-0.5),
              }}
            >
              <CheckBox
                value={checked}
                onValueChange={setChecked}
                tintColors={{ true: '#264734', false: '#aaa' }}
              />
              <Text
                style={{
                  marginLeft: wp(0.5),
                  fontSize: wp(3.6),
                  marginRight: wp(5),
                  flex: 1,
                }}
              >
                I have <Text style={{ fontWeight: 'bold' }}>read</Text> and{' '}
                <Text style={{ fontWeight: 'bold' }}>agree</Text> to follow the{' '}
                <Text style={{ fontWeight: 'bold' }}>
                  community standards
                </Text>.
              </Text>
            </View>
          </ScrollView>

          {/* Buttons */}
          <TouchableOpacity
            style={{
              backgroundColor: checked ? '#264734' : '#aaa',
              paddingVertical: hp(1.2),
              borderRadius: 30,
              alignItems: 'center',
              alignSelf: 'flex-start',
              width: '52%',
              marginTop: hp(1),
            }}
            disabled={!checked}
            onPress={() => {
              onAgree();
              onClose();
            }}
          >
            <Text style={{ color: '#fff', fontSize: wp(4) }}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Feedpopup;
