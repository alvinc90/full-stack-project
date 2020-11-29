import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveAllUsers = (allUsers) => {
    return({
        type: RECEIVE_ALL_USERS,
        allUsers
    })
};

const receiveUser = (user) => {
    return({
        type: RECEIVE_USER,
        user
    })
};

export const fetchAllUsers = () => {
    return dispatch => {
        return UserAPIUtil.fetchAllUsers()
            .then((newUsers) => dispatch(receiveAllUsers(newUsers)))
    }
};

export const fetchUser = (userId) => {
    return dispatch => {
        return UserAPIUtil.fetchAllUsers(userId)
            .then((newUser) => {
                return dispatch(receiveUser(newUser))
            })
    }
};