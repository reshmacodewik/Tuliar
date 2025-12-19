import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

interface TherapyCardProps {
  title: string;
  subtitle: string;
  onJoin: () => void;
  onReschedule: () => void;
}

const TherapyCard: React.FC<TherapyCardProps> = ({
  title,
  subtitle,
  onJoin,
  onReschedule,
}) => {
  const { wp, hp } = useResponsive();

  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.joinBtn, { paddingHorizontal: wp(5) }]}
          activeOpacity={0.8}
          onPress={onJoin}
        >
          <Text style={styles.joinText}>Join Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rescheduleBtn, { paddingHorizontal: wp(4) }]}
          activeOpacity={0.8}
          onPress={onReschedule}
        >
          <Text style={styles.rescheduleText}>Reschedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TherapyCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    color: '#000',
    marginBottom: 4,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  joinBtn: {
    backgroundColor: '#1F3827',
    borderRadius: 20,
    paddingVertical: 8,
    marginRight: 8,
  },
  joinText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Quicksand-Bold',
  },
  rescheduleBtn: {
    borderWidth: 1,
    borderColor: '#1F3827',
    borderRadius: 20,
    paddingVertical: 8,
  },
  rescheduleText: {
    color: '#1F3827',
    fontSize: 13,
    fontFamily: 'Quicksand-Bold',
  },
});
