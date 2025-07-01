import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage, { coursesLoader } from "./pages/Courses";
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLayout";
import FaqPage from "./pages/help/Faq";
import ContactPage from "./pages/help/Contact";
import CourseDetailsPage, {
  courseDetailsLoader,
} from "./pages/CourseDetailsPage";
import CourseLayout from "./layouts/CourseLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "courses",
        element: <CourseLayout/>,
        children: [
          { index: true, element: <CoursesPage />, loader: coursesLoader },
          {
            path: ":courseid",
            element: <CourseDetailsPage />,
            loader: courseDetailsLoader,
          },
        ],
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { path: "contact", element: <ContactPage /> },
          { path: "faq", element: <FaqPage /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
