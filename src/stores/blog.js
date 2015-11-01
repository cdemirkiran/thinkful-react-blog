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
      user: {
        username: 'Joe Smith',
      },
      newPost: {
        title: '',
        content: ''
      }
    };
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
        if (err) {
          BlogActions.getPosts.failure(err);
        }

        BlogActions.getPosts.completed(res.body);
      })
  },

  onGetPostsCompleted(posts) {
    // Store our blog posts in our data store.
    this.data.posts = posts.reverse();

    // Trigger the change to connected components.
    this.trigger({
      posts: this.data.posts
    });
  },

  /**
   * Using 'failure' because Reflux acts weird when using 'failed'.
   */
  onGetPostsFailure(err) {
    return new Error(err);
  },

  onAddPost(title, content) {
    request
      .post('/posts')
      .send({
        author: this.data.user.username,
        title: this.data.newPost.title,
        content: this.data.newPost.content
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) { 
          BlogActions.addPost.failure(err); 
        }

        BlogActions.addPost.completed(res.body);
      })
  },

  onAddPostCompleted(post) {
    // Add new post to our posts data
    this.data.newPost = {
      title: '',
      content: ''
    }

    this.data.posts.unshift(post);
    this.trigger({
      posts: this.data.posts,
      newPost: this.data.newPost
    });
  },

  /**
   * Using 'failure' because Reflux acts weird when using 'failed'.
   */
  onAddPostFailure(err) {
    return new Error(err);
  },

  onDeletePost(id) {
    request
      .del(`/posts/${id}`)
      .end((err, res) => {
        if (err) {
          BlogActions.deletePost.failure(err);
        }

        BlogActions.deletePost.completed(id);
      });
  },

  onDeletePostCompleted(id) {
    this.data.posts = this.data.posts.filter(post => (post._id !== id));
    this.trigger({
      posts: this.data.posts
    });
  },

  onNewPostInput(target, val) {
    this.data.newPost[target] = val;
    this.trigger({
      newPost: this.data.newPost
    });
  }
});