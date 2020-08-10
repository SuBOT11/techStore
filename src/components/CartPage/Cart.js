import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

import React from "react";
export default function Cart() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center></Title>
      </div>
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  );
}
