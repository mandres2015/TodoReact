import { urlBase } from "../url/url";
import axios from "axios";
import Swal from "sweetalert2";

export const login = async ({ email, password }) => {
  try {
    const url = `${urlBase}/login`;

    const { data } = await axios.post(url, {
      email: email.trim().toLowerCase(),
      password,
    });

    return data;
  } catch (e) {
    return null;
  }
};

export const register = async ({ email, password }) => {
  try {
    if (password.length < 6) {
      return;
    }

    const url = `${urlBase}/signup`;
    const { data } = await axios.post(url, {
      username: "a",
      email: email.trim().toLowerCase(),
      password,
    });

    return data;
  } catch (e) {
    return null;
  }
};
