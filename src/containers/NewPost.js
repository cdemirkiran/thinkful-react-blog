import React, { Component, PropTypes } from 'react';
import BlogActions from '../actions/blog';
import NewPost from '../components/NewPost';

export default class NewPostContainer extends Component {
  constructor(props) {
    super(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);

    this.state = {
      title: '',
      content: ''
    };
  };

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  };

  updateContent(e) {
    this.setState({
      content: e.target.value
    });
  };
  
  render() {
    return (
      <div>
        <NewPost
          title={ this.state.title }
          content={ this.state.content }
          updateTitle={ this.updateTitle }
          updateContent={ this.updateContent }
          onSubmit={ BlogActions.addPost }/>
      </div>
    );
  };
};