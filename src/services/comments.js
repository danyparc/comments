import axios from "axios";
import { BASE_URL } from "./constants";

export const getComments = () => {
  return axios
    .get(BASE_URL + "/comments")
    .then((resp) => {
      return resp.data;
    })
};

export const getOneComment = (id) => {
  return axios
    .get(`${BASE_URL}/comments/${id}`)
    .then((resp) => {
      return resp.data;
    })
}

export const postComment = ({email, content})=>{
  return axios
    .post(`${BASE_URL}/comments/`, { email, content })
    .then((resp) => {
      return resp.data;
    })
}

export const editComment = ({ id, email, content }) => {
  return axios
    .put(`${BASE_URL}/comments/${id}`, {id, email, content})
    .then((resp) => {
      return resp.data;
    })
}

export const deleteComment = ({ id }) => {
  return axios
    .delete(`${BASE_URL}/comments/${id}`)
    .then((resp) => {
      return resp.data;
    })
}