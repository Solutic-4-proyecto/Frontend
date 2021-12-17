import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";



export default new ApolloClient({
  uri: "http://localhost:4000/api",
  cache:new InMemoryCache()
});