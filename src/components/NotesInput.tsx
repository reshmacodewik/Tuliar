import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useResponsive } from '../Responsive/useResponsive';

interface NotesInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

const NotesInput: React.FC<NotesInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  ...props
}) => {
  const { wp, hp, fontSize, borderRadius } = useResponsive();

  const styles = StyleSheet.create({
    container: {
      marginBottom: hp(2),
    },
    label: {
      fontSize: fontSize(16),
      color: '#000000',
      fontWeight: 'bold',
      marginBottom: hp(2),
    },
    input: {
      borderWidth: 1,
      borderColor: error ? '#EF4444' : '#E5E7EB',
      borderRadius: borderRadius(8),
      padding: wp(4),
      fontSize: fontSize(14),
      color: '#000000',
      backgroundColor: '#FFFFFF',
      minHeight: hp(12),
      textAlignVertical: 'top',
    },
    errorText: {
      fontSize: fontSize(12),
      color: '#EF4444',
      marginTop: hp(1),
    },
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        multiline
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default NotesInput; 