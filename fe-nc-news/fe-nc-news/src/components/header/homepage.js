import React from "react";
import { Link } from "@reach/router";

function Homepage() {
  return (
    <nav className="App-hompage">
      <Link to="/topics">
        {" "}
        <button className="homebutton">
          {" "}
          HOME
          <span></span>
          <span></span>
          <span></span>
          <span></span>{" "}
        </button>
      </Link>
      <Link to="/articles/all">
        {" "}
        <button className="homebutton">
          {" "}
          ARTICLES <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Link>
    </nav>
  );
}

export default Homepage;
