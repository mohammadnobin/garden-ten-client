import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import SingIn from "../pages/SingIn";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About";
import Users from "../pages/Users";
import Loading from "../components/Loading";
import TipsPage from "../pages/TipsPage";
import ExploreGardeners from "../pages/ExploreGardeners";
import ShareTips from "../pages/ShareTips";
import Myitps from "../pages/Myitps";

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
        loader: ()=> fetch('https://garden-server-beige.vercel.app/users'),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoutes><Users></Users></PrivateRoutes>
      },
      {
        path: '/share-tips',
        element:<PrivateRoutes>
          <ShareTips />
        </PrivateRoutes> 
      },
      {
        path: '/my-tips',
        element: <PrivateRoutes><Myitps /></PrivateRoutes>
      },
      {
        path: '/tips',
        loader: ()=> fetch('http://localhost:3000/tips'),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoutes><TipsPage></TipsPage></PrivateRoutes>
      },
      {
        path: '/explore-gradenars',
        loader: ()=> fetch('http://localhost:3000/profile'),
        hydrateFallbackElement: <Loading></Loading>,
        element: <ExploreGardeners/>
      }
    ],
  },
]);
