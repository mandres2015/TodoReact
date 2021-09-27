import { urlBase } from "../url/url";
import { postHTTP } from "./request";

export const doneTask = async (task) => {
  const url = `${urlBase}/doneTask`;

  const res = await postHTTP.withToken(url, task);
  if (!res) return;
  const {
    data: { data },
  } = res;

  return data;
};
