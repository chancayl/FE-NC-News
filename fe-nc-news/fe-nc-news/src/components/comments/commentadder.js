import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
class PostComment extends Component {
  state = {
    body: ""
  };
  render() {
    const { body } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} className="commentadder">
        <p>Comment must have a minimum length of 10 characters</p>
        <Form.Control
          name="body"
          value={body}
          onChange={this.handleChange}
          type="text"
          rows="5"
          colunm="10"
          placeholder="Add comment"
          className="Commentbox"
        />
        <Button variant="primary" type="submit" disabled={body.length < 10}>
          POST
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
