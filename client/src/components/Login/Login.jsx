import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from '../../redux/actions/authActions';
import "./Login.scss"

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

    const loginwithgoogle = () => {
        dispatch(loginWithGoogle());
    };

    useEffect(() => {
        if (user) {
          navigate('/dashboard');
        }
      }, [user, navigate]);

  return (
    <>
        <div className="login-page">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <div className="form">
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    Sign In With Google
                </button>
            </div>
        </div>
    </>
  )
}

export default Login