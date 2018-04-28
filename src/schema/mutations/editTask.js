import { GraphQLString, GraphQLNonNull } from 'graphql';

import { editTask as TaskServiceEdit } from 'services/task';
import TaskType from '../types/task';

const editTask = {
    type: TaskType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        deadline: { type: GraphQLString }
    },
    resolve(parentValue, args, req) {
        if (req.user) {
            const taskId = args.id;

            // Remove the id property from the object
            delete args.id;

            return TaskServiceEdit(taskId, args);
        }

        throw Error('No user is logged-in to edit a task.');
    }
};

export default editTask;
