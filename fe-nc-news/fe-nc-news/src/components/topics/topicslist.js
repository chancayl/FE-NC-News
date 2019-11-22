import React from "react";

import * as api from "../../api";
import Topicscard from "./topicscard";
import Errors from "../Errorshower";

class Topicslist extends React.Component {
  state = {
    topics: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    api.getTopics().then(
      topics => {
        this.setState({ topics: topics, isLoading: false });
      },
      error => {
        this.setState({
          error: { status: 404, msg: `404 Not found` },
          isLoading: false
        });
      }
    );
  }

  render() {
    const { topics, isLoading, error } = this.state;

    return (
      <div className="Topicslist">
        <h2>
          Welcome to NC latest News {this.props.user && ` ${this.props.user}`}!
        </h2>
        <p>
          Hi!, Welcome to NC-News website.
          <br></br>
          On this website, we will share with you all the latest news from NC.
          <br></br>
          You can navegate through our site and see all different articles. You
          will be able to see who created them and who commented them!
          <br></br>
          <br></br>
          Right now, you are logged-in as 'jessjelly'. If you want to change to
          another user, select your favorite one from 'Change user' option.
          <br></br>
          With the logged user, you will be able to create and delete your own
          comments as well as vote for them. Don't forget to vote for your
          favorite article too!{" "}
          <span role="img" aria-label="sheep">
            🐑
          </span>
          <br></br>
          If you can't wait for the very last new articles, please select one of
          the following topics.
        </p>
        <> {isLoading && <p> Loading... </p>}</>
        <>{error && <Errors error={error} />}</>
        <ul>
          {topics.map(topic => {
            return <Topicscard key={topic.slug} topic={topic} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Topicslist;
