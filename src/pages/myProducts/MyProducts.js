import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../title/title";

const MyProducts = () => {
  // use react query to data load
  const { data: allProducts } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allProducts");
      const data = res.json();
      return data;
    },
  });

  useTitle("My Products");
  return (
    <div>
      <div className="text-center mt-10">
        <h2 className="text-3xl">My Products: {allProducts?.length}</h2>
      </div>
      <div className="flex">
        {allProducts?.map((product) => (
          <div key={product._id}>
            {console.log(product)}
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <h2 className="card-title">{product.price}</h2>
                <h2 className="card-title">{product.condition}</h2>
                <h2 className="card-title">{product.phone}</h2>
                <h2 className="card-title">{product.category}</h2>
                <h2 className="card-title">{product.purchaseYear}</h2>
                <h2 className="card-title">{product.location}</h2>
                <h2 className="card-title">{product.description}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
