import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../layout/Home";
import Main from "../../layout/Main";
import BrandCollection from "../../pages/brandCollection/BrandCollection";

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
        path: "/brands/:id",
        loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`),
        element: <BrandCollection></BrandCollection>
      },
    ],
  },
]);

export default router;
