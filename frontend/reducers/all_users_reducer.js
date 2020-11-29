import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_action';

const allUsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_ALL_USERS:
            return action.allUsers;
        case RECEIVE_USER:
            newState[action.user.id] = action.user
            return newState;
        default: 
            return oldState;
    }
};

export default allUsersReducer;