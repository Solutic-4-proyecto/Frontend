import { useEffect } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../auth/useAuth";
import editUsuarioResolver from "../validations/editUsuarioResolver";

export default function EditUsuarioModal({ isOpen, close, user }) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: editUsuarioResolver });

  const { updateUser } = useAuth();

  const isDirty = !!Object.keys(dirtyFields).length;

  const onSubmit = (formData) => {
    if (!isDirty) return;
    updateUser(formData);
    close();
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  useEffect(() => {
    if (user)
      reset({
        name: user.name,
        email: user.email,
        identificacion: user.identificacion,
      });
  }, [user.reset]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Mi Cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre completo" {...register("name")} />
            {errors?.name && (
              <Form.Text>
                <Alert variant="danger">{errors.name.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Identificación</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su Identificación" {...register("identificacion")} />
            {errors?.identificacion && (
              <Form.Text>
                <Alert variant="danger">{errors.identificacion.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su Correo Electrónico" {...register("email")} />
            {errors?.email && (
              <Form.Text>
                <Alert variant="danger">{errors.email.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit(onSubmit)} disabled={!isDirty}>
          Actualizar Información
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
