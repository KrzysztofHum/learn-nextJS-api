import React from "react";

const BookItem = ({ name, description, id }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
};

export default BookItem;
