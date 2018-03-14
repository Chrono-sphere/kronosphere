import UserType from '../types/user';
import AuthService from '../../services/auth';

const logout = {
    type: UserType,
    resolve(parentValue, args, req) {
        return AuthService.logout({ req });
    }
};

export default logout;
