import React from "react";
import * as api from "../../api";
import Articleslist from "../articles/articlelist";

import { Router } from "@reach/router";
import { Link } from "@reach/router";

class Topicscard extends React.Component {
  state = {
    articles: [],
    selectedTopic: "",
    isLoading: true
  };

  componentDidMount() {
    const { slug } = this.props.topic;
    api.getArticles(slug).then(articles => {
      this.setState({ articles: articles, isLoading: false });
    });
  }

  articlesbytopic = event => {
    //try to do a map and check article.topic
    this.setState({ selectedTopic: event.target });
  };

  //need to send client to a new page. that will be a list of articles from specific topic
  render() {
    const topic = this.props.topic;
    const selectedArticle = `/articles/${topic.slug}`;
    return (
      <li className="Topics">
        <nav>
            <Link to={selectedArticle} onClick={this.articlesbytopic}>
              {topic.slug.toUpperCase()} - {topic.description}{" "}
            </Link>
        </nav>
        <div className="router">
          <Router>
            <Articleslist path={selectedArticle} />
          </Router>
        </div>
      </li>
    );
  }
}

export default Topicscard;
