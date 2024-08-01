import { FETCH_BLOGS, CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG } from '../actions/blogActions';

const initialState = [];

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return action.payload;
    case CREATE_BLOG:
      return [...state, action.payload];
    case UPDATE_BLOG:
      return state.map((blog) => (blog._id === action.payload._id ? action.payload : blog));
    case DELETE_BLOG:
      return state.filter((blog) => blog._id !== action.payload);
    default:
      return state;
  }
};

export default blogReducer;