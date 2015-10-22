import React from 'react';
import App from './App';
import { Router, Route } from 'react-router';
import LoginContainer from './containers/login';
import PostsContainer from './containers/posts';

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="login" component={LoginContainer} />
      <Route path="posts" component={PostsContainer} />
    </Route>
  </Router>
), document.getElementById('root'));