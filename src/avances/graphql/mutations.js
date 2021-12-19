import { gql } from "@apollo/client";

export const CREATE_AVANCE = gql`
  mutation createAvance($avance: avancesInput!) {
    createAvance(input: $avance) {
      _id
    }
  }
`;

export const UPDATE_AVANCE = gql`
  mutation updateAvance($_id: String!, $avance: avancesInput!) {
    updateAvance(_id: $_id, input: $avance) {
      _id
    }
  }
`;

export const DELETE_AVANCE = gql`
  mutation deleteAvance($_id: String!) {
    deleteAvance(_id: $_id)
  }
`;
