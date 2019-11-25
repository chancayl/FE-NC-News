import React from "react";
import Errors from "../Errorshower";
import Articlescard from "./articlescard";

import * as api from "../../api";

class Articleslist extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    topics_slug: "all",
    sort_by: "comment_count",
    error: null
  };

  componentDidMount() {
    const { topics_slug } = this.props;
    if (/[1-9]/.test(topics_slug)) {
      this.setState({
        error: { status: 400, msg: `400 Invalid request` },
        isLoading: false
      });
    } else if (
      topics_slug !== "all" &&
      topics_slug !== "football" &&
      topics_slug !== "cooking" &&
      topics_slug !== "coding"
    ) {
      this.setState({
        error: { status: 404, msg: `404 Request not found` },
        isLoading: false
      });
    } else {
      api
        .getArticles(topics_slug)
        .then(articles => {
          this.setState({
            articles: articles,
            isLoading: false,
            topics_slug: topics_slug
          });
        })
        .catch(error => {
          this.setState({
            error: { status: 500, msg: `Server issue` },
            isLoading: false
          });
        });
    }
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ topics_slug: event.target.value });
  };

  handleSortby = event => {
    event.preventDefault();
    this.setState({ sort_by: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      const { topics_slug, sort_by } = this.state;
      api
        .getArticles(topics_slug, sort_by)
        .then(articles => {
          this.setState({
            articles: articles,
            isLoading: false
          });
        })
        .catch(error => {
          this.setState({
            error: { status: 404, msg: `404 Not found` },
            isLoading: false
          });
        });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;
    if (error) {
      return <Errors error={error} />;
    }
    return (
      <div className="Topicslist">
        <br></br>
        <div className="ArticlesbyTopic">
          <label>
            Search by Topic:{" "}
            <select value={this.state.topics_slug} onChange={this.handleChange}>
              <option value="all">All</option>
              <option value="football">Football</option>
              <option value="coding">Coding</option>
              <option value="cooking">Cooking</option>
            </select>
          </label>
        </div>
        <br></br>
        <div className="SortedArticles">
          <label>
            Sort by:{" "}
            <select value={this.state.sort_by} onChange={this.handleSortby}>
              <option value="comment_count">Number of comments</option>
              <option value="created_at"> Date created </option>
              <option value="votes">Votes</option>
            </select>
          </label>
        </div>
        <> {isLoading && <p> Loading... </p>}</>

        <h3>
          {articles.map(article => {
            return (
              <Articlescard
                key={article.article_id}
                article={article}
                selectedTopic={this.state.topics_slug}
              />
            );
          })}
        </h3>
      </div>
    );
  }
}

export default Articleslist;
