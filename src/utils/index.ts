import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { data } from "../mockData/data";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

const mock = new AxiosMockAdapter(api, { delayResponse: 500 });

mock.onGet(`/data`).reply(200, data);
