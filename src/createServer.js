const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const db = require('./db');

//create the server like express

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: true,
    },
    context: (req) => ({ ...req, db }),
  });
}

module.exports = createServer;