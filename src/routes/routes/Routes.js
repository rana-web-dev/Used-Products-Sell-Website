import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../layout/Home";
import Main from "../../layout/Main";
import AcerDetails from "../../pages/acerDetails/AcerDetails";
import BrandCollection from "../../pages/brandCollection/BrandCollection";
import DellDetails from "../../pages/dellDetails/DellDetails";

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
        path: "/Hp/:id",
        loader: ({params}) => fetch(`http://localhost:5000/Hp/${params.id}`),
        element: <BrandCollection></BrandCollection>
      },
      {
        path: "/Dell/:id",
        loader: ({params}) => fetch(`http://localhost:5000/Dell/${params.id}`),
        element: <DellDetails></DellDetails>
      },
      {
        path: "/Acer/:id",
        loader: ({params}) => fetch(`http://localhost:5000/Acer/${params.id}`),
        element: <AcerDetails></AcerDetails>
      }
    ],
  },
]);

export default router;
