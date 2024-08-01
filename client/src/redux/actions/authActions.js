// import axios from 'axios';

// export const loginUser = (googleResponse) => async (dispatch) => {
//   try {
//     const response = await axios.post('http://localhost:3001/api/users', { token: googleResponse.credential });
//     dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
//   } catch (error) {
//     dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
//   }
// };

import axios from 'axios';

export const loginUser = (tokenResponse) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/users', {
      token: tokenResponse.access_token,
    });
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    const errorMessage = error.response && error.response.data ? error.response.data : 'An error occurred';
    dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });
  }
};