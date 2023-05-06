import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #edf2f4;
  & h1 {
    font-size: 32px;
    color: #1a659e;
  }
`;

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 60%;
  margin: 20px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    margin: 20px 0px;
  }
`;

export const CardStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 500px;
  background-color: #1a659e;
  border-radius: 20px;
  padding: 10px;

  h3{
    color:#efefd0;
    font-size: 1.2em;
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: 640px) {
    img {
      width: 200px;
      height: 200px;
    }
    height: 380px;
    width: 200px;
  }
`;

export const VerTodoButtonStyled = styled.button`
  border: none;
  color: #ba181b;
  cursor: pointer;
  margin: 20px;
`;

export const InputSearchStyled = styled.input`
  border: none;
  height: fit-content;
  border-bottom: 1px solid #ba181b;
  padding: 5px 17px 5px 10px;
  border-radius: 15px;
`;

export const HeroHeaderContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const CategoriesContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

export const CategoryStyled = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 40%;
  border: 1px dotted #ba181b;
`;
