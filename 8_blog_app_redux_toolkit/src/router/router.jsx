import { createBrowserRouter } from "react-router-dom";
import Home from "./../Home/Home";
import Blog from "../Home/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog/:blogId",
    element: <Blog />,
  },
]);

export default router;
