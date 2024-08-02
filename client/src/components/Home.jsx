import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogPosts} from '../redux/actions/blogActions';

const Home = () => {

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);


  return (
    <>
      <div style={{textAlign:"center"}}>
        <h1>Home Page</h1>
        {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
      </div>
    </>
  )
}

export default Home