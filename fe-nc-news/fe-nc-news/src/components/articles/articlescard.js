import React from "react";
import Singlearticle from "../singlearticle/articleid";

import { Router } from "@reach/router";
import { Link } from "@reach/router";

function Articlescard(props) {
  const { title, topic, article_id } = props.article;
  const { selectedTopic } = props;
  const selectedArticleid = `/articles/article/${article_id}`;
  return (
    <>
      <ul className="Article">
        {topic === selectedTopic ? (
          <nav>
            <Link to={selectedArticleid}>
              <li> {title} </li>
            </Link>
          </nav>
        ) : selectedTopic === "all" ? (
          <nav>
            <Link to={selectedArticleid}>
              <li> {title} </li>
            </Link>
          </nav>
        ) : null}
        <>
          <Router>
            <Singlearticle path={selectedArticleid} />
          </Router>
        </>
      </ul>
    </>
  );
}

export default Articlescard;
