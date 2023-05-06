import React from "react";
import Navbar from "../navbar/Navbar";
import { PageContainerStyled } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageContainerStyled>{children}</PageContainerStyled>  
        </>
  );
};

export default Layout;
