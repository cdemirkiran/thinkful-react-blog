import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { title, author, created, content, _id } = this.props;
    return (
        <div>
          <div className="row">
              <div className="col-md-7">
                  <a href="#">
                      <img className="img-responsive" src="http://placehold.it/700x300" />
                  </a>
              </div>
              <div className="col-md-5">
                  <h3>{ title }</h3>
                  <h4>{ `by ${author} at ${created}` }</h4>
                  <p>{ content }</p>
                  <a className="btn btn-primary" href="#"
                    onClick={ () => this.props.deletePost(_id) }>Delete</a>
              </div>
          </div>
          <hr/>
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