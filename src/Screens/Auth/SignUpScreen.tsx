import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { useFormik } from 'formik';
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-toast-message';
import styles from '../../style/signupstyles';
import { signupSchema } from '../../validation/signupSchema';
import { registerUser } from '../../Api/auth';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      phoneNo: '',
      countryCode: '+91',
      gender: 'Male',
      day: '5',
      month: '08',
      year: '1998',
    },
    // validationSchema: signupSchema,
    onSubmit: async values => {
      if (!agree) {
        Alert.alert('Please agree to the terms and conditions');
        return;
      }

      setLoading(true);

      try {
        // Map Formik values to backend payload (RegisterUserDTO)
        const dob = `${values.year}-${values.month}-${values.day}`;
        const payload = {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          phoneNo: values.phoneNo,
          countryCode: values.countryCode,
          gender: values.gender,
          dob,
        };
        console.log('hkjkj', payload);
        const response = await registerUser(payload);

        console.log('Register success:', response);

        Toast.show({
          type: 'success',
          text1: 'Signup Successful',
          text2: 'You can now login with your account.',
        });

        setTimeout(() => {
          navigation.navigate('LoginScreen' as never);
        }, 1500);
      } catch (error: any) {
        console.log('Register error:', error.message);

        Toast.show({
          type: 'error',
          text1: 'Signup Failed',
          text2: error.message || 'Something went wrong, please try again.',
        });
      } finally {
        setLoading(false);
      }
    },
  });

  const handleSubmit = () => {
    console.log("lllllllllllllllllllllllllllllllllllllllllllll")
  };

  console.log(formik, 'formik----------------');

  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles.bgimg}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Sign up</Text>

        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
          onChangeText={formik.handleChange('fullName')}
          onBlur={formik.handleBlur('fullName')}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <Text style={styles.errorText}>{formik.errors.fullName}</Text>
        )}

        {/* Email */}
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={styles.errorText}>{formik.errors.email}</Text>
        )}

        {/* Date of Birth */}
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.dateRow}>
          <View style={styles.datePicker}>
            <Picker
              selectedValue={formik.values.month}
              onValueChange={value => formik.setFieldValue('month', value)}
            >
              <Picker.Item label="MM" value="" />
              {[...Array(12)].map((_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
              ))}
            </Picker>
          </View>
          <View style={styles.datePicker}>
            <Picker
              selectedValue={formik.values.day}
              onValueChange={value => formik.setFieldValue('day', value)}
            >
              <Picker.Item label="DD" value="" />
              {[...Array(31)].map((_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
              ))}
            </Picker>
          </View>
          <View style={styles.datePicker}>
            <Picker
              selectedValue={formik.values.year}
              onValueChange={value => formik.setFieldValue('year', value)}
            >
              <Picker.Item label="YYYY" value="" />
              {[...Array(50)].map((_, i) => {
                const y = new Date().getFullYear() - i;
                return <Picker.Item key={i} label={`${y}`} value={`${y}`} />;
              })}
            </Picker>
          </View>
        </View>
        {(formik.errors.day || formik.errors.month || formik.errors.year) && (
          <Text style={styles.errorText}>
            {formik.errors.day || formik.errors.month || formik.errors.year}
          </Text>
        )}

        {/* Gender */}
        <Text style={styles.label}>Select your gender</Text>
        <View style={styles.genderPicker}>
          <Picker
            selectedValue={formik.values.gender}
            onValueChange={value => formik.setFieldValue('gender', value)}
          >
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>
        {formik.touched.gender && formik.errors.gender && (
          <Text style={styles.errorText}>{formik.errors.gender}</Text>
        )}

        {/* Phone Number */}
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneRow}>
          <View style={styles.codeBox}>
            <Text>{formik.values.countryCode}</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            placeholderTextColor="#999"
            onChangeText={formik.handleChange('phoneNo')}
            onBlur={formik.handleBlur('phoneNo')}
            value={formik.values.phoneNo}
          />
        </View>
        {formik.touched.phoneNo && formik.errors.phoneNo && (
          <Text style={styles.errorText}>{formik.errors.phoneNo}</Text>
        )}

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          placeholderTextColor="#999"
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}

        {/* Terms */}
        <View style={styles.termsRow}>
          <CheckBox
            value={agree}
            onValueChange={setAgree}
            tintColors={{ true: '#264734', false: '#000' }}
          />
          <Text style={styles.termsText}>
            {'  '}By signing up, you agree to our{' '}
            <Text style={styles.linkText}>Terms & Conditions</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>.
          </Text>
        </View>

        {/* Submit */}
        <TouchableOpacity
          style={styles.signUpButton}
          // onPress={() => formik.handleSubmit()}
          onPress={() => handleSubmit()}
          disabled={loading}
        >
          <Text style={styles.signUpText}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUpScreen;
