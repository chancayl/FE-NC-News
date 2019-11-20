import React from "react";
import ArticlebyId from "./articleidcard";
import * as api from "../../api";

class Singlearticle extends React.Component {
  state = {
    isLoading: true,
    article: null,
    haveVoted: false,
    comment_count: null,
    stateVotes: 0
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(article => {
      this.setState({
        article: article,
        isLoading: false,
        stateVotes: article.votes,
        comment_count: article.comment_count
      });
    });
  }

  voteArticle = event => {
    event.preventDefault();
    const { haveVoted } = this.state;
    if (haveVoted) {
      this.setState({ stateVotes: -1, haveVoted: false });
    } else {
      this.setState({ stateVotes: +1, haveVoted: true });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { article_id } = this.props;
    const { haveVoted, stateVotes } = this.state;
    if (prevState.haveVoted !== haveVoted) {
      api.voteforArticle(article_id, stateVotes).then(article => {
        this.setState({
          isLoading: false,
          article: article
        });
      });
    }
  }

  render() {
    const { isLoading, article } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <ArticlebyId
          className="Singlearticle"
          key={article.article_id}
          article={article}
          voteArticle={this.voteArticle}
          votes={this.state.stateVotes}
          comment_count={this.state.comment_count}
        />
      );
    }
  }
}

export default Singlearticle;
