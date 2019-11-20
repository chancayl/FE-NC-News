import axios from "axios";

const apiURL = `https://my-nc-first-app.herokuapp.com/api`;

export const getTopics = () => {
  return axios.get(`${apiURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = async (topic, sort) => {
  if (topic === "all") {
    const { data } = await axios.get(`${apiURL}/articles`, {
      params: { topics: "all", sort_by: sort }
    });
    return data.articles;
  }
  const { data } = await axios.get(`${apiURL}/articles`, {
    params: { topics: topic, sort_by: sort }
  });
  return data.articles;
};

export const getArticleById = id => {
  return axios.get(`${apiURL}/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const voteforArticle = (article_id, num) => {
  return axios
    .patch(`${apiURL}/articles/${article_id}`, {
      inc_votes: num
    })
    .then(({ data }) => {
      return data.article;
    });
};

export const fetchCommentsByArticleId = article_id => {
  return axios
    .get(`${apiURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const voteforComment = (comment_id, num) => {
  return axios
    .patch(`${apiURL}/comments/${comment_id}`, {
      inc_votes: num
    })
    .then(({ data }) => {
      return data.comment;
    });
};
