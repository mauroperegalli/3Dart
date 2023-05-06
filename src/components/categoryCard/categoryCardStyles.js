import styled from "styled-components";

export const CategoryCardStyled = styled.div`
  width: 200px;
  height: 350px;
  background-color: #1a659e;

  border-radius: 6px;
  border: 1px solid black;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 300px;
  height: 500px;
  align-items: center;
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
