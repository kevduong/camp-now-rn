import { AsyncStorage } from 'react-native';

import {
 FACEBOOK_LOGIN_SUCESS
} from '.types';

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // Dispatch an action saying FB login is done
  } else {
    // Start FB login process
  }
};
