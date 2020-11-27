import { RECEIVE_ALL_USERS } from '../actions/user_action';

const allUsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_USERS:
            return action.allUsers;
        default: 
            return oldState;
    }
};

export default allUsersReducer;