import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../../../context/AuthProvider";
import useAdmin from "../../../hook/isAdmin";
import useBuyer from "../../../hook/isBuyer";
import useSeller from "../../../hook/isSeller";
import Nav from "../nav/Nav";

const Dashboard = () => {
  const { user } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <Nav></Nav>
      <div className="max-w-6xl mx-auto">
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-52 border-r-2 text-base-content">
              {isAdmin && (
                <>
                  <li>
                    <Link to='/dashboard/allSeller'>All Sellers & Buyers</Link>
                  </li>
                </>
              )}
              {isBuyer && (
                <li>
                  <Link to='/dashboard/myOrders'>My Orders</Link>
                </li>
              )}
              {isSeller && (
                <li>
                  <Link to="/dashboard/addProduct">Add A Product</Link>
                  <Link to="/dashboard/myProducts">My Product</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
