import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Tutorials from "../pages/Tutorials";
import Works from "../pages/Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "tutorials",
        element: <Tutorials />,
      },
      {
        path: "works",
        element: <Works />,
      },
    ],
  },
]);

export default router;
