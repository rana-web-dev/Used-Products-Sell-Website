import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const MyOrder = () => {
  // use react query to my order data load
  const { data: myOrders, refetch } = useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
      const res = await fetch("https://resale-server-seven.vercel.app/bookNow");
      const data = res.json();
      return data;
    },
  });

  // delete my order data
  const deleteOrder = (order) => {
    fetch(`https://resale-server-seven.vercel.app/deleteOrder/${order._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };

  return (
    <div className="p-5">
      <div className="text-center my-5">
        <h2 className="text-3xl my-5">My Order: {myOrders?.length}</h2>
        {console.log(myOrders)}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {myOrders?.map((order) => (
            <div key={order._id}>
              <div className="card bg-base-100 border">
                <div className="card-body">
                  <img src={order.image} alt="" />
                  <h2 className="card-title">Product: {order.productName}</h2>
                  <p className="text-md">Price: {order.resalePrice} tk</p>
                  <div className="justify-between">
                    <button
                      onClick={() => deleteOrder(order)}
                      className="bg-orange-500 btn btn-sm border-none justify-start"
                    >
                      Cancel
                    </button>
                    <Link to="/dashboard/payment">
                      <button className="btn btn-sm justify-end ml-3 bg-blue-500 border-none">
                        Pay
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
