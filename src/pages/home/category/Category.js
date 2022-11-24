import React from "react";
import Dell from "../../../assets/images/dell.jpg";
import Hp from "../../../assets/images/hp.png";
import Acer from "../../../assets/images/acer.png";

const Category = () => {
  return (
    <div className="grid gap-10 grid-cols-3 pt-20 max-w-6xl mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={Dell} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dell</h2>
          <p>We have a lot of collection of Dell laptop. See more and choose one then order us.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-purple-500 border-none">See Collection</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={Hp} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">HP</h2>
          <p>Hp is the most popular Brand you know. You need HP laptop just order us. We have collection.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-purple-500 border-none">See Collection </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={Acer} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Acer</h2>
          <p>If you need Acer laptop just See collection then order Us.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-purple-500 border-none">See Collection </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
