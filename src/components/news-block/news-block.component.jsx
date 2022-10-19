import React from "react";
import "./news.block.styles.scss";
import Title from "../title/title.component";
import ImageNews from "../image-news/image-news.component";
import dataNews from "../../redux/static-data.json";

// Компонент в котором отображаются первые 2 новости (насколько я понял)
const NewsBlock = () => {
  const response = dataNews.data.vk;



  return (
    <div className="news-block">
      <Title>Новости</Title>
      <div className="news-block__image-container">
        <ImageNews />
        <ImageNews />
      </div>
    </div>
  );
};

export default NewsBlock;
