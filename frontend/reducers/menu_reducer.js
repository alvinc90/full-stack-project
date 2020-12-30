import { RECEIVE_MENUS } from '../actions/menu_action';

const menuReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_MENUS:
            return action.menus
        default:
            return oldState;
    }
};

export default menuReducer;