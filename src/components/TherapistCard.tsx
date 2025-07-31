import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useResponsive } from '../Responsive/useResponsive';

interface TherapistCardProps {
  therapist: {
    name: string;
    title: string;
    image: any;
    isOnline?: boolean;
  };
  onLinkPress?: () => void;
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist, onLinkPress }) => {
  const { wp, hp, fontSize, borderRadius, shadow } = useResponsive();

  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: borderRadius(16),
      padding: wp(5),
      marginBottom: hp(4),
      ...shadow,
    },
    therapistInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(3),
    },
    therapistImage: {
      width: wp(15),
      height: wp(15),
      borderRadius: wp(7.5),
      marginRight: wp(4),
    },
    therapistDetails: {
      flex: 1,
    },
    therapistName: {
      fontSize: fontSize(18),
      color: '#000000',
      fontWeight: 'bold',
      marginBottom: hp(0.5),
    },
    therapistTitle: {
      fontSize: fontSize(14),
      color: '#6B7280',
      fontWeight: '500',
    },
    sessionType: {
      marginBottom: hp(3),
    },
    onlineText: {
      fontSize: fontSize(16),
      color: '#000000',
      fontWeight: 'bold',
      marginBottom: hp(1),
    },
    linkText: {
      fontSize: fontSize(14),
      color: '#3B82F6',
      fontWeight: '600',
      textDecorationLine: 'underline',
    },
  });

  return (
    <View style={styles.card}>
      <View style={styles.therapistInfo}>
        <Image
          source={therapist.image}
          style={styles.therapistImage}
        />
        <View style={styles.therapistDetails}>
          <Text style={styles.therapistName}>{therapist.name}</Text>
          <Text style={styles.therapistTitle}>{therapist.title}</Text>
        </View>
      </View>
      
      <View style={styles.sessionType}>
        <Text style={styles.onlineText}>
          {therapist.isOnline ? 'Online' : 'Offline'}
        </Text>
        <TouchableOpacity onPress={onLinkPress}>
          <Text style={styles.linkText}>Link to Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TherapistCard; 