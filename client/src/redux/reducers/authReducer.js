import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, LOGOUT_USER } from '../actions/authActions'

const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case GET_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case LOGOUT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
  };
  
  export default authReducer;