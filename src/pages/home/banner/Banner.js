import React from "react";
import bannerImage from '../../../assets/images/image.orig';

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="hero">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <div>
          <img
            src={bannerImage}
            alt=''
            className="max-w-sm rounded-lg shadow-2xl"
          />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white">Future is now - New <br/> HPE ProLiant Gen11 <br/> Servers</h1>
            <p className="py-6 text-2xl text-white">
            Power business innovation with compute engineered for your hybrid world: a cloud operating experience, built-in security, and optimised performance.
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
