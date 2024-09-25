import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddNewJob from "../Pages/AddNewJob";
import EditJob from "../Pages/EditJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addNewJob",
    element: <AddNewJob />,
  },
  {
    path: "/editJob/:jobId",
    element: <EditJob />,
  },
]);

export default router;
