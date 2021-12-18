import { useQuery } from "@apollo/client";
import { GET_USUARIOS } from "./graphql-queries";

export const useGetUsuarios = () => {
  const result = useQuery(GET_USUARIOS);
  return result;
};
