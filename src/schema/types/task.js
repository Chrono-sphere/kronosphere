import graphql, {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';
import GraphQLDate from 'graphql-date';


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
