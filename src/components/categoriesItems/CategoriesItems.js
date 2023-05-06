import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CategoryCard from "../categoryCard/CategoryCard";
import { LinkStyled } from "../link/linkStyles";
import {
  CategoryContainerStyled,
  ItemsContainerStyled,
} from "./CategoriesItemsStyles";

const CategoriesItems = (props) => {
  const { category } = useParams();
  const state = useSelector((state) => state.cart);

  return (
    <CategoryContainerStyled>
      <ItemsContainerStyled>
        {state.products.map((item) => {
          if (item.category.toLowerCase() === category) {
            return (
              <LinkStyled to={`/product/${item.id - 1}`} key={item.id}>
                <CategoryCard props={item} />
              </LinkStyled>
            );
          }
        })}
      </ItemsContainerStyled>
    </CategoryContainerStyled>
  );
};

export default CategoriesItems;
