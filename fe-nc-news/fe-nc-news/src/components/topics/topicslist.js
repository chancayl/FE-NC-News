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
