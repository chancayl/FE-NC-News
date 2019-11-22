import React from "react";
import Commentslist from "../comments/commentslist";

import { Router } from "@reach/router";
import { Link } from "@reach/router";

function ArticlebyId(props) {
  const {
    title,
    body,
    author,
    topic,
    created_at,
    article_id,
    votes
  } = props.article;
  const { voteArticle, comment_count } = props;
  const commentsLink = `/articles/${article_id}/comments`;

  return (
    <div className="Singlearticle">
      <h4>{title}</h4>
      <>
        <p>Author: {author} </p>
        <p>Topic: {topic.toUpperCase()}</p>
        <p>Created at {new Date(created_at).toString()}</p>
      </>
      <p className="Selectedsinglearticle">Article: {body}</p>
      <p>Total article's votes: {votes} </p>
      <>
        <button onClick={voteArticle} className="articlebutton">
          <span></span>
          Vote
          <span></span>
          <span></span>
        </button>
        <br></br>
      </>
      <>
        <p>Total comments: {comment_count}</p>
        <Link to={commentsLink}>
          <button className="articlebutton">
            <span></span>
            Comments 
            <span></span>
            <span></span>
          </button>
        </Link>
        <>
          <Router>
            <Commentslist path={commentsLink} />
          </Router>
        </>
      </>
    </div>
  );
}

export default ArticlebyId;
