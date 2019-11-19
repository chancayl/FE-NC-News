import React from "react";

import * as api from "../../api";

class Singlearticle extends React.Component {
  state = {
    isLoading: true,
    article: null,
    article_id: null
  };

  componentDidMount() {
    console.log(this.props);
    api.getArticleById(2).then(article => {
      this.setState({ article: article });
    });
  }

  render() {
    console.log(this.props);

    return <p>TESTING</p>;
  }
}

export default Singlearticle;
