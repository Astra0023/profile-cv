import MainLayout from "../components/MainLayout";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router";
import { Project } from "../pages/projects/Project";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },
      {
        path: "projects",
        element: <Project />,
      },
    ],
  },
]);

export default routes;
