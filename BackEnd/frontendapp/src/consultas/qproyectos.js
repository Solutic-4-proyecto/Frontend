import{gql} from '@apollo/client';
export const GET_PROYECTOS=gql `
query{
    getProyectos{
        _id
        idproyecto
        nombreProyecto
        identificacionLider
        nombreLider
        fechaInicio
        objetivosGenerales
        objetivosEspecificos
        fechaTerminacion
        faseProyecto
        estado
        presupuesto
      }
  }`;
