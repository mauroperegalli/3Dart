import styled from "styled-components";

export const CategoryContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  gap: 30px;
  padding: 50px;

  background-color: #edf2f4;

  h3 {
    font: 30px;
  }

  @media (max-width: 640px) {
    padding: 0px;
  }

  @media (max-width: 820px) {
    padding: 0px;
    height: auto;
  }
`;

export const ItemsContainerStyled = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    justify-content: center;
  }
  @media (max-width: 820px) {
    justify-content: center;
  }
`;
