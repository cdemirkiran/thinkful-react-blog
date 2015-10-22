import Reflux from 'reflux';
import request from 'superagent';

import BlogActions from '../actions/blog';

export default Reflux.createStore({
  listenables: [
    BlogActions
  ],

  init() {
    // Initialize the object that will hold our data.
    this.data = {
      editing: -1
    };
  },

  getInitialState() {
    return this.data;
  },

  /**
   * 
   */
  onGetPosts() {
    console.log('yo');
    request
      .get('/posts')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) BlogActions.getPosts.failure(err);

        BlogActions.getPosts.completed(res.body);
      })
  },

  onGetPostsCompleted(posts) {
    // Store our blog posts in our data store.
    this.data.posts = posts;

    // Trigger the change to connected components.
    this.trigger({
      posts: this.data.posts
    });
  },

  onGetPostsFailure(err) {
    console.error(`Error: ${err}`);
  },

  onEditPost(id) {
    // Set the id of the blog post being edited.
    this.data.editing = id;

    // Trigger the change to connected components.
    this.trigger({
      editing: this.data.editing
    });
  }

});