const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;
const UserType = require('../types/user');
const AuthService = require('../../services/auth');

const signup = {
    type: UserType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
    }
};

module.exports =  signup;
