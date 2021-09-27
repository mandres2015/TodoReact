import { urlBase } from "../url/url";
import { postHTTP } from "./request";

export const deleteTask = async (task) => {
  const url = `${urlBase}/deleteOne`;

  const res = await postHTTP.withToken(url, task);
  if (!res) return;
  const {
    data: { data },
  } = res;

  return data;
};
