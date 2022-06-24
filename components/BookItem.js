import React from "react";
import classes from "../styles/Books.module.css";

const BookItem = ({ name, description, id }) => {
  return (
    <li className={classes.listItem}>
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
};

export default BookItem;
