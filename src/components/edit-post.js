import React, { Component } from 'react';

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);

    this.state = {
      title: '',
      content: ''
    }
  };

  onContentChange(e) {
    this.setState({
      content: e.target.value
    });
  };

  onTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  };

  componentDidMount() {
    this.setState({
      title: this.props.title,
      content: this.props.content
    });
  };

  render() {
    return (
      <div>
        <input 
          type='text' 
          value={ this.state.title }
          onChange={ this.onTitleChange }/>
        <p>{ `by ${this.props.author } at ${this.props.created}` }</p>
        <textarea 
          value={ this.state.content }
          onChange={ this.onContentChange }/>
        <button onClick={ this.onClick }>Update</button>
      </div>
    );
  };

  onClick(e) {
    this.props.onUpdatePost(this.props);
  };
};
