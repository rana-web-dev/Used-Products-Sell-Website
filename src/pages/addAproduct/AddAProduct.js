import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddAProduct = () => {
  const [condition, setCondition] = useState("Excellent");
  const [location, setLocation] = useState("Dhaka");
  const [category, setCategory] = useState("Dell");

  const addProductHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const purchaseYear = form.purchaseYear.value;
    const description = form.description.value;

    const addProductFieldValue = {
      productName,
      price,
      condition,
      phone,
      location,
      category,
      purchaseYear,
      description,
    };

    console.log(
      productName,
      price,
      condition,
      phone,
      location,
      category,
      purchaseYear,
      description
    );

    fetch("http://localhost:5000/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProductFieldValue),
    })
      .then(res => res.json())
      .then(data => console.log(data));


    // window.location.replace("/dashboard/myProducts");
    toast.success("Product Add Successfully.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="hero">
      <ToastContainer />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full">
          <form
            onSubmit={addProductHandle}
            className="card-body grid grid-cols-1 md:grid-cols-4 w-96 md:w-full"
          >
            <div className="form-control">
              <label className="text-md label">Product Name</label>
              <input
                name="productName"
                type="text"
                placeholder="Product Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="text-md label">Price</label>
              <input
                name="price"
                type="number"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full ">
              <label className="text-md label">Condition:</label>
              <select
                className="select select-bordered"
                onChange={(event) => setCondition(event.target.value)}
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
            <div className="form-control">
              <label className="text-md label">Phone</label>
              <input
                name="phone"
                type="number"
                placeholder="Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full ">
              <label className="text-md label">Location:</label>
              <select
                className="select select-bordered"
                onChange={(event) => setLocation(event.target.value)}
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Gazipur">Gazipur</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="text-md label">Category:</label>
              <select
                className="select select-bordered"
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="Dell">Dell</option>
                <option value="Hp">HP</option>
                <option value="Acer">Acer</option>
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="text-md label">Year of purchase:</label>
              <input
                name="purchaseYear"
                type="text"
                placeholder="Year of purchase"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="text-md label">description</label>
              <textarea
                className="border border-gray-400"
                cols="20"
                rows="4"
                name="description"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;
