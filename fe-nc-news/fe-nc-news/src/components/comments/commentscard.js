import React, { Component } from "react";
import * as api from "../../api";
import Errors from "../Errorshower";

class Commentscard extends Component {
  state = {
    comment: [],
    haveVoted: false,
    stateVotes: 0,
    deletededMsg: ``,
    error: null
  };

  render() {
    const { body, author, votes, created_at } = this.props.comment;
    const { user } = this.props;
    const { stateVotes, deletededMsg, error } = this.state;
    const date = new Date(created_at).toString();
    if (error) {
      return <Errors error={error} />;
    }
    return (
      <>
        <p>User: {author}</p>
        <p>Comment: {body}</p>
        <p>Created at: {date}</p>
        <p>Total votes: {stateVotes + votes}</p>
        <button className="Votecomment" onClick={this.voteComment}>
          Vote for comment
        </button>
        {author === user && (
          <button onClick={this.deleteComment}>Delete comment</button>
        )}
        {deletededMsg && <p className="Deletedcomment">{deletededMsg}</p>}
      </>
    );
  }

  deleteComment = event => {
    const { comment_id } = this.props.comment;
    api
      .deleteComment(comment_id)
      .then(() => {
        this.setState({ deletededMsg: `Comment has been deleted` });
      })
      .catch(error => {
        this.setState({
          error: {
            status: 500,
            msg: `Your comment has not been deleted due a server issue. Please, try again later`
          }
        });
      });
  };

  voteComment = event => {
    event.preventDefault();
    const { haveVoted, stateVotes } = this.state;
    const { comment_id } = this.props.comment;
    if (haveVoted) {
      this.setState({ stateVotes: stateVotes - 1, haveVoted: false });
      api.voteforComment(comment_id, -1).then(comment => {
        this.setState({
          comment: comment
        });
      });
    } else {
      this.setState({ stateVotes: stateVotes + 1, haveVoted: true });
      api.voteforComment(comment_id, 1).then(comment => {
        this.setState({
          comment: comment
        });
      });
    }
  };
}

export default Commentscard;
