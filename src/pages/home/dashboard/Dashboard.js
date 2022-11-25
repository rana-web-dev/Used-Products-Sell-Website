import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../context/AuthProvider";
import useAdmin from "../../../hook/isAdmin";
import useBuyer from "../../../hook/isBuyer";

const Dashboard = () => {
  const { user } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  console.log(isBuyer);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
                  <Link>My orders</Link>
                </li>
                <li>
                  <Link>Add A product</Link>
                </li>
              </>
            )}
            {isBuyer && (
              <li>
                <Link>My orders</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
