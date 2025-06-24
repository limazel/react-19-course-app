import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage from "./pages/Courses";
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLayout";
import FaqPage from "./pages/help/FaqPage";
import ContactPage from "./pages/help/ContactPage";


const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "courses", element: <CoursesPage /> },
      {
        path: "help",
        element: <HelpLayout/>,
        children: [
          { path: "contact", element: <ContactPage/>},
          { path: "faq", element: <FaqPage/>}
        ]
      }
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
