import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
class PostComment extends Component {
  state = {
    body: ""
  };
  render() {
    const { body } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Control
          name="body"
          value={body}
          onChange={this.handleChange}
          type="text"
          rows="5"
          colunm="10"
          placeholder="Add comment"
        />
        <Button variant="primary" type="submit" disabled={body.length <10}>
          Post
        </Button>
      </Form>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { body } = this.state;
    const { user, postComment } = this.props;
    event.preventDefault();
    postComment(body, user);
    this.setState({ body: "" });
  };
}

export default PostComment;
