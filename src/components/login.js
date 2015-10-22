import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <input 
          type="text" 
          value={ this.props.username } 
          onChange={ this.props.onUpdateUsername } />
        <input 
          type="text" 
          value={ this.props.password }
          onChange={ this.props.onUpdatePassword } />
        <button onClick={ this.props.onSubmit } />
      </div>
    );
  }
}
