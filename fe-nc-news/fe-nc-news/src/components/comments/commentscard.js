import React, { Component } from "react";
import * as api from "../../api";

class Commentscard extends Component {
  state = {
    comment: [],
    haveVoted: false,
    stateVotes: 0
  };

  render() {
    const { body, author, votes, created_at } = this.props.comment;
    const { user, deletededMsg } = this.props;
    const { stateVotes } = this.state;
    const date = new Date(created_at).toString();

    return (
      <div className="Comments">
        <p>User: {author}</p>
        <p>Comment: {body}</p>
        <p>Created at: {date}</p>
        <p>Total votes: {stateVotes + votes}</p>
        <button className="Commentbutton" onClick={this.voteComment}>
          Vote
        </button>
        {author === user && (
          <button onClick={this.handledelete} className="Commentbutton">
            Delete
          </button>
        )}
        {deletededMsg && <p className="Deletedcomment">{deletededMsg}</p>}
      </div>
    );
  }
  handledelete = event => {
    event.preventDefault();
    const { comment_id, deleteComment } = this.props;
    deleteComment(comment_id);
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
