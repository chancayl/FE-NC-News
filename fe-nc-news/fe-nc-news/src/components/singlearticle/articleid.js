import React from "react";
import ArticlebyId from "./articleidcard";
import Errors from "../Errorshower";
import Articleslist from "../articles/articlelist";
import * as api from "../../api";

import { Router } from "@reach/router";
import { Link } from "@reach/router";

class Singlearticle extends React.Component {
  state = {
    isLoading: true,
    article: null,
    haveVoted: false,
    comment_count: null,
    stateVotes: 0,
    error: null
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(
      article => {
        this.setState({
          article: article,
          isLoading: false,
          stateVotes: article.votes,
          comment_count: article.comment_count
        });
      },
      error => {
        if (/[0-9]/.test(article_id)) {
          this.setState({
            error: { status: 404, msg: `404 Not found` },
            isLoading: false
          });
        } else {
          this.setState({
            error: { status: 400, msg: `400 Invalid request` },
            isLoading: false
          });
        }
      }
    );
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
      api.voteforArticle(article_id, stateVotes).then(
        article => {
          this.setState({
            isLoading: false,
            article: article
          });
        },
        error => {
          if (/[0-9]/.test(article_id)) {
            this.setState({
              error: { status: 404, msg: `404 Not found` },
              isLoading: false
            });
          } else {
            this.setState({
              error: { status: 400, msg: `400 Invalid request` },
              isLoading: false
            });
          }
        }
      );
    }
  }

  render() {
    const { isLoading, article, error } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <Errors error={error} />;
    } else {
      return (
        <>
          <ArticlebyId
            className="Singlearticle"
            key={article.article_id}
            article={article}
            voteArticle={this.voteArticle}
            votes={this.state.stateVotes}
            comment_count={this.state.comment_count}
          />
          <Link to={`/articles/${article.topic}`}>
            Go back to article
          </Link>
          <Router>
            <Articleslist path={`/articles/${article.topic}`} />
          </Router>
        </>
      );
    }
  }
}

export default Singlearticle;
