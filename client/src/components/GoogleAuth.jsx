import React from 'react';
import { useGoogleLogin  } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Google login successful:', tokenResponse); // Log para verificar la estructura de tokenResponse
      dispatch(loginUser(tokenResponse));
    },
    onError: (error) => {
      console.error('Google login failed:', error); // Log para verificar errores de autenticación de Google
    },
  });

  return (
    <button onClick={() => login()}>Login with Google</button>
  );
};

export default GoogleAuth; 

