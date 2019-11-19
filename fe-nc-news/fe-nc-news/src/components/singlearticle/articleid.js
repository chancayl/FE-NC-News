import React from "react";

import * as api from "../../api";

class Singlearticle extends React.Component {
  state = {
    isLoading: true,
    article: null,
    article_id: this.props.article_id
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(article => {
      this.setState({
        article: article,
        isLoading: false
      });
    });
  }

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      const {
        title,
        body,
        author,
        topic,
        comment_count,
        votes,
        created_at,
        article_id
      } = this.state.article;
      return (
        <main className="Singlearticle">
          <h4>{title}</h4>
          <p>Author: {author}</p>
          <p>Topic: {topic.toUpperCase()}</p>
          <p></p>
          <p className="Selectedsinglearticle">Article: {body}</p>
          <p>Total comments: {comment_count}</p>
        </main>
      );
    }
  }
}

export default Singlearticle;
