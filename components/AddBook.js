import React, { useState } from "react";
import classes from "../styles/Form.module.css";

const AddBook = () => {
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    imgUrl: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.formControl}>
        <label htmlFor="name"></label>
        <input
          value={inputs.name}
          onChange={handleChange}
          type="text"
          name="name"
        />
        <label htmlFor="description">Description</label>
        <input
          value={inputs.description}
          onChange={handleChange}
          type="text"
          name="description"
        />
        <label htmlFor="imgUrl">Image URL</label>
        <input
          value={inputs.imgUrl}
          onChange={handleChange}
          type="text"
          name="imgUrl"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
