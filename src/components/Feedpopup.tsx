// CommunityReminder.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import CheckBox from "@react-native-community/checkbox"; // or use a custom checkbox
import { useResponsive } from "react-native-responsive-hook";

interface Props {
  visible: boolean;
  onClose: () => void;
  onAgree: () => void;
}

const Feedpopup: React.FC<Props> = ({ visible, onClose, onAgree }) => {
  const { wp, hp } = useResponsive();
  const [checked, setChecked] = useState(false);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            width: wp(85),
            backgroundColor: "#fff",
            borderRadius: 12,
            padding: wp(5),
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: wp(3.5), marginBottom: hp(0.5) }}>
            Community Reminder:
          </Text>
          <Text style={{ fontSize: wp(3), marginBottom: hp(1) ,fontFamily:'Poppin-Medium',marginLeft:hp(1.1)}}>
            • By posting, you agree to our Community Guidelines, which promote
            respect, inclusivity, and safety.
          </Text>
          <Text style={{ fontSize: wp(3), marginBottom: hp(1),fontFamily:'Poppin-Medium',marginLeft:hp(1.1) }}>
            • All posts are subject to moderation.
          </Text>
          <Text style={{ fontSize: wp(3), marginBottom: hp(2),fontFamily:'Poppin-Medium',marginLeft:hp(1.1) }}>
            • Content that is abusive, triggering, or violates standards may be
            removed.
          </Text>

          {/* Checkbox */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: hp(2),marginLeft: wp(-0.5) }}>
            <CheckBox value={checked} onValueChange={setChecked} />
            <Text style={{ marginLeft: wp(0.5), fontSize: wp(3.5),marginRight:wp(5) }}>
              I have <Text style={{ fontWeight: "bold" }}>read</Text> and{" "}
              <Text style={{ fontWeight: "bold" }}>agree</Text> to follow the{" "}
              <Text style={{ fontWeight: "bold" }}>community standards</Text>.
            </Text>
          </View>

          {/* Buttons */}
          <TouchableOpacity
            style={{
              backgroundColor: checked ? "#264734" : "#aaa",
              paddingVertical: hp(1.1),
              borderRadius: 30,
              alignItems: "center",
              alignSelf:'flex-start',
              width:'52%'
            }}
            disabled={!checked}
            onPress={() => {
              onAgree();
              onClose();
            }}
          >
            <Text style={{ color: "#fff", fontSize: wp(4) }}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Feedpopup;
