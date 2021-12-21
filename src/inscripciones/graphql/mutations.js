import { gql } from "@apollo/client";

export const CREATE_INSCRIPCION = gql`
  mutation createInscripcion($inscripcion: InscripcionInput!) {
    createInscripcion(input: $inscripcion) {
      _id
    }
  }
`;

export const UPDATE_INSCRIPCION = gql`
  mutation updateInscripcion($_id: String!, $inscripcion: InscripcionInput!) {
    updateInscripcion(_id: $_id, input: $inscripcion) {
      _id
    }
  }
`;

export const DELETE_INSCRIPCION = gql`
  mutation deleteInscripcion($_id: String!) {
    deleteInscripcion(_id: $_id)
  }
`;
