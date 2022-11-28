import React from "react";

const Payment = () => {
  return (
    <div className="p-5">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card card-w flex-shrink-0 w-full md:max-w-3xl">
            <form
            //   onSubmit={addProductHandle}
              className="card-body grid grid-cols-1 md:grid-cols-2 w-96 md:w-full"
            >
              <div className="form-control">
                <label className="text-md label">First Name</label>
                <input
                  required
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="text-md label">Last Name</label>
                <input
                  required
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="text-md label">Card info:</label>
                <input
                  required
                  name="card"
                  type="number"
                  placeholder="Card Info"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="text-md label">Expire Date:</label>
                <input
                  required
                  name="expireDate"
                  type="number"
                  placeholder="Expire Date"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control md:col-span-2 ">
                <label className="text-md label">Note:</label>
                <textarea
                  className="border border-gray-400 p-2"
                  placeholder="Note..."
                  cols="20"
                  rows="4"
                  name="note"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
