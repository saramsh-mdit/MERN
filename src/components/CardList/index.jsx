import React, { useEffect } from "react";
import axios from "axios";

const LIMIT = 10;

export default function CardList() {
  const [post, setPost] = React.useState([]);
  const [currentPagination, setCurrentPagination] = React.useState(1);
  const endPosition = LIMIT * currentPagination;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const MapFunction = (item) => {
    return (
      <div key={item.id}>
        <p>
          {item.id} - <b>userID: {item.userId}</b>
        </p>
        <p>{item.title}</p>
      </div>
    );
  };
  const generatePagination = (array) => {
    const SIZE = Math.ceil(array.length / LIMIT);
    const paginationArray = [];
    for (let a = 1; a <= SIZE; a++) {
      paginationArray.push(a);
    }
    return paginationArray;
  };

  return (
    <div>
      <h2>Card List</h2>
      {post && (
        <>
          <p>Current Index : {currentPagination}</p>
          {post.slice(endPosition - LIMIT, endPosition).map(MapFunction)}

          <div className="flex">
            {generatePagination(post).map((item, index) => {
              return (
                <button key={index} onClick={() => setCurrentPagination(item)}>
                  {item}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
