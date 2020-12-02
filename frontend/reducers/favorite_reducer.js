import {
    RECEIVE_ALL_FAVORITES, 
    RECEIVE_FAVORITE,
    REMOVE_FAVORITE
} from '../actions/favorite_action';

const favoriteReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch(action.type) {
        case RECEIVE_ALL_FAVORITES:
            return action.favorites;
        case RECEIVE_FAVORITE:
            newState[action.favorite.id] = action.favorite
            return  newState
        case REMOVE_FAVORITE:
            delete newState[action.favoriteId]
            return
        default: 
            return oldState;
    }
};

export default favoriteReducer;