import React from 'react';

export default class NewPost extends React.Component {
  render() {
    return (
      <div className='NewPost'>
        <label className='NewPost-label'>Title: </label>
        <input 
          className='NewPost-title'
          type="text" 
          value={ this.props.title } 
          onChange={ this.props.updateTitle }/>
        <label className='NewPost-label'>Content: </label>
        <textarea 
          className='NewPost-content'
          value={ this.props.body }
          rows="10" 
          cols="50" 
          onChange={ this.props.updateBody }/>
        <button 
          className='NewPost-submitButton' 
          onClick={ this.props.onSubmit }>
          Add Post
        </button>
      </div>
    );
  }
}
