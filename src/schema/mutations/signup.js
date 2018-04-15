import UserType from '../types/user';
import AuthService from 'services/auth';
import graphql, {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

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
