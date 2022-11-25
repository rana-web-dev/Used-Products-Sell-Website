import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../layout/Home";
import Main from "../../layout/Main";
import AcerDetails from "../../pages/acerDetails/AcerDetails";
import BrandCollection from "../../pages/brandCollection/BrandCollection";
import DellDetails from "../../pages/dellDetails/DellDetails";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signUp/SignUp";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: "/Hp/:id",
        loader: ({params}) => fetch(`http://localhost:5000/Hp/${params.id}`),
        element: <PrivateRoutes><BrandCollection></BrandCollection></PrivateRoutes>
      },
      {
        path: "/Dell/:id",
        loader: ({params}) => fetch(`http://localhost:5000/Dell/${params.id}`),
        element: <PrivateRoutes><DellDetails></DellDetails></PrivateRoutes>
      },
      {
        path: "/Acer/:id",
        loader: ({params}) => fetch(`http://localhost:5000/Acer/${params.id}`),
        element: <PrivateRoutes><AcerDetails></AcerDetails></PrivateRoutes>
      }
    ],
  },
]);

export default router;
