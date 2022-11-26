import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";
import BookNowModal from "../shared/bookNowModal/BookNowModal";

const BrandCollection = () => {

  const {user} = useContext(authContext);

  const [productsDetails, setProductsDetails] = useState();
  const products = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {products.map((product) => (
        <div key={product._id} className="card mx-auto w-96 bg-base-100 shadow-xl">
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
              <label onClick={() => setProductsDetails(product)} htmlFor="book-now-modal" className="btn btn-sm">
                Book Now
              </label>
            </div>
          </div>
        </div>
      ))}
      {
        productsDetails && <BookNowModal user={user} products={products}></BookNowModal>
      }
    </div>
  );
};

export default BrandCollection;
