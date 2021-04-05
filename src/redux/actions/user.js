import * as type from '../types';

export function validateUser(user) {
    return {
        type: type.GET_USER_REQUEST,
        payload: user
    }
}