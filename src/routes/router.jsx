import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import TutorialsPage from "../pages/TutorialsPage";
import Works from "../pages/Works";
import ContactPage from "../pages/ContactPage";

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
        element: <ContactPage />,
      },
      {
        path: "tutorials",
        element: <TutorialsPage />,
      },
      {
        path: "works",
        element: <Works />,
      },
    ],
  },
]);

export default router;
