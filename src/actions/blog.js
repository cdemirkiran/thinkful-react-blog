import Reflux from 'reflux';


/**
 * Define all async actions for blog store.
 * Using 'failure' because Reflux acts weird when using 'failed'.
 */
export default Reflux.createActions({
  "addPost": { children: ["completed", "failure"] },
  "deletePost": { children: ["completed", "failure"] },
  "getPosts": { children: ["completed", "failure"] },
  "newPostInput": {}
});