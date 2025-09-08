import axios from 'axios';
import { API_ENDPOINTS } from './constants';

export const registerUser = async (data: any) => {
   try {
    const response = await fetch(API_ENDPOINTS.REGISTER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: data.fullName,
        nickName: data.nickName,
        dob: data.dob,
        email: data.email,
        gender: data.gender,
        password: data.password,
        countryCode: data.countryCode,
        phoneNo: data.phoneNo,
      }),
    });
    return await response.json();
  } catch (err) {
    throw err;
  }
};
