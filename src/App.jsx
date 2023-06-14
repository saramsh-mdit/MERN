import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import BlogDetailPage from "./pages/BlogDetail";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
        children: [
          {
            path: ":blogID",
            element: <BlogDetailPage />,
          },
        ],
      },
    ],
  },
]);
