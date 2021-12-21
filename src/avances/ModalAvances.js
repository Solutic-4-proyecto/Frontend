import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCreateAvance } from "./custom-hooks";

import "../compartidos/compartidos-estilos.css";

export default function ModalAvances({ isOpen, close, avance }) {
  const [isUpdate, setIsUpdate] = useState(false);

  const [createAvance] = useCreateAvance();

  if (avance) {
    setIsUpdate(true);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const crear = (avance) => {
    createAvance({ variables: { avance } });
    close();
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal show={isOpen} onHide={close} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{isUpdate ? "Actualizar Avance" : "Crear Avance"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(crear)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="5">
              <Form.Label>Id Proyecto</Form.Label>
              <Form.Control type="text" {...register("idProyecto")} />
            </Form.Group>
            <Form.Group as={Col} md="5">
              <Form.Label>Fecha Avance</Form.Label>
              <Form.Control type="date" {...register("fechaAvance")} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="p-r-50px">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" {...register("descripcion")} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="p-r-50px">
              <Form.Label>Observaciones</Form.Label>
              <Form.Control type="text" {...register("observaciones")} />
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
