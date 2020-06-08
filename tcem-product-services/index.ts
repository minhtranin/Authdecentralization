import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import { ApolloServer, gql } from 'apollo-server-express';
import schema from './src/graphql'
const app: express.Application = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(morgan('dev'));
// parse application/json
app.use(bodyParser.json())

const server = new ApolloServer({ schema });
server.applyMiddleware({ app });
app.listen({ port: 5000 }, () =>
  // tslint:disable-next-line:no-console
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
);
