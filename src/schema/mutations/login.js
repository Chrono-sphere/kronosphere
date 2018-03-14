import graphql from 'graphql';
import UserType from '../types/user';
import AuthService from '../../services/auth';

const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const login = {
    type: UserType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
    }
};

export default login;
