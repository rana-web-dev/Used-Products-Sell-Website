import React from "react";
import {ToastContainer,toast} from 'react-toastify'; 

const AddAProduct = () => {

    const addProductHandle = (event) => {
        event.preventDefault();
        
    }

  return (
    <div className="hero">
        <ToastContainer/>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full">
          <form onSubmit={addProductHandle} className="card-body w-96">
            <div className="form-control">
              <label className="text-md label">
              Product Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="text-md label">
              Price
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full mt-5">
              <label className="text-md label">
              Condition:
              </label>
              <select className="select select-bordered">
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
            <div className="form-control">
              <label className="text-md label">
              Phone
              </label>
              <input
                type="number"
                placeholder="Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full mt-5">
              <label className="text-md label">
                Location:
              </label>
              <select className="select select-bordered">
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
                <option value="gazipur">Gazipur</option>
              </select>
            </div>
            <div className="form-control w-full mt-5">
              <label className="text-md label">
              Category:
              </label>
              <select className="select select-bordered">
                <option value="dell">Dell</option>
                <option value="hp">HP</option>
                <option value="acer">Acer</option>
              </select>
            </div>
            <div className="form-control w-full mt-5">
              <label className="text-md label">
              Year of purchase:
              </label>
              <input
                type="text"
                placeholder="Year of purchase"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="text-md label">
              description
              </label>
              <textarea className="border border-gray-400" cols='20' rows='4'></textarea>
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
