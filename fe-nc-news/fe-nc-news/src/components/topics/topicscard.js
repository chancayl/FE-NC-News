import React from "react";

import Articleslist from "../articles/articlelist";

import { Router } from "@reach/router";
import { Link } from "@reach/router";

function Topicscard(props) {
  //need to send client to a new page. that will be a list of articles from specific topic
  const topic = props.topic;
  return (
    <li className="Topics">
      <nav>
        <Link to="/articles">
          {" "}
          {topic.slug.toUpperCase()} - {topic.description}{" "}
        </Link>
      </nav>
      <div className="router">
        <Router>
          <Articleslist path="/articles" />
        </Router>
      </div>
    </li>
  );
}

export default Topicscard;
