import { Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useAuth from "../auth/useAuth";
import useModal from "../compartidos/hooks/useModal";
import CambiarClaveModal from "./CambiarClaveModal";
import EditUsuarioModal from "./EditUsuarioModal";

export default function AccountPage() {
  const { user } = useAuth();
//changedot
  const [
    isOpenCambiarClaveModal,
    openCambiarClaveModal,
    closeCambiarClaveModal,
  ] = useModal();
  const [isOpenEditUsuarioModal, openEditUsuarioModal, closeEditUsuarioModal] =
    useModal();

  return (
    <Fragment>
      <Container>
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <img
              src="/img/male_avatar.svg"
              alt="Perfil de Usuario"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col className="mt-4">
            <Card style={{ maxWidth: "360px" }} className="mx-auto p-4">
            <p className="text-center">
                <b>Identificación: </b>
                {user.identificacion}
              </p>
              
              <p className="text-center">
                <b>Nombre Usuario: </b>
                {user.name}
              </p>
              <p className="text-center">
                <b>Correo: </b>
                {user.email}
              </p>
              <p className="text-center">
                <b>Rol: </b>
                {user.role}
              </p>
              <Button variant="warning" onClick={openEditUsuarioModal} className="mt-1">
                Editar Cuenta
              </Button>
              <Button variant="link" onClick={openCambiarClaveModal}>
                Cambiar Contraseña
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <CambiarClaveModal
        isOpen={isOpenCambiarClaveModal}
        close={closeCambiarClaveModal}
      />

      <EditUsuarioModal
        isOpen={isOpenEditUsuarioModal}
        close={closeEditUsuarioModal}
        user={user}
      />
    </Fragment>
  );
}
