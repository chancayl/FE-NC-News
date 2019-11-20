import React from "react";
import "./App.css";
import "./components/header/Homepage.css";

import Header from "./components/header/header";
import Topicslist from "./components/topics/topicslist";
import Articleslist from "./components/articles/articlelist";
import Singlearticle from "./components/singlearticle/articleid";

import { Router } from "@reach/router";
import { Link } from "@reach/router";
import Commentslist from "./components/comments/commentslist";

function App() {
  return (
    <div className="App">
      <header className="App-header" className="container">
        <Header />
      </header>
      <nav className="App-hompage" className="container">
        <ul>
          <Link to="/">
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
        </ul>
      </nav>
      <div className="router">
        <Router>
          <Topicslist path="/" class="container" />
          <Articleslist path="/articles/:topics_slug" class="container" />
          <Singlearticle
            path="/articles/article/:article_id"
            class="container"
          />
          <Commentslist path="/articles/:article_id/comments" />
        </Router>
      </div>
    </div>
  );
}

export default App;
