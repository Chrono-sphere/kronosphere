import { GraphQLObjectType } from 'graphql';
import login from './mutations/login';
import signup from './mutations/signup';
import logout from './mutations/logout';
import createTask from './mutations/createTask';
import deleteTask from './mutations/deleteTask';
import editTask from './mutations/editTask';

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        login,
        signup,
        logout,
        createTask,
        deleteTask,
        editTask
    })
});
