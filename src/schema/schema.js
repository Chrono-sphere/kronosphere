const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const mutation = require('./mutation');
const RootQueryType = require('./types/rootQuery');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation
});
