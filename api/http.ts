import axios, { AxiosInstance } from 'axios';
import ApiConstant from './apiConstant';

class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: ApiConstant.BASE_API_URL,
      withCredentials: true,
    });
  }
}


const http = new Http().instance;
export default http;
