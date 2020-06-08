import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Project started!',
  },
};
export default { typeDefs, resolvers }
