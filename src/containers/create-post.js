import React from 'react';
import CreatePost from '../components/create-post';
//import PostActions from '../actions/posts';

export default class CreatePostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdateTitle = this.onUpdateTitle.bind(this);
    this.onUpdateBody = this.onUpdateBody.bind(this);

    this.state = {
      title: '',
      body: ''
    };
  };

  onUpdateTitle(e) {
    this.setState({
      title: e.target.value
    });
  };

  onUpdateBody(e) {
    this.setState({
      body: e.target.value
    });
  };

  submitPost() {
    const { title, body } = this.state;
    //PostActions.submitPost(title, body);
  };

  render() {
    return (
      <div>
        <CreatePost
          title={ this.state.title }
          body={ this.state.body }
          onSubmit={ this.submitPost }
          onUpdateTitle={ this.onUpdateTitle }
          onUpdateBody={ this.onUpdateBody }
      </div>
    );
  };
}
