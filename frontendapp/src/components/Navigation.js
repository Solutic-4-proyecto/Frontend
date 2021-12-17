import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

export default function Navigation() {

  const { logout }=useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand>Solutic 4.0 APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={NavLink}to={routes.home}>Inicio</Nav.Link>
          <Nav.Link as={NavLink}to={routes.proyectos}>Proyectos</Nav.Link>
          <Nav.Link as={NavLink}to={routes.inscripciones}>Inscripciones</Nav.Link>
          <Nav.Link as={NavLink}to={routes.avances}>Avances</Nav.Link>
          <Nav.Link as={NavLink}to={routes.admin.usuarios}>Usuarios</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as= {NavLink}to={routes.login}>Iniciar Sesión</Nav.Link>
          <Nav.Link as= {NavLink}to={routes.register}>Registrarse</Nav.Link>
          <Nav.Link as= {NavLink}to={routes.account}>Mi Cuenta</Nav.Link>
          <Nav.Link as= {NavLink} to={routes.home} onClick={logout}>Salir</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
