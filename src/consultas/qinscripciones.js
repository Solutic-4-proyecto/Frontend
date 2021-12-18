import{gql} from '@apollo/client';
export const GET_INSCRIPCIONES=gql `
query{
    getInscripciones{
        _id
        idproyecto
        identificacionEstudiante
        estado
        fechaIngreso
        fechaEgreso
      } 
  }`;