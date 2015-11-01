import React, { Component, PropTypes } from 'react';

export default class NewPost extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { title, content } = this.props;
    return (
      <div className='row'>
        <label className='NewPost-label'>Title: </label>
        <input 
          className='NewPost-title'
          type="text" 
          value={ title } 
          onChange={ this.props.updateTitle }/>
        <label className='NewPost-label'>Content: </label>
        <textarea 
          className='NewPost-content'
          value={ content }
          rows="10" 
          cols="50" 
          onChange={ this.props.updateContent }/>
        <button 
          className="btn btn-primary" 
          onClick={ () => this.props.onSubmit(title, content) }>
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
