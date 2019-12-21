import React, { Component } from "react";
//import axios from 'axios'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPosts } from "../actions/postActions";
class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    // axios.post('https://jsonplaceholder.typicode.com/posts',{
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(post)
    // })
    // .then(res => console.log(res.data))
    this.props.createPosts(post);
    this.setState({
      title: "",
      body: ""
    });
  };
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <br />
            <textarea
              type="text"
              value={this.state.body}
              name="body"
              onChange={this.onChange}
            ></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Postform.propTypes = {
  createPosts: PropTypes.func.isRequired
};

export default connect(null, { createPosts })(Postform);
