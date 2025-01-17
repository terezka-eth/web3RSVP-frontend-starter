import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/terezka-eth/wbw3",
  cache: new InMemoryCache(),
});

export default client;