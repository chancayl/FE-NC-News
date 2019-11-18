import React from "react";


// import { Router } from "@reach/router";
// import { Link } from "@reach/router";

function Articlescard(props) {
  //need to send client to a new page. that will be a list of articles from specific topic
  const article = props.article;
  return (
    <li className="Articles">
       {article.title}
    </li>
  );
}

export default Articlescard;
