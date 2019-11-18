import axios from "axios";

export const getTopics = () => {
  return axios
    .get("https://my-nc-first-app.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

export const getArticles = () => {
  return axios
    .get("https://my-nc-first-app.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};
