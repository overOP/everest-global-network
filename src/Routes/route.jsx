import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import StudyAbroad from "../pages/StudyAbroad";
import Contact from "../pages/Contact";
import ContactSection from "../components/Home/ContactSection";
import Ielts from "../components/services/classes/ielts";
import Pte from "../components/services/classes/Pte";
import Duolingo from "../components/services/classes/Duolingo";
import Japanese from "../components/services/classes/Japanese";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/study-abroad",
        element: <StudyAbroad />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/ielts",
        element: <Ielts />,
      },
      {
        path: "/pte",
        element: <Pte />,
      },
      {
        path: "/duolingo",
        element: <Duolingo />,
      },
      {
        path: "/japanese",
        element: <Japanese />,
      },
    ],
  },
]);
