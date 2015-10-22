import Reflux from 'reflux';
import request from 'superagent';

import BlogActions from '../actions/blog';

export default Reflux.createStore({
  listenables: [
    BlogActions
  ],

  init() {
    // Initialize the object that will hold our data.
    this.data = {};
  },

  /**
   * When a component connects to this store,
   * it gets this as its initial state.
   * @return {object} Data stored in our store.
   */
  getInitialState() {
    return this.data;
  },

  /**
   * Make API call to fetch posts.
   */
  onGetPosts() {
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
  }
});