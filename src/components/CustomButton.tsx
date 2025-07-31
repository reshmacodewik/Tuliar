import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { useResponsive } from '../Responsive/useResponsive';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  textStyle,
}) => {
  const { wp, hp, fontSize, borderRadius, shadow } = useResponsive();

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#166534',
          textColor: '#FFFFFF',
        };
      case 'secondary':
        return {
          backgroundColor: '#3B82F6',
          textColor: '#FFFFFF',
        };
      case 'danger':
        return {
          backgroundColor: '#EF4444',
          textColor: '#FFFFFF',
        };
      case 'warning':
        return {
          backgroundColor: '#F59E0B',
          textColor: '#FFFFFF',
        };
      default:
        return {
          backgroundColor: '#166534',
          textColor: '#FFFFFF',
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          paddingVertical: hp(1.5),
          fontSize: fontSize(14),
        };
      case 'medium':
        return {
          paddingVertical: hp(2.5),
          fontSize: fontSize(16),
        };
      case 'large':
        return {
          paddingVertical: hp(3),
          fontSize: fontSize(18),
        };
      default:
        return {
          paddingVertical: hp(2.5),
          fontSize: fontSize(16),
        };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: disabled ? '#9CA3AF' : variantStyles.backgroundColor,
      borderRadius: borderRadius(12),
      paddingVertical: sizeStyles.paddingVertical,
      alignItems: 'center',
      justifyContent: 'center',
      ...shadow,
      opacity: disabled ? 0.6 : 1,
    },
    text: {
      color: variantStyles.textColor,
      fontSize: sizeStyles.fontSize,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton; 