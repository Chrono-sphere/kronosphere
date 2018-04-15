import graphql, { GraphQLID, GraphQLString } from 'graphql';
import chai, { expect } from 'chai';

import user from '../../src/schema/types/user';

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
