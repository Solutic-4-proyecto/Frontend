import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useCreateProyecto } from "./custom-hooks";

import "../compartidos/compartidos-estilos.css";

export default function ProyectoModal({ isOpen, close, proyecto }) {
  const [isUpdate, setIsUpdate] = useState(false);

  const [createProyecto] = useCreateProyecto();

  if (proyecto) {
    setIsUpdate(true);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const crear = (proyecto) => {
    console.log("Entre");
    console.log(proyecto);
    createProyecto({ variables: { proyecto } });

    //e.preventDefault();

    /* let usuario = {
      identificacion,
      nombreCompleto,
      correo,
      contrasena,
      rol,
      estado,
    };

    if (isUpdate) {
      updateUsuario({ variables: { _id: data._id, usuario } });
    } else {
     
      setIdentificacion("");
      setNombreCompleto("");
      setCorreo("");
      setContrasena("");
    } */
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal show={isOpen} onHide={close} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{isUpdate ? "Actualizar Proyecto" : "Crear Proyecto"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(crear)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Id Proyecto</Form.Label>
              <Form.Control type="text" {...register("idProyecto")} />
            </Form.Group>
            <Form.Group as={Col} md="7">
              <Form.Label>Nombre Proyecto</Form.Label>
              <Form.Control type="text" {...register("nombreProyecto")} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="p-r-50px">
              <Form.Label>Objetivos Generales</Form.Label>
              <Form.Control type="text" {...register("objetivosGenerales")} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="p-r-50px">
              <Form.Label>Objetivos Específicos</Form.Label>
              <Form.Control type="text" {...register("objetivosEspecificos")} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3">
              <Form.Label>Presupuesto</Form.Label>
              <Form.Control type="text" {...register("presupuesto")} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Fecha de Inicio</Form.Label>
              <Form.Control type="date" {...register("fechaInicio")} />
            </Form.Group>
            <Form.Group as={Col} className="p-r-50px">
              <Form.Label>Fecha de Terminacion</Form.Label>
              <Form.Control type="date" {...register("fechaTerminacion")} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Identificación Lider</Form.Label>
              <Form.Control type="text" {...register("identificacionLider")} />
            </Form.Group>
            <Form.Group as={Col} md="7">
              <Form.Label>Nombre Lider</Form.Label>
              <Form.Control type="text" {...register("nombreLider")} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="5">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" type="text" {...register("estado")}>
                <option value="Inactivo">Inactivo</option>
                <option value="Activo">Activo</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Fase Proyecto</Form.Label>
              <Form.Control as="select" {...register("faseProyecto")}>
                <option value="Sin Iniciar">Sin Iniciar</option>
                <option value="Analisis">Analisis</option>
                <option value="En Desarrollo">En Desarrollo</option>
                <option value="Terminado">Terminado</option>
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
