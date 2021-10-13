import { api, getData } from "apis/index";
import { GET_USER_DETAILS } from "./constants";

export const getUserDetails = (userId) =>
  api.get(GET_USER_DETAILS(userId)).then(getData);
