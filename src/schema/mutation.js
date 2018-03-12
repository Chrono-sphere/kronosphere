const graphql = require('graphql');
const login = require('./mutations/login');
const signup = require('./mutations/signup');
const logout = require('./mutations/logout');

const { GraphQLObjectType } = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        login,
        signup,
        logout
    })
});

module.exports = mutation;
