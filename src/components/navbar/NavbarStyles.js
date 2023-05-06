import styled from "styled-components";

export const NavbarStyled = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,400;0,600;0,800;1,300;1,400&display=swap');
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: #1a659e;

  span {
    cursor: pointer;
    width: fit-content;
    color: #efefd0;
  }

  @media (max-width: 640px) {
    justify-content: center;
    height: 260px;
  }
`;

export const LogoImg = styled.img`
width: 80px;
height: 80px;
object-fit: contain;
`

export const ResponsiveProductsMenu = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    background: #353535;
    color: black;
    margin-bottom: 40px;
    p {
      font-weight: bold;
      padding: 5px;
    }
  }
`;

export const LinkButtonStyled = styled.button`
  color: #1a659e;
  background-color: transparent;
  border: none;
  margin-right: 15px;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

export const ButtonsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
  width: 70%;
`;

export const MenuToggleStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 0;
  color: #efefd0;
  gap: 100px;
  right: 0;
  bottom: 0;
  text-align: center;
  transition: all 0.6s ease;
  span {
    font-size: 30px;
    font-weight: 600;
  }
  span:hover{
    scale: 1.2;
    transition: all .6s;
    text-decoration: underline;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0px;
    span {
      font-size: 20px;
    }
  }
`;

export const DivStyled = styled.div`
  width: 900px;
  height: 2px;
  background-color: white;
  @media (max-width: 640px) {
    display: none;
  }
`;

export const HoverMenuStyled = styled.div`
  position: absolute;
  background-color: #004e89;
  color: ##efefd0;
  border: 1px solid ##efefd0;
  border-radius: 6px;
  width: 200px;

  display: flex;
  flex-direction: column;

  top: 35px;
  left: 150px;

  p {
    :hover {
      color: black;
    }
    cursor: pointer;
  }
`;
