import React from "react";
// import axios from "axios";

import * as api from "../../api";
import Topicscard from "./topicscard";

class Topicslist extends React.Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics: topics, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading } = this.state;

    return (
      <div className="Topicslist">
        <p>
          Welcome to NC-News. We provide the folowing article Topics. To see
          articles, please select one of the following topics
        </p>
        <> {isLoading && <p> Loading... </p>}</>

        <h3>
          {topics.map(topic => {
            return (<Topicscard key={topic.slug} topic={topic} />);
          })}
        </h3>
      </div>
    );
  }
}

export default Topicslist;
