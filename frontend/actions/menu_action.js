import * as MenuAPIUtil from '../util/menu_api_util';

export const RECEIVE_MENUS = "RECEIVE_MENUS";

const receiveMenus = (menus) => {
    return({
        type: RECEIVE_MENUS,
        menus
    })
};

export const fetchMenus = () => {
    return dispatch => {
        return MenuAPIUtil.fetchMenus()
            .then((newMenus) => {
                return dispatch(receiveMenus(newMenus))
            })
    }
};