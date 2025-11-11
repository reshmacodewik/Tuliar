import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { useResponsive } from '../../Responsive/useResponsive';
import { createSessionDetailsStyles } from '../../style/sessionDetailsStyles';
import TherapistCard from '../../components/TherapistCard';
import CustomButton from '../../components/CustomButton';
import NotesInput from '../../components/NotesInput';

const SessionDetailsScreen = ({ navigation }: any) => {
  const { wp, hp, fontSize } = useResponsive();
  const sessionDetailsStyles = createSessionDetailsStyles(wp, hp);
  const [notes, setNotes] = useState('');

  const therapist = {
    name: 'John Smith',
    title: 'Licensed Therapist',
    image: require('../../Theme/assets/image/doctor.png'),
    isOnline: true,
  };

  const handleJoinSession = () => {
    console.log('Joining session...');
  };

  const handleEdit = () => {
    console.log('Editing session...');
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleLinkPress = () => {
    console.log('Opening session link...');
  };

  return (
    <ImageBackground resizeMode="cover">
      <View style={sessionDetailsStyles.container}>
  
        {/* Header */}
        <View style={sessionDetailsStyles.header}>
          <TouchableOpacity
            style={sessionDetailsStyles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={sessionDetailsStyles.backArrow}>‹</Text>
            <Text style={sessionDetailsStyles.backText}>Detail</Text>
          </TouchableOpacity>

          <View style={sessionDetailsStyles.logoContainer}>
            <View style={sessionDetailsStyles.logoWrapper}>
              <View style={sessionDetailsStyles.leafIcon}>
                <View style={sessionDetailsStyles.leafBase} />
                <View style={sessionDetailsStyles.leafStem} />
              </View>
              <Text style={sessionDetailsStyles.logoText}>Tuliar</Text>
            </View>
          </View>
        </View>

        {/* Session Overview */}
        <View style={sessionDetailsStyles.sessionOverview}>
          <Text style={sessionDetailsStyles.sessionDate}>
            April 25, 2025 – 2:00 PM
          </Text>
          <Text style={sessionDetailsStyles.sessionTitle}>
            Therapy Session with Dr.Smith
          </Text>
        </View>

        {/* Therapist Card */}
        <TherapistCard therapist={therapist} onLinkPress={handleLinkPress} />

        {/* Notes Section */}
        <View style={sessionDetailsStyles.notesSection}>
          <NotesInput
            label="Notes"
            placeholder="Jot down your discussion topics or questions here in preparation for the session"
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        {/* Action Buttons */}
        <View style={sessionDetailsStyles.actionButtons}>
          <CustomButton
            title="Join Session"
            onPress={handleJoinSession}
            variant="primary"
            size="large"
            style={{ marginBottom: hp(3) }}
          />

          <View style={sessionDetailsStyles.secondaryButtons}>
            <CustomButton
              title="Edit"
              onPress={handleEdit}
              variant="warning"
              size="medium"
              style={{ flex: 1, marginRight: wp(1.5) }}
            />

            <CustomButton
              title="Cancel"
              onPress={handleCancel}
              variant="danger"
              size="medium"
              style={{ flex: 1, marginLeft: wp(1.5) }}
            />
          </View>
        </View>

        {/* Preparation Instructions */}
        <View style={sessionDetailsStyles.preparationSection}>
          <Text style={sessionDetailsStyles.preparationHeader}>
            Prepare for the session
          </Text>
          <Text style={sessionDetailsStyles.preparationText}>
            Take a few deep breaths, have water nearby.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SessionDetailsScreen;
