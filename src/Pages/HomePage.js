import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{span:12}} md={{span:6}} className="mb-5">
          <h2>Bienvenidos al Sistema Gestor de Proyectos. Grupo Solutic 4.0</h2>
          <p>
            Aca podras gestionar los proyectos a los que pretender pertenecer
          </p>
          <p>Adiciona tus avances y gestiona toda la información necesaria</p>
          <Link to="/login">Ingresa</Link> O{" "}
          <Button as={Link} to="/register" className="ml-1">
            Crea una Cuenta
          </Button>
        </Col>
        <Col>
          <img className="img-fluid" src="/img/task-manager.svg" alt="Gestor de Proyectos Solutic 4.0"></img>
        </Col>
      </Row>
    </Container>
  );
}
