import React, { Component, PropTypes } from 'react';

export default class NewPost extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { title, content, updateTitle, updateContent, onSubmit } = this.props;
    return (
      <div className='row'>
        <label className='NewPost-label'>Title: </label>
        <input 
          className='NewPost-title'
          type="text" 
          value={ title } 
          onChange={ updateTitle }/>
        <label className='NewPost-label'>Content: </label>
        <textarea 
          className='NewPost-content'
          value={ content }
          rows="10" 
          cols="50" 
          onChange={ updateContent }/>
        <button 
          className="btn btn-primary" 
          onClick={ onSubmit }>
          Add Post
        </button>
      </div>
    );
  };
};

NewPost.defaultProps = {
  title: '',
  content: ''
};

NewPost.PropTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  updateTitle: PropTypes.func.isRequired,
  updateContent: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
