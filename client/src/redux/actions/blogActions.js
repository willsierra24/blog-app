import axios from 'axios';

export const FETCH_BLOGS = 'FETCH_BLOGS';
export const CREATE_BLOG = 'CREATE_BLOG';
export const UPDATE_BLOG = 'UPDATE_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';

export const fetchBlogPosts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/post');
  dispatch({ type: FETCH_BLOGS, payload: response.data });
};

export const createBlogPost = (blog) => async (dispatch) => {
  const response = await axios.post('http://localhost:3001/post', blog);
  dispatch({ type: CREATE_BLOG, payload: response.data });
};

export const updateBlogPost = (id, blog) => async (dispatch) => {
  const response = await axios.put(`http://localhost:3001/post/${id}`, blog);
  dispatch({ type: UPDATE_BLOG, payload: response.data });
};

export const deleteBlogPost = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/post/${id}`);
  dispatch({ type: DELETE_BLOG, payload: id });
};