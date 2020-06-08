import { gql } from 'apollo-server-express';

const typeDefs = gql`
 type Category {
     id: Int,
     name: String,
     description: String,
 }
  extend type Query {
    hellos(id: Int!): [Category]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hellos: (_: any, args : any) => [
        {
            id: args.id,
            name: "minh",
            description: "pro"
        }
    ] ,
  },
};
export default { typeDefs, resolvers }
