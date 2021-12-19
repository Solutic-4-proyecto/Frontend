import { gql } from "@apollo/client";

export const GET_INSCRIPCIONES = gql`
  query getInscripciones {
    getInscripciones {
      _id
      idproyecto
      identificacionEstudiante
      estado
      fechaIngreso
      fechaEgreso
    }
  }
`;
