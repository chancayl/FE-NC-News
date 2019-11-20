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
    <>
      <h4>{title}</h4>
      <div>
        <p>Author: {author}</p>
        <p>Topic: {topic.toUpperCase()}</p>
      </div>
      <p className="Selectedsinglearticle">Article: {body}</p>
      <p>Total votes: {votes}</p>
      <div className="Votearticle">
        <button onClick={voteArticle}>Vote for article</button>
        <br></br>
      </div>
      <div className="Seecomments">
        <p>Total comments: {comment_count}</p>
        <Link to={commentsLink}>
          <button>See comments</button>
        </Link>
        <div className="SingleArticleRouter">
          <Router>
            <Commentslist path={commentsLink} />
          </Router>
        </div>
      </div>
    </>
  );
}

export default ArticlebyId;
