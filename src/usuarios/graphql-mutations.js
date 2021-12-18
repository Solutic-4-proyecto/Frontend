import { gql } from "@apollo/client";

export const CREATE_USUARIO = gql`
mutation createUsuario(
    $identificacion: String!
    $nombreCompleto: String!
    $correo: String!
    $contrasena: String!
    $rol: String!
    $estado: String!
  ) {
    createUsuario(
      input: {
        identificacion: $identificacion
        nombreCompleto: $nombreCompleto
        correo: $correo
        contrasena: $contrasena
        rol: $rol
        estado: $estado
      }
    ) {
      _id
    }
  }
`

export const DELETE_USUARIO = gql`
mutation deleteUsuario(
    $_id: String!
  ) {
    deleteUsuario(
      _id: $_id
    )
  }
`