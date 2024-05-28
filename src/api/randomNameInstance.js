import axios from "axios";

const randomNameInstance = axios.create({
  baseURL: "https://randommer.io/api",
  headers: {
    "X-Api-Key": "29361b06b1304b8bad79c0744075ae9c",
  },
});

export default randomNameInstance;
