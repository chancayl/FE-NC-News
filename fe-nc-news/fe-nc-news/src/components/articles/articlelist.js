import React from "react";

import * as api from "../../api";
import Articlescard from "./articlescard";

class Articleslist extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    topic: "all",
    sort_by: "comment_count"
  };

  componentDidMount() {
    const { topics_slug } = this.props;
    api.getArticles(topics_slug).then(articles => {
      if (this.props.topics_slug === "all") {
        this.setState({ articles: articles, isLoading: false, topic: "all" });
      } else {
        this.setState({
          articles: articles,
          isLoading: false,
          topic: topics_slug,
          sort_by: "comment_count"
        });
      }
    });
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ topic: event.target.value });
  };

  handleSortby = event => {
    event.preventDefault();
    this.setState({ sort_by: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.topic !== this.state.topic ||
      prevState.sort_by !== this.state.sort_by
    ) {
      const { topic, sort_by } = this.state;
      api.getArticles(topic, sort_by).then(articles => {
        this.setState({
          articles: articles,
          isLoading: false,
          topic: this.state.topic,
          sort_by: this.state.sort_by
        });
      });
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div className="Topicslist">
        <br></br>
        <label className="ArticlesbyTopic">
          Search by Topic:{" "}
          <select value={this.state.topic} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="football">Football</option>
            <option value="coding">Coding</option>
            <option value="cooking">Cooking</option>
          </select>
        </label>
        <br></br>
        <label className="SortedArticles">
          Sort by:{" "}
          <select value={this.state.sort_by} onChange={this.handleSortby}>
            <option value="comment_count">Number of comments</option>
            <option value="created_at"> Date created </option>
            <option value="votes">Votes</option>
          </select>
        </label>
        <> {isLoading && <p> Loading... </p>}</>
        <h3>
          {articles.map(article => {
            return (
              <Articlescard
                key={article.article_id}
                article={article}
                selectedTopic={this.state.topic}
              />
            );
          })}
        </h3>
      </div>
    );
  }
}

export default Articleslist;
