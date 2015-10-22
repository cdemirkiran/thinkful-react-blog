import React, { Component } from 'react';
import { Link } from 'react-router';
import LoginContainer from './containers/login';
import PostsContainer from './containers/posts';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
      issue: {}
    };
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            { this.state.loggedIn ? (
              <p>Log out</p>
            ) : (
              <p>Sign in</p>
            )}
          </li>
        </ul>
        { this.props.children }
      </div>
    );
  };
}
