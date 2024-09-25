import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addBook",
    element: <AddBook />,
  },
  {
    path: "/editBook/:bookId",
    element: <EditBook />,
  },
]);

export default router;
