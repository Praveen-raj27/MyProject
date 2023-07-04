import {GET_USER_DETAILS} from '../types'

export const actionGetUserList = data => {
    return {
      type: GET_USER_DETAILS,
      payload: data
    };
  };