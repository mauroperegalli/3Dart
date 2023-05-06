import React from "react";
import {
  CardContainerStyled,
  CardStyled,
  HeroContainerStyled,
  HeroHeaderContainerStyled,
} from "./HeroStyles";
import { products } from "../../data/Products";
import { LinkStyled } from "../link/linkStyles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

const Hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <HeroContainerStyled>
      <HeroHeaderContainerStyled>
        <h1> Todo lo nuevo en impresiones 3D </h1>
        <h2>Si no ves algo en el catalogo, pedilo que te lo cotizamos!</h2>
        <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              navigate("prize");
            }}
          >
            Cotizar
          </Button>
      </HeroHeaderContainerStyled>

      <CardContainerStyled>
        {products.map((product) => {
          return (
            <CardStyled key={product.id}>
              <LinkStyled to={`/product/${product.id - 1}`}>
                <img src={require(`../../data${product.img}`)} alt="imagen" />
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <p>${product.price}</p>
              </LinkStyled>
              <Button
                variant="contained"
                color="success"
                onClick={() => dispatch(addToCart(product.id))}
              >
                Agregar al carrito
              </Button>
            </CardStyled>
          );
        })}
      </CardContainerStyled>
    </HeroContainerStyled>
  );
};

export default Hero;
