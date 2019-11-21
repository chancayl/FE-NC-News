import React, { Component } from "react";
import Commentscard from "./commentscard";
import Singlearticle from "../singlearticle/articleid";
import * as api from "../../api";
import PostComment from "./commentadder";
import Errors from "../Errorshower";

import { Router } from "@reach/router";
import { Link } from "@reach/router";

class Commentslist extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.fetchCommentsByArticleId(article_id).then(
      comments => {
        this.setState({
          comments: comments,
          isLoading: false
        });
      },
      error => {
        if (/[0-9]/.test(article_id)) {
          this.setState({
            error: { status: 404, msg: `404 Not found` },
            isLoading: false
          });
        } else {
          this.setState({
            error: { status: 400, msg: `400 Invalid request` },
            isLoading: false
          });
        }
      }
    );
  }

  postComment = (body, user) => {
    const { article_id } = this.props;
    api.postaComment(article_id, { body, user }).then(comment => {
      this.setState(currentState => {
        return {
          comments: [comment, ...currentState.comments]
        };
      });
    }).catch(error => {
      this.setState({error: {status: 500, msg: `Your comment has not been posted due a server issue. Please, try again later`} })
    });
  };

  render() {
    const { isLoading, comments, error } = this.state;
    const { article_id, user } = this.props;

    if (isLoading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <Errors error={error} />;
    } else {
      return (
        <div className="Commentslist">
          <br></br>
          <>
            <Link to={`/articles/article/${article_id}`}>
              Go back to article
            </Link>
          </>
          <PostComment postComment={this.postComment} user={user} />
          {comments.map(comment => {
            return (
              <Commentscard
                key={comment.comment_id}
                comment={comment}
                article_id={this.props.article_id}
                user={user}
              />
            );
          })}
          <br></br>
          <>
            <Link to={`/articles/article/${article_id}`}>
              Go back to article
            </Link>
            <Router>
              <Singlearticle path={`/articles/article/${article_id}`} />
            </Router>
          </>
        </div>
      );
    }
  }
}

export default Commentslist;
