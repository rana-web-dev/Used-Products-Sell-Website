import React from "react";
import { toast } from "react-toastify";

const BookNowModal = ({ user, products }) => {
  const submit = (event) => {
    event.preventDefault();

    // get book input field value
    const form = event.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const productName = form.productName.value;
    const resalePrice = form.resalePrice.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const image = form.image.value;

    // book input value make object to post on database
    const bookNow = {
      userName: userName,
      userEmail: userEmail,
      productName: productName,
      resalePrice: resalePrice,
      phone: phone,
      location: location,
      image: image,
    };

    // post on database book now data
    fetch("https://resale-server-seven.vercel.app/bookNow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookNow),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    toast.success("Booked Successfully.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <input type="checkbox" id="book-now-modal" className="modal-toggle" />
          <div className="modal">
            <form onSubmit={submit} className="modal-box">
              <input name="image" value={product.image} />
              <input
                name="userName"
                type="text"
                value={user?.displayName}
                disabled
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <input
                name="userEmail"
                type="text"
                value={user?.email}
                disabled
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <input
                name="productName"
                type="text"
                value={product.name}
                disabled
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <input
                name="resalePrice"
                type="text"
                value={product.resalePrice}
                disabled
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <input
                name="phone"
                type="number"
                placeholder="Phone"
                required
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <input
                name="location"
                type="text"
                placeholder="Location"
                required
                className="input input-bordered w-full max-w-xs"
              />
              <div className="modal-action flex justify-between">
                <label>
                  <button className="btn btn-sm bg-green-500 border-none">
                    Submit
                  </button>
                </label>
                <label
                  htmlFor="book-now-modal"
                  className="btn btn-sm bg-red-500 border-none"
                >
                  Cancel
                </label>
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookNowModal;
