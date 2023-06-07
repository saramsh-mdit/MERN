import React, { useEffect } from "react";
import axios from "axios";

export default function CardList() {
  const [post, setPost] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Card List</h2>
      {post &&
        post.map((item) => {
          return (
            <div key={item.id}>
              <p>
                <b>userID: {item.userId}</b>
              </p>
              <p>{item.title}</p>
            </div>
          );
        })}
    </div>
  );
}
