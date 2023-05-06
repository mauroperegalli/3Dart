import {
  ButtonsContainerStyled,
  HoverMenuStyled,
  LogoImg,
  MenuToggleStyled,
  NavbarStyled,
  ResponsiveProductsMenu,
} from "./NavbarStyles";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavbarStyled>
        <LogoImg src="https://www.pnguniverse.com/wp-content/uploads/2020/12/3D-Logo.png" alt="Logo 3D ART"/>

        <ButtonsContainerStyled>
          <MenuToggleStyled>
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Inicio
            </span>
            <span
              onMouseOver={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              Productos
            </span>
            {open && (
              <HoverMenuStyled
                onMouseOver={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <p
                  onClick={() => {
                    navigate("category/mates");
                  }}
                >
                  Mates
                </p>
                <p
                  onClick={() => {
                    navigate("category/posavasos");
                  }}
                >
                  Posavasos
                </p>
                <p
                  onClick={() => {
                    navigate("category/macetas");
                  }}
                >
                  Macetas
                </p>
                <p
                  onClick={() => {
                    navigate("category/funkos");
                  }}
                >
                  Funkopops
                </p>
              </HoverMenuStyled>
            )}

            <span
              onClick={() =>{
                
                  navigate("/about");
                }}
              >
              Contacto
            </span>
            <span
              onClick={() => {
                navigate("prize");
              }}
            >
              Cotizaciones
            </span>
          </MenuToggleStyled>
        </ButtonsContainerStyled>
        <ResponsiveProductsMenu>
          <p
            onClick={() => {
              navigate("category/mates");
            }}
          >
            Mates
          </p>
          <p
            onClick={() => {
              navigate("category/macetas");
            }}
          >
            Macetas
          </p>
          <p
            onClick={() => {
              navigate("category/posavasos");
            }}
          >
            Posavasos
          </p>
          <p
            onClick={() => {
              navigate("category/funkos");
            }}
          >
            Funkopops
          </p>
        </ResponsiveProductsMenu>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
