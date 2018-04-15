import GraphQLDate from 'graphql-date';
import graphql, {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

const TaskType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        deadline: { type: GraphQLDate },
        creationDate: { type: GraphQLDate }
    }
});

export default TaskType;
