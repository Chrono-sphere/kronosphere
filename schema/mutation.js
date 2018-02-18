const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
    })
});

module.exports = mutation;
