const monthArr = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const getDateParams = (date) => {
  // date имеет вид "2022-08-17 12:35:00"
  const createdDate = new Date(date);

  const day = createdDate.getDate(); // 17
  const month = monthArr[createdDate.getMonth()]; // августа
  const hour = createdDate.getHours(); // 12
  const minute = createdDate.getMinutes(); // 35

  return { day, month, hour, minute };
};

export const textChanger = (text, value) => {
  // обрезание строки по value
  let title = text;
  if (text.length >= value) {
    title = text.substring(0, value).trimEnd().concat("...");
  }
  return title;
};
