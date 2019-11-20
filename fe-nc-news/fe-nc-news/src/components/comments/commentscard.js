import React, { Component } from "react";
import * as api from "../../api";

class Commentscard extends Component {
  state = {
    comment: [],
    haveVoted: false,
    stateVotes: 0
  };

  voteComment = event => {
    event.preventDefault();
    const { haveVoted, stateVotes } = this.state;
    const { comment_id } = this.props.comment;
    if (haveVoted) {
      this.setState({ stateVotes: stateVotes - 1, haveVoted: false });
      api.voteforComment(comment_id, -1).then(comment => {
        this.setState({
          isLoading: false,
          comment: comment
        });
      });
    } else {
      this.setState({ stateVotes: stateVotes + 1, haveVoted: true });
      api.voteforComment(comment_id, 1).then(comment => {
        this.setState({
          isLoading: false,
          comment: comment
        });
      });
    }
  };
  render() {
    const { body, author, votes, created_at, article_id } = this.props.comment;
    const { stateVotes } = this.state;
    return (
      <>
        <p>User: {author}</p>
        <p>Comment: {body}</p>
        <p>Created at: {created_at}</p>
        <p>Total votes: {stateVotes + votes}</p>
        <button className="Votecomment" onClick={this.voteComment}>
          Vote for comment
        </button>
      </>
    );
  }
}

export default Commentscard;
