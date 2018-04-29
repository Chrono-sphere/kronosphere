import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';
import {
    getTasks as TaskServiceGetAll,
    getTask as TaskServiceGetOne
} from 'services/task';
import UserType from './user';
import TaskType from './task';

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            resolve(parentValue, args, req) {
                return req.user;
            }
        },
        task: {
            type: TaskType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id }, req) {
                return TaskServiceGetOne(id, req);
            }
        },
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parentValue, args, req) {
                return TaskServiceGetAll(req);
            }
        }
    }
});

export default RootQueryType;
