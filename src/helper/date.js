export const dateFormat = (date) => {
  return (
    date.getFullYear() +
    "-" +
    (Number(date.getMonth()) + 1 < 10 ? "0" : "") +
    (Number(date.getMonth()) + 1) +
    "-" +
    (date.getDate() < 10 ? "0" : "") +
    date.getDate()
  );
};

export const timeFormat = (date) => {
  return (
    (date.getHours() < 10 ? "0" : "") +
    date.getHours() +
    ":" +
    (date.getMinutes() < 10 ? "0" : "") +
    date.getMinutes()
  );
};
