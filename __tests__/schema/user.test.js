const graphql = require('graphql');
const { GraphQLID, GraphQLString } = graphql;
const chai = require('chai');
const expect = chai.expect;

const user = require('../../src/schema/types/user');

describe('User schema type', () => {

    it('should have id of type ID', () => {
        expect(user.getFields()).to.have.property('id');
        expect(user.getFields().id.type).to.deep.equals(GraphQLID);
    });

    it('should have email of type String', () => {
        expect(user.getFields()).to.have.property('email');
        expect(user.getFields().email.type).to.deep.equals(GraphQLString);
    });
})
