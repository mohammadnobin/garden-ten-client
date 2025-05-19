import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import SingIn from "../pages/SingIn";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About";
import Users from "../pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SingIn />,
      },
      {
        path: '/about',
        element: <PrivateRoutes><About></About> </PrivateRoutes>
      },
      {
        path: '/users',
        loader: ()=> fetch('http://localhost:3000/users'),
        hydrateFallbackElement: <h2>Loading</h2>,
        element: <PrivateRoutes><Users></Users></PrivateRoutes>
      }
    ],
  },
]);
