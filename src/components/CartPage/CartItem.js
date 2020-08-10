import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

import { FaTrash } from "react-icons/fa";
export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem,
}) {
  const { id, title, price, count, total, image } = cartItem;

  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="60" className="img-fluid" alt="product" />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaArrowCircleDown
              onClick={() => {
                decrement(id);
              }}
              className=" cart-icon text-primary"
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaArrowCircleUp
              onClick={() => increment(id)}
              className="cart-icon text-primary"
            />
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <FaTrash
          className="text-danger cart-icon"
          onClick={() => removeItem(id)}
        ></FaTrash>
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price:</span>
        {price}
      </div>
    </div>
  );
}
