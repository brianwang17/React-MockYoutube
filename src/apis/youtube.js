import axios from "axios";

const KEY = "AIzaSyCf40Tpqz3PD0z8ES6h--oL1C2updDp3dk";
const baseUrl = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL: baseUrl,
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY
  }
});
