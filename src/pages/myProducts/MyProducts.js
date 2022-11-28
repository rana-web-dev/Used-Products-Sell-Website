import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import useTitle from "../../title/title";

const MyProducts = () => {
  // use react query to data load 1
  const { data: allProducts } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-server-seven.vercel.app/allProducts"
      );
      const data = res.json();
      return data;
    },
  });

  const deleteProduct = (product) => {
    fetch(
      `https://resale-server-seven.vercel.app/deleteProducts/${product._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Product Delete Successfully.", {
            position: toast.POSITION.TOP_CENTER,
          });
          window.location.reload();
        }
      });
  };

  useTitle("My Products");
  return (
    <div>
      <ToastContainer />
      <div className="text-center my-10">
        <h2 className="text-3xl">My Products: {allProducts?.length}</h2>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 m-3">
        {allProducts?.map((product) => (
          <div key={product._id}>
            {console.log(product)}
            <div className="card bg-base-100 border">
              <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <p className="text-md">Price: {product.price} tk</p>
                <p className="text-md">Condition: {product.condition}</p>
                <p className="text-md">Phone: {product.phone}</p>
                <p className="text-md">Category: {product.category}</p>
                <p className="text-md">PurchaseYear: {product.purchaseYear}</p>
                <p className="text-md">Location: {product.location}</p>
                <p className="text-md">Description: {product.description}</p>
                <button
                  onClick={() => deleteProduct(product)}
                  className="bg-orange-500 btn btn-sm border-none"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
