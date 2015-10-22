import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { title, author, created, content } = this.props;
    return (
      <div>
        <h2>{ title }</h2>
        <p>{ `by ${author} at ${created}` }</p>
        <p>{ content }</p>
      </div>
    );
  };
};

Post.defaultProps = {
  title: '',
  author: '',
  created: '',
  content: ''
};

Post.PropTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string
}