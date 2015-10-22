import React from 'react';
import Reflux from 'reflux';
import BlogActions from './actions/blog';
import BlogStore from './stores/blog';
import NewPost from './components/new-post';
import PostsList from './components/posts-list';

export default React.createClass({
  mixins: [
    Reflux.connect(BlogStore)
  ],

  componentDidMount() {
    BlogActions.getPosts();
  },

  render() {
    return (
      <div>
        <PostsList
          posts={ this.state.posts }
          editing={ this.state.editing }/>
        <NewPost/>
      </div>
    );
  }
});
