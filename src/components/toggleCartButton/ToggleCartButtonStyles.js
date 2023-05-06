import styled from "styled-components";

export const CartButtonStyled = styled.button`
  scale: 2;
  border: 2px solid #004e89;
  background-color: transparent;
  color: #1a659e;
  padding: 10px;
  cursor: pointer;
  border-radius: 100%;
  transition: all 1s ease;
  :hover {
    transform: scale(1.7);
  }
`;

export const BtnContainerStyled = styled.div`
  background-color: transparent;
  position: fixed;
  right: 5%;
  top: 80%;
`;
