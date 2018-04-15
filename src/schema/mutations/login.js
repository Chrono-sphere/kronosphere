import UserType from '../types/user';
import { login as AuthServiceLogin } from 'services/auth';
import graphql, {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const login = {
    type: UserType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    resolve(parentValue, { email, password }, req) {
        return AuthServiceLogin({ email, password, req });
    }
};

export default login;
