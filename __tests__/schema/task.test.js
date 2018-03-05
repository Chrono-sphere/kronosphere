const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const { GraphQLID, GraphQLString } = graphql;
const chai = require('chai');
const expect = chai.expect;

const task = require('../../src/schema/types/task');

describe('Task schema type', () => {

    it('should have id of type ID', () => {
        expect(user.getFields().to.have.property('id'));
        expect(user.getFields().id.type).to.deep.equals(GraphQLID);
    });

    it('should have title of type String', () => {
        expect(user.getFields().to.have.property('title'));
        expect(user.getFields().title.type).to.deep.equals(GraphQLString);
    });

    it('should have description of type String', () => {
        expect(user.getFields().to.have.property('description'));
        expect(user.getFields().description.type).to.deep.equals(GraphQLString);
    });

    it('should have deadline of type String', () => {
        expect(user.getFields().to.have.property('deadline'));
        expect(user.getFields().deadline.type).to.deep.equals(GraphQLDate);
    });

    it('should have creationDate of type String', () => {
        expect(user.getFields().to.have.property('creationDate'));
        expect(user.getFields().creationDate.type).to.deep.equals(GraphQLDate);
    });
});
