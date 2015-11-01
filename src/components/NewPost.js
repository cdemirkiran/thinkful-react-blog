import React, { Component, PropTypes } from 'react';

export default class NewPost extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { title, content } = this.props;
    return (
      <div className='row'>
        <label
          style={ { display: 'block' } }>Title: </label>
        <input
          type="text" 
          value={ title } 
          onChange={ (e) => this.props.updateTitle(e.target.value) }/>
        <label
          style={ { display: 'block' } }>Content: </label>
        <textarea
          value={ content }
          rows="8"
          cols="50" 
          onChange={ (e) => this.props.updateContent(e.target.value) }/>
        <button
          className="btn btn-primary" 
          onClick={ this.props.onSubmit }
          style={ { display: 'block' } }>
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
