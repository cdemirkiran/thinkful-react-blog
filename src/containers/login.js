import React from 'react';
import Login from '../components/login';

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  };

  updateUsername(e) {
    this.setState({
      username: e.target.value
    });
  };

  updatePassword(e) {
    this.setState({
      password: e.target.value
    });
  };

  submitLogin() {

  };

  render() {
    return (
      <div>
        <Login
          username={ this.state.username }
          password={ this.state.password } 
          onUpdateUsername={ this.updateUsername } 
          onUpdatePassword={ this.updatePassword } 
          onSubmit={ this.submitLogin } />
      </div>
    );
  }
}
