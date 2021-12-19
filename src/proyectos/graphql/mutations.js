import { gql } from "@apollo/client";

export const CREATE_PROYECTO = gql`
  mutation createProyecto($proyecto: ProyectosInput!) {
    createProyecto(input: $proyecto) {
      _id
    }
  }
`;

export const UPDATE_PROYECTO = gql`
  mutation updateProyecto($_id: String!, $proyecto: proyectosInput!) {
    updateProyecto(_id: $_id, input: $proyecto) {
      _id
    }
  }
`;

export const DELETE_PROYECTO = gql`
  mutation deleteProyecto($_id: String!) {
    deleteProyecto(_id: $_id)
  }
`;
