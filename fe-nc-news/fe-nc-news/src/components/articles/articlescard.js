import React from "react";
import Singlearticle from "../singlearticle/articleid";

import * as api from "../../api";

import { Router } from "@reach/router";
import { Link } from "@reach/router";

function Articlescard(props) {
  //need to send client to a new page. that will be a list of articles from specific topic

  const { title, topic, article_id } = props.article;
  const { selectedTopic } = props;
  const selectedArticleid = `/articles/${article_id}`;

  return (
    <>
      <div className="Article">
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
        <div className="SingleArticleRouter">
          <Router>
            <Singlearticle path={selectedArticleid} />
          </Router>
        </div>
      </div>
    </>
  );
}

export default Articlescard;
