import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_INSCRIPCIONES } from "./graphql/queries";
import { CREATE_INSCRIPCION, UPDATE_INSCRIPCION, DELETE_INSCRIPCION } from "./graphql/mutations";

export const useGetInscripciones = () => {
  const result = useQuery(GET_INSCRIPCIONES);
  return result;
};

export const useCreateInscripcion = () => {
  const [createInscripcion] = useMutation(CREATE_INSCRIPCION, {
    refetchQueries: [{ query: GET_INSCRIPCIONES }],
  });
  return [createInscripcion];
};

export const useUpdateInscripcion = () => {
  const [updateInscripcion] = useMutation(UPDATE_INSCRIPCION, {
    refetchQueries: [{ query: GET_INSCRIPCIONES }],
  });
  return [updateInscripcion];
};

export const useDeleteInscripcion = () => {
  const [_id, set_id] = useState();
  const [deleteInscripcion] = useMutation(DELETE_INSCRIPCION, {
    refetchQueries: [{ query: GET_INSCRIPCIONES }],
  });
  if (_id) {
    deleteInscripcion({ variables: { _id } });
    set_id();
  }
  return [set_id];
};
