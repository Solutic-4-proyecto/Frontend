import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCreateInscripcion } from "./custom-hooks";

import "../compartidos/compartidos-estilos.css";

export default function ModalInscripciones({ isOpen, close, inscripcion }) {
  const [isUpdate, setIsUpdate] = useState(false);

  const [createInscripcion] = useCreateInscripcion();

  if (inscripcion) {
    setIsUpdate(true);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const crear = (inscripcion) => {
    createInscripcion({ variables: { inscripcion } });
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal show={isOpen} onHide={close} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{isUpdate ? "Actualizar Inscripción" : "Crear Inscripción"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(crear)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Id Proyecto</Form.Label>
              <Form.Control type="text" {...register("idProyecto")} />
            </Form.Group>
            <Form.Group as={Col} md="7">
              <Form.Label>IndentificacionEstudiante</Form.Label>
              <Form.Control type="text" {...register("identificacionEstudiante")} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Fecha de Ingreso</Form.Label>
              <Form.Control type="date" {...register("fechaIngreso")} />
            </Form.Group>
            <Form.Group as={Col} className="p-r-50px">
              <Form.Label>Fecha de Egreso</Form.Label>
              <Form.Control type="date" {...register("fechaEgreso")} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="5">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" type="text" {...register("estado")}>
                <option value="Pendiente">Pendiente</option>
                <option value="Aceptada">Aceptada</option>
                <option value="Rechazada">Rechazada</option>
              </Form.Control>
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit(crear)}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
