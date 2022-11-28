import axios from "axios";
import React, { useState } from "react";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState();

  axios.get("http://localhost:5000/bookNow").then((data) => {
    setMyOrders(data.data);
    console.log(data.data);
  });

  const deleteOrder = (order) => {
    fetch(`http://localhost:5000/deleteOrder/${order._id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  

  return (
    <div className="p-5">
      <div className="text-center my-5">
        <h2 className="text-3xl my-5">My Order: {myOrders?.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {myOrders?.map((order) => (
            <div key={order._id}>
              {console.log(order)}
              <div className="card bg-base-100 border">
                <div className="card-body">
                  <h2 className="card-title">Product: {order.productName}</h2>
                  <p className="text-md">Price: {order.resalePrice} tk</p>
                  <div className="justify-between">
                    <button
                        onClick={() => deleteOrder(order)}
                      className="bg-orange-500 btn btn-sm border-none justify-start"
                    >
                      Cancel
                    </button>
                    <button className="btn btn-sm justify-end ml-3 bg-blue-500 border-none">Pay</button>
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
