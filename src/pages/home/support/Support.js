import React from "react";
import Find from '../../../assets/images/find.jpg';

const Support = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between">
            <div>
            <img
              src={Find}
              alt=''
              className="max-w-sm rounded-lg shadow-2xl"
            />
            </div>
            <div>
              <h1 className="text-5xl font-bold">How Can We Help?</h1>
              <p className="py-6">
              <input type="text" placeholder="Help me find something" className="input input-bordered input-accent w-full max-w-xs" />
              </p>
              <button className="btn btn-primary btn-wide">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
