import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query
`

const server = new ApolloServer({});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready at", url);
