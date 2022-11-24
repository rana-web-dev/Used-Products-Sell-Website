import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-500">
      <footer className="footer max-w-6xl mx-auto p-10 text-neutral-content">
        <div>
          <span className="text-white text-md font-bold">Shop Address</span>
          <p className="link link-hover">
            Shop-975, 976, Level-09 Multiplan Center New Elephant Road, Dhaka -
            1205
          </p>
          <p>Laptop: 01625478631</p>
        </div>
        <div>
          <span className="text-white text-md font-bold">Sell Authorized Service Center</span>
          <p className="link link-hover">
            Level-13, Multiplan Center, New Elephant Road, Dhaka-1205
          </p>
          <p>017896582364</p>
        </div>
        <div>
          <span className="text-white text-md font-bold">Stay With Us</span>
          <Link className="link link-hover">Facebook</Link>
          <Link className="link link-hover">Twitter</Link>
          <Link className="link link-hover">Instagram</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;


