import styled from "styled-components";

export const CartContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
  margin-bottom: 40px;
  @media (max-width: 820px) {
    height: 600px;
  }
`;

export const CartDataContainerStyled = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  background-color: #1a659e;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;

  @media (max-width: 640px) {
    width: auto;
  }

  @media (max-width: 820px) {
    justify-content: center;
  }
`;

export const CartTitleStyled = styled.p`

  font-weight: 800;
  font-size: 40px;
`;


export const ItemInCartCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  width: 80%;

  img {
    border-radius: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 1px solid white;
  }

  @media (max-width: 640px) {
    width: 95%;
  }
`;
export const ItemsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10px;
  height: auto;
  justify-content: center;
  align-items: center;
`;


export const QuantityStyled = styled.p`
  font-weight: 600;
`;

export const QuantityHandlerStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: auto;
  align-items: center;
  justify-content: space-evenly;
`;


export const DisplayFlexDiv = styled.div`
  display: flex;
  gap: 40px;
  p {
    font-size: 1.4em;
    font-weight: 600;
  }
`;

export const EmptyCartStyled = styled.div`
  display: block;
  margin: 20px;
`;
