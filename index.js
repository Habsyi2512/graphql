import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { books } from "./_db.js";

const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    hello: String
    books: [Book!]!
    book(id: ID!): Book
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
    books: () => {
      return books;
    },

    book: (_, args) => {
      return books.find((book) => book.id === args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready at", url);
