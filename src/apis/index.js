import axios from "axios";
import { BASE_URL, API_VERSION } from "./constants";

const getData = () => res.data;
let api;

function init({
  token = window.localStorage.getItem("token"),
  baseURL = `${BASE_URL}/${API_VERSION}`,
  axiosOptions = { headers: {} },
} = {}) {
  api = axios.create({
    baseURL,
    ...axiosOptions,
    headers: {
      authorization: token ? `Bearer ${token}` : undefined,
      ...axiosOptions.headers,
    },
  });
}

export { init, api, getData };
