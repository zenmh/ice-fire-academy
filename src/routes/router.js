import { createBrowserRouter } from "react-router-dom";
import CoursePDF from "../components/CoursePDF";
import Help from "../components/Help";
import ProtectedRoute from "../components/ProtectedRoute";
import Main from "../layouts/Main";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Ragister/Register";
import Blog from "../Pages/Blog/Blog";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profille/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        loader: () =>
          fetch("https://ice-fire-academy-server.vercel.app/courses"),
        element: <Courses />,
      },
      {
        path: "/course_details/:id",
        loader: ({ params }) =>
          fetch(
            `https://ice-fire-academy-server.vercel.app/course/${params.id}`
          ),
        element: <CourseDetails />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      { path: "/help", element: <Help /> },
      {
        path: "/pdf/:id",
        loader: ({ params }) =>
          fetch(
            `https://ice-fire-academy-server.vercel.app/course/${params.id}`
          ),
        element: <CoursePDF />,
      },
      {
        path: "/premium/:id",
        loader: ({ params }) =>
          fetch(
            `https://ice-fire-academy-server.vercel.app/course/${params.id}`
          ),
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
