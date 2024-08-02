import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogPosts} from '../../redux/actions/blogActions';
import './Home.scss'

const Home = () => {

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);


  return (
    <>
      <div className='container'>
        <h1>Top Poetries</h1>
        {blogs.map((blog) => (
        <div className='wrapper' key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p className='author'>{blog.author}</p>
        </div>
      ))}
      </div>
    </>
  )
}

export default Home