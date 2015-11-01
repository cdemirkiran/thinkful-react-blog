import React, { Component, PropTypes } from 'react';
import BlogActions from '../actions/blog';
import NewPost from '../components/NewPost';

export default class NewPostContainer extends Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div>
        <NewPost
          title={ this.props.title }
          content={ this.props.content }
          updateTitle={ (e) => this.props.updateTitle(e.target.value) }
          updateContent={ (e) => this.props.updateContent(e.target.value) }
          onSubmit={ this.props.onSubmit }/>
      </div>
    );
  };
};