import { gql } from "@apollo/client";

export const GET_AVANCES = gql`
  query getAvances {
    getAvances {
      _id
      idProyecto
      fechaAvance
      descripcion
      observaciones
    }
  }
`;
