import axios from 'axios';
import { API_ENDPOINTS } from './constants';

export const registerUser = async (data: any) => {
  try {
   
    const payload = {
      fullName: data.fullName,
      dob: `${data.year}-${data.month}-${data.day}`, // already good
      email: data.email,
      gender: data.gender,
      password: data.password,
      countryCode: data.country,
      phoneNo: data.phoneNo,
    };
    console.log('REGISTER API:', API_ENDPOINTS.REGISTER);
    console.log('Register request payload:', payload);

    const response = await axios.post(API_ENDPOINTS.REGISTER, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Register response:', response.data);
    return response.data;
  } catch (error: any) {
    console.log('Register error:', error.response?.data || error.message);

    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};
