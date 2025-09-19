import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../style/SessionCard';

export type Session = {
  id: string;
  name: string;
  avatar: string;
  date: string;
  issue: string;
  time: string;
  price: string;
  type: 'chat' | 'video';
};

type Props = {
  item: Session;
  onReschedule?: () => void;
  onCancel?: () => void;
};

const SessionCard: React.FC<Props> = ({ item, onReschedule, onCancel }) => {
  const { wp, hp, rf } = useResponsive();
  const s = styles(wp, hp, rf);

  const [showReschedule, setShowReschedule] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  return (
    <>
      <View style={s.card}>
        <View style={s.rowTop}>
          <View style={s.rowLeft}>
            <Image source={{ uri: item.avatar }} style={s.avatar} />
            <View>
              <Text style={s.name}>{item.name}</Text>
              <Text style={s.date}>{item.date}</Text>
              <Text style={s.issue}>{item.issue}</Text>
            </View>
          </View>

          <View style={s.rowRight}>
            <Ionicons
              name={item.type === 'chat' ? 'chatbubble-ellipses' : 'videocam'}
              size={rf(20)}
              color="#1F3827"
              style={{ marginBottom: hp(0.5) }}
            />
            <Text style={s.time}>{item.time}</Text>
            <Text style={s.price}>{item.price}</Text>
          </View>
        </View>

        <View style={s.rowBtns}>
          <TouchableOpacity
            style={s.primaryBtn}
            onPress={() => setShowReschedule(true)}
          >
            <Text style={s.primaryBtnText}>Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={s.ghostBtn}
            onPress={() => setShowCancel(true)}
          >
            <Text style={s.ghostBtnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Reschedule Popup */}
      <Modal
        visible={showReschedule}
        transparent
        animationType="fade"
        onRequestClose={() => setShowReschedule(false)}
      >
        <View style={s.modalOverlay}>
          <View style={s.modalCard}>
            <TouchableOpacity
              style={s.closeBtn}
              onPress={() => setShowReschedule(false)}
            >
              <Ionicons name="close" size={rf(18)} color="red" />
            </TouchableOpacity>

            <Image source={{ uri: item.avatar }} style={s.avatarLarge} />
            <Text style={s.modalName}>{item.name}</Text>

            <View style={s.modalRow}>
              <Text>{item.date}</Text>
              <Text>{item.time}</Text>
            </View>

            {/* Divider */}
            <View style={s.divider} />

            <View style={s.modalRow}>
              <Text>{item.issue}</Text>
              <Text>{item.price}</Text>
            </View>

            <View style={s.rowBtns}>
              <TouchableOpacity
                style={s.primaryBtnn}
                onPress={() => {
                  setShowReschedule(false);
                  onReschedule?.();
                }}
              >
                <Text style={s.primaryBtnText}>Change The Therapist</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={s.ghostBtn}
                onPress={() => setShowReschedule(false)}
              >
                <Text style={s.ghostBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Cancel Confirmation Popup */}
      <Modal
        visible={showCancel}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCancel(false)}
      >
        <View style={s.modalOverlay}>
          <View style={s.modalCard}>
            <TouchableOpacity
              style={s.closeBtn}
              onPress={() => setShowCancel(false)}
            >
              <Ionicons name="close" size={rf(18)} color="red" />
            </TouchableOpacity>

            <Text style={s.confirmText}>
              Are you sure you want to cancel this session?
            </Text>

            <View style={s.confirmBtns}>
              <TouchableOpacity
                style={s.primaryBtn}
                onPress={() => {
                  setShowCancel(false);
                  onCancel?.();
                }}
              >
                <Text style={s.primaryBtnText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={s.ghostBtn}
                onPress={() => setShowCancel(false)}
              >
                <Text style={s.ghostBtnText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SessionCard;
