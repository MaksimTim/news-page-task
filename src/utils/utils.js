export const getDateParams = (date) => {
  const createdDate = new Date(date);

  const day = createdDate.getDate();
  const monthInd = createdDate.getMonth();
  const hour = createdDate.getHours();
  const minute = createdDate.getMinutes();

  return { day, monthInd, hour, minute };
};

export const textChanger = (text, value) => {
  let title = text;
  if (text.length >= value) {
    title = text.substring(0, value).trimEnd().concat("...");
  }
  return title;
};
