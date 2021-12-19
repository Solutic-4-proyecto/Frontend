import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AVANCES } from "./graphql/queries";
import { CREATE_AVANCE, UPDATE_AVANCE, DELETE_AVANCE } from "./graphql/mutations";

export const useGetAvances = () => {
  const result = useQuery(GET_AVANCES);
  return result;
};

export const useCreateAvance = () => {
  const [createAvance] = useMutation(CREATE_AVANCE, {
    refetchQueries: [{ query: GET_AVANCES }],
  });
  return [createAvance];
};

export const useUpdateAvance = () => {
  const [updateAvance] = useMutation(UPDATE_AVANCE, {
    refetchQueries: [{ query: GET_AVANCES }],
  });
  return [updateAvance];
};

export const useDeleteAvance = () => {
  const [_id, set_id] = useState();
  const [deleteAvance] = useMutation(DELETE_AVANCE, {
    refetchQueries: [{ query: GET_AVANCES }],
  });
  if (_id) {
    deleteAvance({ variables: { _id } });
    set_id();
  }
  return [set_id];
};
