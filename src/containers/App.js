import React from 'react';
import Reflux from 'reflux';
import BlogActions from '../actions/blog';
import BlogStore from '../stores/blog';
import NewPostContainer from '../containers/NewPost';
import PostsList from '../components/PostsList';

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
          posts={ this.state.posts }/>
        <NewPostContainer 
          title={ this.state.title }
          content={ this.state.content }
          updateTitle={ this.updateTitle }
          updateContent={ this.updateContent }
          onSubmit={ BlogActions.addPost } />
      </div>
    );
  }
});
