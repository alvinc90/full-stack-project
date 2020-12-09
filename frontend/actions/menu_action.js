import * as MenuAPIUtil from '../util/menu_api_util';

export const RECEIVE_MENUS = "RECEIVE_MENUS";

const receiveMenus = (menus) => {
    // debugger
    return({
        type: RECEIVE_MENUS,
        menus
    })
};

export const fetchMenus = () => {
    // debugger
    return dispatch => {
        // debugger
        return MenuAPIUtil.fetchMenus()
            .then((newMenus) => {
                // debugger
                return dispatch(receiveMenus(newMenus))
            })
    }
};