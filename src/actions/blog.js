import Reflux from 'reflux';

export default Reflux.createActions({
  "addPost": {children: ["completed","failure"]},
  "deletePost": {children: ["completed","failure"]},
  "getPosts": {children: ["completed","failure"]}
});