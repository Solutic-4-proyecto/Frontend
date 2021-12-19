import { gql } from "@apollo/client";

export const CREATE_USUARIO = gql`
  mutation createUsuario($usuario: UsuariosInput!) {
    createUsuario(input: $usuario) {
      _id
    }
  }
`;

export const UPDATE_USUARIO = gql`
  mutation updateUsuario($_id: String!, $usuario: UsuariosInput!) {
    updateUsuario(_id: $_id, input: $usuario) {
      _id
    }
  }
`;

export const DELETE_USUARIO = gql`
  mutation deleteUsuario($_id: String!) {
    deleteUsuario(_id: $_id)
  }
`;
