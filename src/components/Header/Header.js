import React from "react";
import "./Header.css";
import { Container, Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <div className="top">
      <Navbar bg="light" expand="lg">
        <Container>
          <NavbarBrand>
            <h1>Control de Proyectos</h1>
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
