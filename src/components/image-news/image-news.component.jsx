import React from "react";
import "./image-news.styles.scss";
import { monthArr } from "../../utils/month-array";
import { getDateParams, textChanger } from "../../utils/utils";

const ImageNews = ({ item }) => {
  const { text, created_at, postPhotos } = item;

  //утилиты приведения параметров к виду макета
  const { day, monthInd, hour, minute } = getDateParams(created_at);
  const title = textChanger(text, 50);

  const photoUrl =
    "https://api.capital-system.com" + postPhotos[0].photoAttachment.photo_url;

  return (
    <div
      className="image-news-container"
      style={{
        background: `linear-gradient(360deg, #00205B 0%, rgba(0, 32, 91, 0) 66.7%), url(${photoUrl})`,
        "background-size": "588px",
      }}
    >
      <div className="image-news-container__title">{title}</div>
      <div className="image-news-container__date">
        {day} {monthArr[monthInd]} {hour}:{minute}
      </div>
    </div>
  );
};

export default ImageNews;
