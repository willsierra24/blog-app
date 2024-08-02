import axios from 'axios';

export const LOGIN_WITH_GOOGLE = 'LOGIN_WITH_GOOGLE';
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginWithGoogle = () => async (dispatch) => {
  try {
      window.open("http://localhost:3001/auth/google/callback", "_self");
  } catch (error) {
      dispatch({ type: GET_USER_FAILURE, payload: error.message });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
      const response = await axios.get('http://localhost:3001/login/sucess', { withCredentials: true });
      dispatch({ type: GET_USER_SUCCESS, payload: response.data.user });
  } catch (error) {
      dispatch({ type: GET_USER_FAILURE, payload: error.message });
  }
};

export const logoutUser = () => {
  window.open('http://localhost:3001/logout', '_self');
  return { type: LOGOUT_USER };
};