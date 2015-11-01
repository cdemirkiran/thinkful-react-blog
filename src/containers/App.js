import React from 'react';
import Reflux from 'reflux';
import BlogActions from '../actions/blog';
import BlogStore from '../stores/blog';
import NewPost from '../components/NewPost';
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
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">React JS Blog
                    <small> by Green Pioneer & Harry </small>
                </h1>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <h3 className="page-header">Create A New Post</h3>
            </div>
        </div>
        <NewPost
          title={ this.state.newPost.title }
          content={ this.state.newPost.content }
          updateTitle={ BlogActions.newPostInput.bind(this, 'title') }
          updateContent={ BlogActions.newPostInput.bind(this, 'content') }
          onSubmit={ BlogActions.addPost } />
        <PostsList
          posts={ this.state.posts }/>
      </div>
    );
  }
});
