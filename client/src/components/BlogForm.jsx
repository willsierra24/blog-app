import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlogPost, updateBlogPost } from '../redux/actions/blogActions';

class BlogForm extends Component {
  state = {
    title: '',
    content: '',
  };

  componentDidMount() {
    if (this.props.blog) {
      const { title, content } = this.props.blog;
      this.setState({ title, content });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = this.state;
    if (this.props.blog) {
      this.props.updateBlogPost(this.props.blog._id, { title, content });
    } else {
      this.props.createBlogPost({ title, content });
    }
    this.setState({ title: '', content: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="Content"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createBlogPost,
  updateBlogPost,
};

export default connect(null, mapDispatchToProps)(BlogForm);