import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { gql } from "@apollo/client";
//import { CREATE_USUARIOS } from "../consultas/qusuarios";

const CREATE_USUARIOS = gql`
  mutation ($input: UsuariosInput!) {
    createUsuario(input: $input) {
      identificacion
      nombreCompleto
      correo
      contrasena
      rol
      estado
    }
  }
`;

export default class RegisterPage extends Component {
  state = {
    identificacion: "",
    nombres: "",
    correo: "",
    contrasena: "",
    rol: "",
    estado: "Autorizado",
  };

  onSubmit = async (e) => {
    e.preventDefault();
    /*
  //Parte nueva para prueba
  //const [mutate]=useMutation(CREATE_USUARIOS) no sirve no puede ser llamada en una clase componente
  const [mutate]=Mutation(CREATE_USUARIOS)
  const[data,setData]=this.state()
  const[error,setError]=this.state()
  data=this.state
try{
  const {data}=await mutate()
  setData(data)
}
catch(e){
  setError(e)
  console.log(e)
}

//tampoco sirvio
  */

    const [createUser] = Mutation(CREATE_USUARIOS);
    createUser({ variables: { input: this.state } });
    console.log(e.value);

    console.log("hola");
  };
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col xs={12} className="text-center">
            <Card style={{ maxWidth: "800px" }} className="mx-auto">
              <h2>Registro de Usuarios</h2>
            </Card>
          </Col>
          <Col>
            <Form onSubmit={this.onSubmit}>
              <Form.Group className="mb-3" controlId="identificacion">
                <Form.Label>Identificación</Form.Label>
                <Form.Control type="text" value={this.state.identificacion} onChange={(e) => this.setState({ identificacion: e.target.value })} placeholder="Ingrese Su Numero de Identificación" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" value={this.state.nombres} onChange={(e) => this.setState({ nombres: e.target.value })} placeholder="Ingrese Nombre y Apellidos" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" value={this.state.correo} onChange={(e) => this.setState({ correo: e.target.value })} placeholder="Ingrese su E-mail" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contrasena">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={this.state.contrasena} onChange={(e) => this.setState({ contrasena: e.target.value })} placeholder="Ingrese una Contraseña Minimo 6 Caracteres" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Rol</Form.Label>
                <Form.Control as="select" defaultValue="Seleccione su Rol..." value={this.state.rol} onChange={(e) => this.setState({ rol: e.target.value })}>
                  <option>Seleccione su Rol...</option>
                  <option>Administrador</option>
                  <option>Líder</option>
                  <option>Estudiante</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" onClick={() => console.log(this.state)} type="submit">
                Grabar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
