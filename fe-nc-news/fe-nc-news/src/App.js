import React from "react";
import "./App.css";

import Header from "./components/header";
import Topicslist from "./components/topics/topicslist";
import Articleslist from "./components/articles/articlelist";
import Singlearticle from "./components/singlearticle/articleid"

import { Router } from "@reach/router";
import { Link } from "@reach/router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <br></br>
      <div className="App-hompage">
        <nav>
          <Link to="/">
            {" "}
            <button className="homebutton"> Home </button>
          </Link>
          <Link to="/articles/all">
            {" "}
            <button className="homebutton"> Articles </button>
          </Link>
        </nav>
      </div>
      <div className="router">
        <Router>
          <Topicslist path="/" />
          <Articleslist path="/articles/:topics_slug" />
          <Singlearticle path="/articles/:article_id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
