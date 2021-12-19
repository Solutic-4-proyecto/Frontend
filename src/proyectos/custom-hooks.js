import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PROYECTOS } from "./graphql/queries";
import { CREATE_PROYECTO, UPDATE_PROYECTO, DELETE_PROYECTO } from "./graphql/mutations";

export const useGetProyectos = () => {
  const result = useQuery(GET_PROYECTOS);
  return result;
};

export const useCreateProyecto = () => {
  const [createProyecto] = useMutation(CREATE_PROYECTO, {
    refetchQueries: [{ query: GET_PROYECTOS }],
  });
  return [createProyecto];
};

export const useUpdateProyecto = () => {
  const [updateProyecto] = useMutation(UPDATE_PROYECTO, {
    refetchQueries: [{ query: GET_PROYECTOS }],
  });
  return [updateProyecto];
};

export const useDeleteProyecto = () => {
  const [_id, set_id] = useState();
  const [deleteProyecto] = useMutation(DELETE_PROYECTO, {
    refetchQueries: [{ query: GET_PROYECTOS }],
  });
  if (_id) {
    deleteProyecto({ variables: { _id } });
    set_id();
  }
  return [set_id];
};
