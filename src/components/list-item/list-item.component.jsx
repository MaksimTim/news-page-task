import React from "react";
import "./list-item.styles.scss";

const ListItem = ({item}) => {
  const {text, created_at} = item;

  return (
    <div className="list-item">
      <div className="list-item__date">{created_at}</div>
      <div className="list-item__title">{text}</div>
    </div>
  );
};

export default ListItem;
