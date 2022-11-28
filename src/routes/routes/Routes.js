import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../layout/Home";
import Main from "../../layout/Main";
import AcerDetails from "../../pages/acerDetails/AcerDetails";
import AddAProduct from "../../pages/addAproduct/AddAProduct";
import AllSeller from "../../pages/allSeller/AllSeller";
import Blogs from "../../pages/blogs/Blogs";
import BrandCollection from "../../pages/brandCollection/BrandCollection";
import DellDetails from "../../pages/dellDetails/DellDetails";
import Dashboard from "../../pages/home/dashboard/Dashboard";
import Login from "../../pages/login/Login";
import MyProducts from "../../pages/myProducts/MyProducts";
import NotFound from "../../pages/notFound/NotFound";
import SignUp from "../../pages/signUp/SignUp";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import MyOrder from "../../pages/myOrders/MyOrder";
import Payment from "../../pages/payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/Hp/:id",
        loader: ({ params }) =>
          fetch(`https://resale-server-seven.vercel.app/Hp/${params.id}`),
        element: (
          <PrivateRoutes>
            <BrandCollection></BrandCollection>
          </PrivateRoutes>
        ),
      },
      {
        path: "/Dell/:id",
        loader: ({ params }) =>
          fetch(`https://resale-server-seven.vercel.app/Dell/${params.id}`),
        element: (
          <PrivateRoutes>
            <DellDetails></DellDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/Acer/:id",
        loader: ({ params }) =>
          fetch(`https://resale-server-seven.vercel.app/Acer/${params.id}`),
        element: (
          <PrivateRoutes>
            <AcerDetails></AcerDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/addProduct",
        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/allSeller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
