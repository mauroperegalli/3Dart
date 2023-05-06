import React, { useEffect } from "react";
import {
  CartContainerStyled,
  CartDataContainerStyled,
  CartTitleStyled,
  DisplayFlexDiv,
  EmptyCartStyled,
  ItemInCartCardStyled,
  ItemsContainerStyled,
  QuantityHandlerStyled,
  QuantityStyled,
} from "./CartMenuStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../actions/cartActions";
import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



const CartMenu = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const handlePrice = () => {
    setTotalPrice(
      state.cart.reduce((suma, item) => (suma += item.price * item.quantity), 0)
    );
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <CartContainerStyled>
      <CartDataContainerStyled>
        <CartTitleStyled>
          Carrito {" "}
        </CartTitleStyled>

        {state.cart.length ? (
          <ItemsContainerStyled>
            {state.cart.map((item) => {
              return (
                <ItemInCartCardStyled key={item.id}>
                  <img src={require(`../../data${item.img}`)} alt="imagen" />
                  <h4>{item.name}</h4>
                  <QuantityHandlerStyled>
                    <IconButton>
                      <RemoveCircleIcon
                       onClick={() => {
                        dispatch(removeFromCart(item.id));
                      }}
                      />
                    </IconButton>
                    <QuantityStyled>{item.quantity}</QuantityStyled>
                    <IconButton>
                      <AddCircleIcon
                       onClick={() => {
                        dispatch(addToCart(item.id));
                      }}
                      />
                    </IconButton>
                  </QuantityHandlerStyled>
                  <Button variant="contained" color="error" startIcon={<DeleteIcon/>}
                  onClick={() => {
                    dispatch(removeFromCart(item.id, true));
                  }}
                  >
                    Eliminar
                  </Button>
                  <p>${item.price}</p>
                </ItemInCartCardStyled>
              );
            })}
            <DisplayFlexDiv>
              <p>Total: $ {totalPrice}</p>
              <Button
                variant="contained" color="success"
                onClick={() => {
                  dispatch(clearCart());
                  alert("¡Tu compra ya fue despachada!");
                }}
              >
                Finalizar Compra
              </Button>
            </DisplayFlexDiv>
          </ItemsContainerStyled>
        ) : (
          <ItemsContainerStyled>
            <EmptyCartStyled>
              <h3>Carrito vacio </h3>
              <Button
              variant="contained" color="primary"
              onClick={() => navigate("/")}>
                Inicio
              </Button>
            </EmptyCartStyled>
          </ItemsContainerStyled>
        )}

      </CartDataContainerStyled>
    </CartContainerStyled>
  );
};

export default CartMenu;
