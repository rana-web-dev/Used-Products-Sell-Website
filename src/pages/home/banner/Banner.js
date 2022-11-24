import React from "react";
import bannerImage from '../../../assets/images/image.orig';

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="hero">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <div>
          <img
            src={bannerImage}
            alt=''
            className="max-w-sm rounded-lg"
          />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white mt-10">We are used laptop seller<br/> We provide all about laptop.</h1>
            <p className="py-6 text-xl text-white">
            Power business innovation with compute engineered for your hybrid world: a cloud operating experience, built-in security, and optimised performance.
            </p>
            <button className="btn btn-accent btn-wide text-white border-none">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
