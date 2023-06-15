import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Home";
import ContactPage from "../pages/Contacts";
import ProjectPage from "../pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
]);

export default router;
