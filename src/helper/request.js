import axios from "axios";
import { getToken } from "./token";

export const getHTTP = {
  async withToken(url) {
    try {
      const token = JSON.parse(getToken());
      if (!token) return;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { status, data } = await axios.get(url, config);
      return { status, data };
    } catch (e) {
      console.log(e);
      return;
    }
  },

  async withoutToken(url) {
    try {
      const { status, data } = await axios.get(url);

      return { status, data };
    } catch (e) {
      console.log(e);
      return;
    }
  },
};
export const postHTTP = {
  async withToken(url, payload) {
    try {
      const token = JSON.parse(getToken());
      if (!token) return;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { status, data } = await axios.post(url, {data: payload}, config);
      return { status, data };
    } catch (e) {
      console.log(e);
      return;
    }
  },

  async withoutToken(url) {
    try {
      const { status, data } = await axios.post(url);

      return { status, data };
    } catch (e) {
      console.log(e);
      return;
    }
  },
};
