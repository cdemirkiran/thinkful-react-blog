import React, { Component, PropTypes } from 'react';
import BlogActions from '../actions/blog';
import EditPost from './edit-post';
import Post from './post';

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  };

  /**
   *
   * 
   * @return {array} Array of Post components.
   */
  renderPosts() {
    return this.props.posts.map(post => {
      if (post._id === this.props.editing) {
        return ( <EditPost { ...post } onUpdatePost={ BlogActions.updatePost }/> );
      }

      return ( <Post { ...post } onEditPost={ BlogActions.editPost }/> );
    });
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