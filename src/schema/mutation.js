import graphql, { GraphQLObjectType } from 'graphql';
import login from './mutations/login';
import signup from './mutations/signup';
import logout from './mutations/logout';

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        login,
        signup,
        logout
    })
});

export default mutation;
