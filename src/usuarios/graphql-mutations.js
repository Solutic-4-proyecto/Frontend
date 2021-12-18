import { gql } from "@apollo/client";

export const CREATE_USUARIO = gql`
mutation createUsuario(
    $identificacion: String!
    $nombreCompleto: String!
    $correo: String!
    $contrasena: String!
  ) {
    createUsuario(
      input: {
        identificacion: $identificacion
        nombreCompleto: $nombreCompleto
        correo: $correo
        contrasena: $contrasena
        rol: Estudiante
        estado: Pendiente
      }
    ) {
      _id
    }
  }
`