import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql';
import { expect } from 'chai';

import user from '../../src/schema/types/user';

describe('User schema type', () => {

    it('should have id of type ID', () => {
        expect(user.getFields()).to.have.property('id');
        expect(user.getFields().id.type).to.deep.equals(GraphQLNonNull(GraphQLID));
    });

    it('should have email of type String', () => {
        expect(user.getFields()).to.have.property('email');
        expect(user.getFields().email.type).to.deep.equals(GraphQLNonNull(GraphQLString));
    });

    it('should have firstName of type String', () => {
        expect(user.getFields()).to.have.property('firstName');
        expect(user.getFields().firstName.type).to.deep.equals(GraphQLString);
    });

    it('should have lastName of type String', () => {
        expect(user.getFields()).to.have.property('lastName');
        expect(user.getFields().lastName.type).to.deep.equals(GraphQLString);
    });
});
