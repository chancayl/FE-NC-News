import React, { Component } from "react";
import Commentscard from "./commentscard";
import Singlearticle from "../singlearticle/articleid";
import * as api from "../../api";

import { Router } from "@reach/router";
import { Link } from "@reach/router";

class Commentslist extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.fetchCommentsByArticleId(article_id).then(comments => {
      this.setState({
        comments: comments,
        isLoading: false
      });
    });
  }

  render() {
    const { isLoading, comments } = this.state;
    const { article_id } = this.props;

    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="Commentslist">
          <br></br>
          <>
            <Link to={`/articles/article/${article_id}`}>
              Go back to article
            </Link>
          </>
          {comments.map(comment => {
            return (
              <Commentscard
                key={comment.comment_id}
                comment={comment}
                article_id={this.props.article_id}
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
