import React from "react";
import { toast } from 'react-toastify';

const BookNowModal = ({user, products}) => {

  const submit = event => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    toast.success("Submit Successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  return (
    <div>
      {
        products.map(product => <>
        
        <input type="checkbox" id="book-now-modal" className="modal-toggle" />
      <div className="modal">
        <form onSubmit={submit}  className="modal-box">
        <input type="text" value={user?.displayName} disabled className="input input-bordered w-full max-w-xs mb-3" />
        <input type="text" value={user?.email} disabled className="input input-bordered w-full max-w-xs mb-3" />
        <input type="text" value={product.name} disabled className="input input-bordered w-full max-w-xs mb-3" />
        <input type="text" value={product.resalePrice} disabled className="input input-bordered w-full max-w-xs mb-3" />
        <input type="number" placeholder="Phone" required  className="input input-bordered w-full max-w-xs mb-3" />
        <input type="text" placeholder="Location" required className="input input-bordered w-full max-w-xs" />
          <div className="modal-action flex justify-between">
            <label>
              <button className="btn btn-sm bg-green-500 border-none">Submit</button>
            </label>
            <label htmlFor="book-now-modal" className="btn btn-sm bg-red-500 border-none">
              Cancel
            </label>
          </div>
        </form>
      </div>
        </>)
      }
    </div>
  );
};

export default BookNowModal;
