import React, { Component } from "react";

import "./App.css";
import "./stylingcss/Homepage.css";
import "./stylingcss/select.css";
import "./stylingcss/Topicslist.css";

import * as api from "./api";
import Header from "./components/header/header";
import Homepage from "./components/header/homepage";
import Topicslist from "./components/topics/topicslist";
import Articleslist from "./components/articles/articlelist";
import Singlearticle from "./components/singlearticle/articleid";
import Errors from "./components/Errorshower";

import { Router } from "@reach/router";
import Commentslist from "./components/comments/commentslist";

class App extends Component {
  state = {
    user: `jessjelly`,
    userinfo: null,
    error: { status: 404, msg: `404 Not found` },
    isLoading: true
  };

  render() {
    const { error } = this.state;
    return (
      <main className="App">
        <header className="App-header" className="container">
          <Header />
        </header>
        <main>
          <Homepage user={this.state.user} />
        </main>
        <br></br>
        <div className="Userselecter">
          <label>
            Change user:{" "}
            <select value={this.state.user} onChange={this.handleChange}>
              <option value="jessjelly">jessjelly</option>
              <option value="tickle122">tickle122</option>
              <option value="cooljmessy">cooljmessy</option>
              <option value="happyamy2016">happyamy2016</option>
              <option value="grumpy19">grumpy19</option>
            </select>
          </label>
        </div>
        <>
          <Router>
            <Topicslist path="/topics" user={this.state.user} />
            <Articleslist
              path="/articles/:topics_slug"
              user={this.state.user}
              userinfo={this.state.user}
            />
            <Singlearticle
              path="/articles/article/:article_id"
              user={this.state.user}
              userinfo={this.state.user}
            />
            <Commentslist
              path="/articles/:article_id/comments"
              user={this.state.user}
              userinfo={this.state.user}
            />
            <Errors default error={error} />
          </Router>
        </>
      </main>
    );
  }
  handleChange = event => {
    const username = event.target.value;
    event.preventDefault();
    api
      .getUser(username)
      .then(user => {
        this.setState({ user: username, userinfo: { user } });
      })
      .catch(error => {
        this.setState({ error: error, isLoading: false });
      });
  };
}

export default App;
