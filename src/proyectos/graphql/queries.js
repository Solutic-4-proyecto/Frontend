import { gql } from "@apollo/client";

export const GET_PROYECTOS = gql`
  query getProyectos {
    getProyectos {
      _id
      idProyecto
      nombreProyecto
      identificacionLider
      nombreLider
      fechaInicio
      fechaTerminacion
      objetivosGenerales
      objetivosEspecificos
      faseProyecto
      estado
      presupuesto
    }
  }
`;
