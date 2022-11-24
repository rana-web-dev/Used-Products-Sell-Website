import React from "react";
import './nav.css';
import { Link } from 'react-router-dom';
import Banner from "../banner/Banner";
import BannerBg from "../../../assets/images/banner-bg.orig";

const Nav = () => {

    // Nav Link List
    const nav = <>
        <li><Link to=''>Home</Link></li>
        <li><Link to=''>About</Link></li>
        <li><Link to=''>Content</Link></li>
        <li><Link to=''>Products</Link></li>
    </>
 
  return (
    <div style={{ 
      backgroundImage: `url(${BannerBg}), linear-gradient(to left, #6e6e6e, #101010)` 
    }}>
      <div>
        <div className="navbar justify-between max-w-6xl mx-auto">
          <div className="navbar-start justify-between">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {nav}
              </ul>
            </div>
            <h2 className="text-3xl font-semibold">Laptop Bazar</h2>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {nav}
            </ul>
          </div>
        </div>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Nav;
