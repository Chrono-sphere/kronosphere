const UserType = require('../types/user');
const AuthService = require('../../services/auth');

const logout = {
    type: UserType,
    resolve(parentValue, args, req) {
        return AuthService.logout({ req });
    }
};

export default logout;
