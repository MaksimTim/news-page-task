import React from "react";
import Title from "../title/title.component";
import "./other-news-block.styles.scss";
import ListItem from "../list-item/list-item.component";
import dataNews from "../../redux/static-data.json";

const OtherNewsBlock = () => {
  const response = dataNews.data.twitter;
  const listArray = response.slice(2);

  return (
    <div className="other-news-block">
      <Title>Другие новости</Title>
      <div className="other-news-block__list">
        {listArray.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OtherNewsBlock;
