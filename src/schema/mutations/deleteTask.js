import { GraphQLString, GraphQLNonNull } from 'graphql';

import { deleteTask as TaskServiceDelete } from 'services/task';
import TaskType from '../types/task';

const deleteTask = {
    type: TaskType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parentValue, args, req) {
        if (req.user) {
            return TaskServiceDelete(args.id);
        }

        throw Error('No user is logged-in to delete a task.');
    }
};

export default deleteTask;
