import React from "react";
import CartMenu from "../../components/cartMenu/CartMenu";
import { CartContainer } from "./CartStyles";

const Cart = () => {
  return (
    <CartContainer>
      <CartMenu />
    </CartContainer>
  );
};

export default Cart;
