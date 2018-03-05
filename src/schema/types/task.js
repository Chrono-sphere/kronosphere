const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;

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
