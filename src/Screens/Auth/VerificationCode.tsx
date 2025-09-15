import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFormik } from 'formik';
import styles from '../../style/otpstyles';
import { apiPost } from '../../utils/api/common';
import { API_VERIFY_OTP, API_VERIFY_RESEND } from '../../utils/api/APIConstant';
import ShowToast from '../../utils/ShowToast';
import { otpSchema } from '../../validation/signupSchema';

const VerificationCode = () => {
  const navigation = useNavigation();
  const inputs = useRef<TextInput[]>([]);
  const route = useRoute<any>();
  const { email, phoneNo } = route.params || {};
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [otpArray, setOtpArray] = useState(['', '', '', '']);

  const formik = useFormik({
    initialValues: { otp: '' },
    validationSchema: otpSchema,
    onSubmit: async values => {
      try {
        Keyboard.dismiss();
        const payload = {
          email,
          phoneNo,
          otp: Number(values.otp),
        };
        console.log('payload=============', payload);
        const res = await apiPost({
          url: API_VERIFY_OTP,
          values: payload,
        });
        console.log('res=======================', res);
        if (res?.success) {
          ShowToast(res?.message, 'success');
          navigation.navigate('SuccessScreen' as never);
        } else {
          ShowToast(res?.message || 'OTP verification failed', 'error');
        }
      } catch (error: any) {
        console.log('OTP Verify error:', error);
        ShowToast('Error', error?.message || 'Something went wrong');
      }
    },
  });

  // ✅ Handle digit-wise input
  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;
    const newOtp = [...otpArray];
    newOtp[index] = text;
    setOtpArray(newOtp);

    // Update Formik as a joined string
    formik.setFieldValue('otp', newOtp.join(''));

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };
  const handleResendOTP = async () => {
    try {
      Keyboard.dismiss();
      const payload = {
        email,
        phoneNo,
      };

      const res = await apiPost({
        url: API_VERIFY_RESEND,
        values: payload,
      });
      console.log('=======================', res);

      if (res?.success) {
        ShowToast(res?.message, 'success');
      } else {
        ShowToast(res?.message || 'OTP verification failed', 'error');
      }
    } catch (error: any) {
      console.log('OTP Verify error:', error);
      ShowToast('Error', error?.message || 'Something went wrong');
    }
  };
  return (
    <ImageBackground
      source={require('../../Theme/assets/image/background.png')}
      style={styles.bg}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../Theme/assets/icon/arrow.png')}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.heading}>Verification Code</Text>
        <Text style={styles.subtext}>
          We have sent the verification code to your phone number
        </Text>

        <View style={styles.otpRow}>
          {[0, 1, 2, 3].map((_, index) => (
            <TextInput
              key={index}
              ref={ref => (inputs.current[index] = ref!)}
              value={formik.values.otp[index] || ''}
              onChangeText={text => handleChange(text, index)}
              style={[
                styles.otpBox,
                activeIndex === index && styles.activeOtpBox,
              ]}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              maxLength={1}
              keyboardType="number-pad"
              autoFocus={index === 0}
            />
          ))}
        </View>
        {formik.errors.otp && (
          <Text style={styles.errorText}>{formik.errors.otp}</Text>
        )}

        <View style={styles.resendRow}>
          <Text style={styles.grayText}>Didn’t get code?</Text>
          <TouchableOpacity onPress={handleResendOTP}>
            <Text style={styles.resendText}> Resend OTP</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            formik.handleSubmit();
          }}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default VerificationCode;
