import React from 'react';

export default class CreatePost extends React.Component {
  render() {
    return (
      <div>
        <input 
          type="text" 
          value={ this.props.title } 
          onChange={ this.props.updateTitle } />
        <textarea 
          value={ this.props.body }
          rows="10" 
          cols="50" 
          onChange={ this.props.updateBody } />
        <button onClick={ this.props.onSubmit } />
      </div>
    );
  }
}
