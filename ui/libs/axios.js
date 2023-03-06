import axios from 'axios'
import { getBaseURL } from "../utils";

const axiosIns = axios.create({
  baseURL: getBaseURL(),
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
})

const requestHandler = request => {
  return request;
};

const responseHandler = response => {
  return response;
};

const errorHandler = error => {
  return Promise.reject(error);
};

axiosIns.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosIns.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosIns;
