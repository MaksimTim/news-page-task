import React from "react";
import "./image-news.styles.scss";
import { getDateParams, textChanger } from "../../utils/utils";

const ImageNews = ({ item }) => {
  const { text, created_at, postPhotos } = item;

  //утилиты приведения параметров к виду макета
  const { day, month, hour, minute } = getDateParams(created_at);
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
        {day} {month} {hour}:{minute}
      </div>
    </div>
  );
};

export default ImageNews;
