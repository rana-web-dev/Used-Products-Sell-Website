import React from "react";
import { useLoaderData } from "react-router-dom";

const AcerDetails = () => {
  const acer = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5">
      {acer.map((product) => (
        <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>Original Price: {product.originalPrice}</p>
            <p>Resale Price: {product.resalePrice}</p>
            <p>Post Time: {product.postedTime}</p>
            <p>Seller Name: {product.sellerName}</p>
            <p>Year of Used: {product.yearsOfUse}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcerDetails;
