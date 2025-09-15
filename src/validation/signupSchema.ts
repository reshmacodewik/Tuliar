import * as Yup from 'yup';

export const signupSchema = Yup.object()
  .shape({
    fullName: Yup.string().required('Full Name is required'),
    nickName: Yup.string().required('Nick Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    phoneNo: Yup.string().required('Phone Number is required'),
    gender: Yup.string().required('Gender is required'),

    day: Yup.string().required('Day is required'),
    month: Yup.string().required('Month is required'),
    year: Yup.string().required('Year is required'),
  })
  .test('valid-dob', 'Invalid date of birth', values => {
    const { day, month, year } = values as any;
    if (!day || !month || !year) return false;

    const dob = new Date(`${year}-${month}-${day}`);
    return !isNaN(dob.getTime()); // ✅ only valid if real date
  });

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .length(4, 'OTP must be 4 digits')
    .required('OTP is required'),
});

export const changepasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, 'Current password must be at least 6 characters')
    .required('Current password is required'),

  newPassword: Yup.string()
    .min(6, 'New password must be at least 6 characters')
    .required('New password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Confirm password is required'),
});
