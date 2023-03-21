import axios from "axios";

const HttpClient = axios.create({
  baseURL: import.meta.env.API_URL,
});

export { HttpClient };
