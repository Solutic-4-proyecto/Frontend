import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USUARIOS } from "./graphql/queries";
import { CREATE_USUARIO, UPDATE_USUARIO, DELETE_USUARIO } from "./graphql/mutations";

export const useGetUsuarios = () => {
  const result = useQuery(GET_USUARIOS);
  return result;
};

export const useCreateUsuario = () => {
  const [createUsuario] = useMutation(CREATE_USUARIO, {
    refetchQueries: [{ query: GET_USUARIOS }],
  });
  return [createUsuario];
};

export const useUpdateUsuario = () => {
  const [updateUsuario] = useMutation(UPDATE_USUARIO, {
    refetchQueries: [{ query: GET_USUARIOS }],
  });
  return [updateUsuario];
};

export const useDeleteUsuario = () => {
  const [_id, set_id] = useState();
  const [deleteUsuario] = useMutation(DELETE_USUARIO, {
    refetchQueries: [{ query: GET_USUARIOS }],
  });
  if (_id) {
    deleteUsuario({ variables: { _id } });
    set_id();
  }
  return [set_id];
};
