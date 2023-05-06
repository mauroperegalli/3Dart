import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { ProductSectionStyled } from "./ProductStyles";
import { products } from "../../data/Products";
import { useParams } from "react-router-dom";
import ToggleCartButton from "../../components/toggleCartButton/ToggleCartButton";

const Product = () => {
  const { id } = useParams();

  return (
    <ProductSectionStyled>
      <ProductCard props={products[id]} />
      <ToggleCartButton/>
    </ProductSectionStyled>
    
  );
};

export default Product;
