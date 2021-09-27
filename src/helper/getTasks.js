import { urlBase } from "../url/url";
import { dateFormat, timeFormat } from "./date";
import { getHTTP } from "./request";

export const getTasks = async () => {
  const url = `${urlBase}/tasks`;
  const res = await getHTTP.withToken(url);
  if (!res) return;
  const {
    data: { data },
  } = res;

  const tasks = data.map((task) => {
    return {
      id: task._id,
      title: task.title,
      description: task.description,
      done: task.done,
      date: task.alarm ? dateFormat(new Date(task.alarm)) : "",
      time: task.alarm ? timeFormat(new Date(task.alarm)) : "",
      status: task.status,
      loading: false,
    };
  });

  return tasks;
};
