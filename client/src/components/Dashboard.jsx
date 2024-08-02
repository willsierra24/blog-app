import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlogPost, deleteBlogPost, updateBlogPost, fetchBlogPosts } from '../redux/actions/blogActions';
import { getUser } from '../redux/actions/authActions';
import './Dashboard.scss';

class Dashboard extends Component {
  state = {
    title: '',
    content: '',
    editingId: null 
  };

  componentDidMount() {
    this.props.getUser();
    this.props.fetchBlogPosts();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete = (id) => {
    this.props.deleteBlogPost(id);
  };

  handleEdit = (blog) => {
    this.setState({
      title: blog.title,
      content: blog.content,
      editingId: blog._id 
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, editingId } = this.state;
    const { user } = this.props;

    // Include user information in the submission
    const blogData = {
      title,
      content,
      author: user.displayName, // Add user.displayName to the data
      author_id: user._id, // If you want to include user ID (assuming it's available)
    };

    if (editingId) {
      this.props.updateBlogPost(editingId, blogData);
    } else {
      this.props.createBlogPost(blogData);
    }

    // Clear the form and reset editingId
    this.setState({ title: '', content: '', editingId: null });
  };

  render() {
    const { user, blogs, loading, error } = this.props;
    const { title, content, editingId } = this.state;
    const userBlogs = blogs.filter((blog) => blog.author_id === user._id);

    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {user && <p>Welcome, {user.displayName}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Title"
            required
          />
          <textarea
            name="content"
            value={content}
            onChange={this.handleChange}
            placeholder="Content"
            required
          />
          <button type="submit">{editingId ? 'Update' : 'Submit'}</button>
        </form>
        {userBlogs.map((blog) => (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button onClick={() => this.handleDelete(blog._id)}>Delete</button>
            <button onClick={() => this.handleEdit(blog)}>Edit</button>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
  blogs: state.blogs
});

const mapDispatchToProps = {
  createBlogPost,
  updateBlogPost,
  getUser,
  deleteBlogPost,
  fetchBlogPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);