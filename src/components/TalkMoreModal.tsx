import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface TalkMoreModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (option: 'peer' | 'ai' | 'group') => void;
}

const TalkMoreModal: React.FC<TalkMoreModalProps> = ({ visible, onClose, onSelect }) => (
  <Modal
    visible={visible}
    transparent
    animationType="fade"
    onRequestClose={onClose}
  >
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.modalOverlay}>
        <TouchableWithoutFeedback onPress={() => { /* Prevent closing when tapping inside box */ }}>
          <View>
            <View style={styles.modalBox}>
              <TouchableOpacity onPress={() => { onSelect('peer'); onClose(); }}>
                <Text style={styles.modalText}>Talk to Peer</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { onSelect('ai'); onClose(); }}>
                <Text style={styles.modalText}>Talk to AI Companion</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { onSelect('group'); onClose(); }}>
                <Text style={styles.modalText}>Join a Group</Text>
              </TouchableOpacity>
              <View style={styles.arrowDown} />
            </View>
          
          </View>
        </TouchableWithoutFeedback>
      </View>
      
    </TouchableWithoutFeedback>
  </Modal>
);

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  arrowDown: {
    alignSelf: 'flex-end',
    marginRight: -10, // <-- Adjust this for perfect alignment
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 14,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    marginBottom: -20,
    transform: [{ rotate: '180deg' }]
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 24,
    paddingVertical: 10,
    minWidth: 250,
    alignItems: 'flex-start',
    elevation: 8,
    marginBottom: 55,
    marginRight: 25,
   
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    marginVertical: 5,
    color: '#111',
  },
});

export default TalkMoreModal;