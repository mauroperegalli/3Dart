import styled from "styled-components";

export const BigContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media (max-width: 820px) {
    height: 80vh;
  }
`;

export const CardContainerStyled = styled.div`
  display: flex;
  background-color: #1a659e;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  flex-direction: row;
  padding: 30px;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid white;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    width: auto;
    height: auto;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
    width: auto;
    height: auto;
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    font-weight: 600;
    font-size: 2em;
  }

  p{
    font-size: 2em;
    font-weight: 800;
  }

  img{
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;

export const SeparationDivStyled = styled.div`
  background-color: black;
  width: 1px;
  height: 400px;
  @media (max-width: 640px) {
    display: none;
  }
  @media (max-width: 820px) {
    display: none;
  }
`;
