import TaskType from '../types/task';
import { createTask as TaskServiceCreate } from 'services/task';
import graphql, {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

const createTask = {
    type: TaskType,
    args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        deadline: { type: GraphQLString },
    },
    resolve(parentValue, args, req) {
        if(req.user.id) {
            args['userId'] = req.user.id;
            args['creationDate'] = new Date();
            console.log(args);
            return TaskServiceCreate(args);
        }
        else {
            throw Error('No user is logged-in to create a task under.')
        }
    }
};

export default createTask;
