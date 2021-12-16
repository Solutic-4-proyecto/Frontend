import { useEffect } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import cambiarClaveResolver from "../validations/cambiarClaveResolver";

export default function CambiarClaveModal({ isOpen, close }) {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm({resolver:cambiarClaveResolver});

  const onSubmit = (formData) => {
    alert("Cambiando contraseña");
  };

  useEffect(()=>{
    if(!isOpen){
        reset()
    }
  },[isOpen,reset])

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Contraseña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nueva Contraseña</Form.Label>
            <Form.Control
              placeholder="Ingrese una nueva contraseña"
              {...register("password")}
              type="password"
            />
            {errors?.password && (
              <Form.Text>
                <Alert variant="danger">{errors.password.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          Cambiar Contraseña
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
