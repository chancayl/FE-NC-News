import React, { Component } from "react";

import "./App.css";
import "./stylingcss/Homepage.css";
import "./stylingcss/select.css";
import "./stylingcss/Topicslist.css";
import "./stylingcss/Articleslist.css";

import * as api from "./api";
import Header from "./components/header/header";
import Homepage from "./components/header/Homepage";
import Menu from "./components/header/barmenu";
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
    const { error, user, userinfo } = this.state;
    return (
      <main className="App">
        <header className="App-header" className="container">
          <Header />
        </header>
        <main>
          <Menu user={user} handleChange={this.handleChange} />
        </main>

        <>
          <Router>
            <Homepage path="/" user={user} userinfo={userinfo} />
            <Topicslist path="/topics" user={user} />
            <Articleslist
              path="/articles/:topics_slug"
              user={user}
              userinfo={userinfo}
            />
            <Singlearticle
              path="/articles/article/:article_id"
              user={user}
              userinfo={userinfo}
            />
            <Commentslist
              path="/articles/:article_id/comments"
              user={user}
              userinfo={userinfo}
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

  componentDidMount() {
    const username = this.state.user;
    api
      .getUser(username)
      .then(user => {
        this.setState({ user: username, userinfo: { user } });
      })
      .catch(error => {
        this.setState({ error: error, isLoading: false });
      });
  }
}

export default App;
