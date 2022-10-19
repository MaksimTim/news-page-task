import React from "react";
import "./list-item.styles.scss";
import { monthArr } from "../../utils/month-array";
import { getDateParams, textChanger } from "../../utils/utils";

const ListItem = ({ item }) => {
  const { text, created_at } = item;

  //утилиты приведения параметров к виду макета
  const { day, month } = getDateParams(created_at);
  const title = textChanger(text, 100);

  return (
    <div className="list-item">
      <div className="list-item__date">
        {day} {month}
      </div>
      <div className="list-item__title">{title}</div>
    </div>
  );
};

export default ListItem;
