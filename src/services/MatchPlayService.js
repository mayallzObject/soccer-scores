import axios from "axios";

export const API_KEY = `b2f43580-5b76-11eb-b83d-33b6339dd693`;

export const matchPlayApi = axios.create({
  baseURL: `https://app.sportdataapi.com/api/v1/soccer`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getDutchOne() {
    return matchPlayApi.get(`/seasons?apikey=${API_KEY}&league_id=449`);
  },
  getDutchTwo() {
    return matchPlayApi.get(`/seasons?apikey=${API_KEY}&league_id=450`);
  }
};
