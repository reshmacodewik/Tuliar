import ShowToast from '../ShowToast';
import { defaultAxios } from './axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

interface ApiParams {
  url: string;
  page?: number;
  searchText?: string;
  rowsPerPage?: number;
}

interface ApiParamsQuery {
  url: string;
  params?: string;
}

interface postParams {
  url: string;
  values: any;
}

export const getApiWithOutQuery = async ({
  url,
}: {
  url: string;
}): Promise<any> => {
  try {
    const res = await defaultAxios.get(url, {
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    });
    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

// export const getApiWithOutQueryWithToken = async ({
//   url,
// }: ApiParams & { token: string }): Promise<any> => {
//   try {
//     const token = await AsyncStorage.getItem('@auth_token');
//     const res = await defaultAxios.get(url, {
//       headers: {
//         Accept: 'application/json',
//         Authorization: `Bearer ${token}`, // Add Authorization header with token
//       },
//     });
//     return res.data;
//   } catch (err: any) {
//     return err?.response?.data;
//   }
// };

export const getApi = async ({
  url,
  page,
  searchText,
  rowsPerPage,
}: ApiParams): Promise<any> => {
  try {
    const res = await defaultAxios.get(
      url +
        '?page=' +
        page +
        '&rowsPerPage=' +
        rowsPerPage +
        '&q=' +
        searchText,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

export const getApiByParams = async ({
  url,
  params,
}: ApiParamsQuery): Promise<any> => {
  try {
    const res = await defaultAxios.get(url + '/' + params, {
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    });
    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

export const apiPost = async ({ url, values }: postParams): Promise<any> => {
  try {
    const res = await defaultAxios.post(url, values, {
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    });
    console.log('check', res.data);
    return res.data;
  } catch (err: any) {
    ShowToast(err?.response?.data?.error, 'error');
    return err?.response?.data;
  }
};

// export const apiPostWithToken = async ({ url, values }: postParams): Promise<any> => {
//   try {
//     const token = await AsyncStorage.getItem('@auth_token');
//     const res = await defaultAxios.post(url, values, {
//       headers: {
//         Accept: 'application/json',
//         'content-type': 'application/json',
//         Authorization: `Bearer ${token}`, // Add Authorization header with token
//       },
//     });
//     console.log('check', res.data)
//     // ShowToast(res.data?.message, "success");
//     return res.data;
//   } catch (err: any) {
//     ShowToast(err?.response?.data?.error, 'error');
//     return err?.response?.data;
//   }
// };

export const apiPATCH = async ({ url, values }: postParams): Promise<any> => {
  try {
    const res = await defaultAxios.patch(url, values, {
      headers: {
        Accept: 'application/json',
      },
    });
    console.log(res, 'res--0000000');
    // ShowToast(res.data?.message, "success");
    return res.data;
  } catch (err: any) {
    ShowToast(err?.response?.data?.message, 'error');
    return err?.response?.data;
  }
};

// export const apiPostWithMultiFormWithToken = async ({
//   url,
//   values,
// }: postParams): Promise<any> => {
//   try {
//     // Get the token from AsyncStorage (or another source)
//     const token = await AsyncStorage.getItem('@auth_token');

//     const res = await defaultAxios.post(url, values, {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${token}`, // Add the token in Authorization header
//       },
//     });
//     return res.data;
//   } catch (err: any) {
//     ShowToast(err?.response?.data?.message, 'error');
//     return err?.response?.data;
//   }
// };

export const apiPostWithMultiForm = async ({
  url,
  values,
}: postParams): Promise<any> => {
  try {
    const res = await defaultAxios.post(url, values, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (err: any) {
    ShowToast(err?.response?.data?.message, 'error');
    return err?.response?.data;
  }
};

export const apiPatchWithMultiForm = async ({
  url,
  values,
}: postParams): Promise<any> => {
  try {
    const res = await defaultAxios.patch(url, values, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (err: any) {
    ShowToast(err?.response?.data?.message, 'error');
    return err?.response?.data;
  }
};
