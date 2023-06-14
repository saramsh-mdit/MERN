import React from "react";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { blogID } = useParams();

  return (
    <div className="grid gap-4 bg-gray-200 rounded p-4 mt-8">
      <p className="font-bold text-blue-600">Detail Page of {blogID}</p>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        delectus quas voluptates amet quo facere! Exercitationem quam vero
        possimus ea suscipit, cumque vel excepturi omnis.
      </div>
    </div>
  );
};

export default BlogDetailPage;
