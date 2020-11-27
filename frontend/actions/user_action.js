import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveAllUsers = (allUsers) => {
    return({
        type: RECEIVE_ALL_USERS,
        allUsers
    })
};

export const fetchAllUsers = () => {
    return dispatch => {
        return UserAPIUtil.fetchAllUsers()
            .then((newUsers) => dispatch(receiveAllUsers(newUsers)))
    }
};