import React from "react";

import * as api from "../../api";
import Articlescard from "./articlescard"

class Articleslist extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({ articles: articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div className="Topicslist">
        <> {isLoading && <p> Loading... </p>}</>

        <h3>
          {articles.map(article => {
            return <Articlescard key={article.article_id} article={article} />;
          })}
        </h3>
      </div>
    );
  }
}

export default Articleslist;
