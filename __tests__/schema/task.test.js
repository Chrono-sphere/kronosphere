const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const { GraphQLID, GraphQLString } = graphql;
const chai = require('chai');
const expect = chai.expect;

const task = require('../../src/schema/types/task');

describe('Task schema type', () => {

    it('should have id of type ID', () => {
        expect(task.getFields()).to.have.property('id');
        expect(task.getFields().id.type).to.deep.equals(GraphQLID);
    });

    it('should have title of type String', () => {
        expect(task.getFields()).to.have.property('title');
        expect(task.getFields().title.type).to.deep.equals(GraphQLString);
    });

    it('should have description of type String', () => {
        expect(task.getFields()).to.have.property('description');
        expect(task.getFields().description.type).to.deep.equals(GraphQLString);
    });

    it('should have deadline of type String', () => {
        expect(task.getFields()).to.have.property('deadline');
        expect(task.getFields().deadline.type).to.deep.equals(GraphQLDate);
    });

    it('should have creationDate of type String', () => {
        expect(task.getFields()).to.have.property('creationDate');
        expect(task.getFields().creationDate.type).to.deep.equals(GraphQLDate);
    });
});
