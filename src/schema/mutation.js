import graphql, { GraphQLObjectType } from 'graphql';
import login from './mutations/login';
import signup from './mutations/signup';
import logout from './mutations/logout';
import createTask from './mutations/createTask';

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        login,
        signup,
        logout,
        createTask
    })
});
