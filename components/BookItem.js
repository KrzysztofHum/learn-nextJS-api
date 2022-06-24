import Image from "next/image";
import React from "react";
import classes from "../styles/Books.module.css";

const BookItem = ({ name, description, imgUrl, id }) => {
  return (
    <li className={classes.listItem}>
      <Image src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
};

export default BookItem;
