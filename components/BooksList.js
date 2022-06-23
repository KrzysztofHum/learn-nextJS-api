import React, { useEffect } from "react";
import BookItem from "./BookItem";

const BooksList = () => {
  const [data, setData] = useState();
  const sendRequest = () => {
    fetch("/api/books/")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <div>
      <ul>
        {data &&
          data.map((item, index) => (
            <BookItem
              description={item.description}
              name={item.name}
              id={item.id}
              key={index}
            />
          ))}
      </ul>
    </div>
  );
};

export default BooksList;
