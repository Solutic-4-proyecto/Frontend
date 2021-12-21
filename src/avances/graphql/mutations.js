import { gql } from "@apollo/client";

export const CREATE_AVANCE = gql`
  mutation createAvance($avance: AvancesInput!) {
    createAvance(input: $avance) {
      _id
    }
  }
`;

export const UPDATE_AVANCE = gql`
  mutation updateAvance($_id: String!, $avance: AvancesInput!) {
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
