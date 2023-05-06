import React from "react";
import { useSelector } from "react-redux";
import { BtnContainerStyled, CartButtonStyled } from "./ToggleCartButtonStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate, Link } from "react-router-dom";
const ToggleCartButton = () => {
  const state = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
  <Link to= "/cart">
    <BtnContainerStyled>
      {state.cart.length ? (
        <CartButtonStyled onClick={() => navigate("cart")}>
          {" "}
          <ShoppingCartIcon />{" "}
        </CartButtonStyled>
      ) : null}
    </BtnContainerStyled>
  </Link>
  );
};

export default ToggleCartButton;
