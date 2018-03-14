import graphql from 'graphql';
import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';
import UserType from '../types/user';
import AuthService from '../../services/auth';

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

export default signup;
