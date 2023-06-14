import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/blog/Hello World");
  };
  return (
    <div>
      <h2 className="font-bold">This is the Blog</h2>
      <button
        onClick={clickHandler}
        className="bg-gray-200 p-2 hover:bg-gray-600"
      >
        Show Detail
      </button>

      <Outlet />
    </div>
  );
};

export default BlogPage;
