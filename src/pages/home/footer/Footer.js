import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-500">
      <footer className="footer max-w-6xl mx-auto p-10 text-neutral-content">
        <div>
          <span className="footer-title">Shop Address</span>
          <p className="link link-hover">
            Shop-975, 976, Level-09 Multiplan Center New Elephant Road, Dhaka -
            1205
          </p>
          <p>Laptop: 016222221111</p>
        </div>
        <div>
          <span className="footer-title">Sell Authorized Service Center</span>
          <p className="link link-hover">
            Level-13, Multiplan Center, New Elephant Road, Dhaka-1205
          </p>
          <p>017141444444</p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
