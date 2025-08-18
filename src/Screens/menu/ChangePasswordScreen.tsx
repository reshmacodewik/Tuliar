import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useResponsive } from '../../Responsive/useResponsive';
import styles from './changePasswordStyles';

const ChangePasswordScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<NavigationProp<any>>();
  const themedStyles = styles(wp, hp);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <ImageBackground
      source={require('../../../assets/image/background.png')}
      style={themedStyles.bgimg}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={hp(2)}
      >
        <ScrollView contentContainerStyle={themedStyles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={themedStyles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="keyboard-arrow-left" size={wp(8)} color="#000" />
            </TouchableOpacity>
            <Text style={themedStyles.headerText}>Change Password</Text>
          </View>

          {/* Illustration */}
          <Image
            source={require('../../../assets/image/change_password.png')}
            style={themedStyles.illustration}
            resizeMode="contain"
          />

          {/* Form */}
          <View style={themedStyles.formGroup}>
            <Text style={themedStyles.label}>Old Password</Text>
            <View style={themedStyles.inputRow}>
              <TextInput
                style={themedStyles.input}
                placeholder="Enter old password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showOld}
                value={oldPassword}
                onChangeText={setOldPassword}
              />
              <TouchableOpacity onPress={() => setShowOld(!showOld)}>
                <MaterialIcons
                  name={showOld ? 'visibility' : 'visibility-off'}
                  size={wp(6)}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={themedStyles.formGroup}>
            <Text style={themedStyles.label}>New Password</Text>
            <View style={themedStyles.inputRow}>
              <TextInput
                style={themedStyles.input}
                placeholder="Enter new password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showNew}
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TouchableOpacity onPress={() => setShowNew(!showNew)}>
                <MaterialIcons
                  name={showNew ? 'visibility' : 'visibility-off'}
                  size={wp(6)}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={themedStyles.formGroup}>
            <Text style={themedStyles.label}>Confirm New Password</Text>
            <View style={themedStyles.inputRow}>
              <TextInput
                style={themedStyles.input}
                placeholder="Enter confirm new password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showConfirm}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                <MaterialIcons
                  name={showConfirm ? 'visibility' : 'visibility-off'}
                  size={wp(6)}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={themedStyles.submitBtn}>
            <Text style={themedStyles.submitText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ChangePasswordScreen;