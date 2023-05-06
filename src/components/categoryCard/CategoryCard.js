import { Card } from "@mui/material";
import React from "react";
import { InfoContainerStyled } from "./categoryCardStyles";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addToCart } from "../../actions/cartActions";

const CategoryCard = (props) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <InfoContainerStyled>
        <img src={require(`../../data${props.props.img}`)} alt={props.props.name} />
        <h3>{props.props.name}</h3>
        <p>${props.props.price}</p>
        <p>{props.props.desc}</p>
        <Button
            variant="contained"
            color="success"
            onClick={() => dispatch(addToCart(props.props.id))}
          >
            Agregar al Carrito
          </Button>
      </InfoContainerStyled>
    </Card>
  );
};

export default CategoryCard;
