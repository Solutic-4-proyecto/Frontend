import{gql} from '@apollo/client';

export const GET_USUARIOS=gql `
query{
    getUsuarios{
      _id
      identificacion
      nombreCompleto
      correo
      rol
      estado
    }
  }`;

  export const CREATE_USUARIOS=gql `
  mutation($input: UsuariosInput!){
    createUsuario(input:$input){
      identificacion
      nombreCompleto
      correo
      contrasena
      rol
      estado
    }
  }`


  
