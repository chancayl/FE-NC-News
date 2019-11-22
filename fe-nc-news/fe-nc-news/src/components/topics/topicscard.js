import React from "react";
import Articleslist from "../articles/articlelist";
// import coding from "../../styling/coding.png";
// import football from "../../styling/football.png";
// import cooking from "../../styling/cooking.png";

import { Router } from "@reach/router";
import { Link } from "@reach/router";

function Topicscard(props) {
  const { topic } = props;
  const selectedArticle = `/articles/${topic.slug}`;
  return (
    <>
      <nav className="Topic">
        <Link to={selectedArticle}>
          <li>
            {topic.slug.toUpperCase()} - {topic.description}{" "}
          </li>
        </Link>
      </nav>
      <>
        <Router>
          <Articleslist path={selectedArticle} />
        </Router>
      </>
    </>
  );
}

export default Topicscard;
