/**
 * @constant default
 * @description no edit
 * @author minhtran
 * @copyright
 */

import * as fs from 'fs';
import * as path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { IExecutableSchemaDefinition } from 'graphql-tools/Interfaces';

/**
 * @description load file & wrap schema
 */
interface TypeDefs {
    kind: 'Document',
    definitions: [],
    loc: object
}

const schema: {
    typeDefs: TypeDefs[],
    resolvers: object[]
    } = {
    typeDefs: [],
    resolvers: [],
};
fs.readdirSync(__dirname)
.filter((e: string) => /.graphql.ts$/.test(e))
.map((graphqlFile: string) => {
    const { default: { typeDefs, resolvers }} = require(`${path.resolve(__dirname, graphqlFile)}`);

    schema.typeDefs.push(typeDefs);
    schema.resolvers.push(resolvers);
})
export default makeExecutableSchema(schema as IExecutableSchemaDefinition);
  const a = 14;
