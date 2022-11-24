import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [brandsProducts, setBrandsProducts] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrandsProducts(data));
  }, []);
  return (
    <div className="bg-orange-300">
      <div className="grid gap-10 grid-cols-3 py-20 max-w-6xl mx-auto">
        {brandsProducts?.map((brand) => (
          <div className="card bg-base-100 shadow-xl image-full" key={brand._id}>
            <figure>
              <img src={brand.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{brand.brand}</h2>
              <p>
                {brand.des}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/${brand.brand}/${brand._id}`} className="btn btn-md bg-green-500 border-none">
                  See Collection
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
