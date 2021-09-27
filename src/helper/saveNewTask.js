import { urlBase } from "../url/url";
import { postHTTP } from "./request";

export const saveNewTask = async (task) => {
  const url = `${urlBase}/save`;

  const res = await postHTTP.withToken(url, task);
  if (!res) return;
  const {
    status,
  } = res;

  return status;
};
