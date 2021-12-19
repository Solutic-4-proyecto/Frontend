import { gql } from "@apollo/client";

export const GET_USUARIOS = gql`
  query getUsuarios {
    getUsuarios {
      _id
      identificacion
      nombreCompleto
      correo
      rol
      estado
    }
  }
`;
