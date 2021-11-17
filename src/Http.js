import axios from "axios";
import {message} from "antd";

// authorizer - check if user is logged in on each api call
const user = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : null;
if (user?.token)
  (function () {
    var token = user?.token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }
  })();

// interceptors for unexpected errors (500) handling
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    message.error("An unexpected error occurred");
  }
  return Promise.reject(error);
});

export default axios.create({
  // baseURL: `https://192.168.0.163:45455/api`,
  baseURL: `https://api-erpadmin.jmmtest.xyz/api`,
});
