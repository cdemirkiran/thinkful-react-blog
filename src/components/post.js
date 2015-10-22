import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  };

  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <p>{ `by ${this.props.author } at ${this.props.created}` }</p>
        <p>{ this.props.content }</p>
        <button onClick={ this.onClick }>Edit</button>
      </div>
    );
  };

  onClick(e) {
    this.props.onEditPost(this.props._id);
  };
};
