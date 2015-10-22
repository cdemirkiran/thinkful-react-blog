import React, { Component, PropTypes } from 'react';
import BlogActions from '../actions/blog';
import Post from './Post';

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  };

  /**
   * Transform each post from posts prop into a Post component.
   */
  renderPosts() {
    return this.props.posts.map((post, i) => <Post { ...post } key={ i }/>);
  };

  render() {
    return (
      <div>
        { this.renderPosts() }
      </div>
    );
  };
};

PostsList.PropTypes = {
  posts: PropTypes.array
};

PostsList.defaultProps = {
  posts: []
};