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
    console.log(data.article);
    return data.article;
  });
};
