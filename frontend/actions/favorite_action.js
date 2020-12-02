import * as favoriteAPIUtil from '../util/favorite_util';

export const RECEIVE_ALL_FAVORITES = 'RECEIVE_ALL_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const receiveAllFavorites = (favorites) => {
    return({
        type: RECEIVE_ALL_FAVORITES,
        favorites
    })
};

const receiveFavorite = (favorite) => {
    return({
        type: RECEIVE_FAVORITE,
        favorite
    })
};

const removeFavorite = (favoriteId) => {
    return({
        type: REMOVE_FAVORITE,
        favoriteId
    })
};

export const fetchFavorites = () => {
    return(dispatch) => {
        return favoriteAPIUtil.fetchFavorites() 
            .then((newFavorites) => {
                return dispatch(receiveAllFavorites(newFavorites))
            })
    }
};

export const createFavorite = (favorite) => {
    return(dispatch) => {
        return favoriteAPIUtil.createFavorite(favorite)
            .then((createdFavorite) => {
                return dispatch(receiveFavorite(createdFavorite))
            })
    }
};

export const deleteFavorite = (favoriteId) => {
    debugger
    return(dispatch) => {
        debugger
        return favoriteAPIUtil.deleteFavorite(favoriteId)
            .then(() => {
                debugger
                return dispatch(removeFavorite(favoriteId))
            })
    }
};