import * as APIUtil from '../util/restaurant_api_util'; 

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT'; 

const receiveAllRestaurants = (restaurants) => {
    return({
        type: RECEIVE_ALL_RESTAURANTS, 
        restaurants
    })
}; 

const receiveRestaurant = (restaurant) => {
    return({
        type: RECEIVE_RESTAURANT,   
        restaurant 
    })
};

export const fetchAllRestaurants = (cityId) => {
    return (dispatch) => {
        return APIUtil.fetchAllRestaurants(cityid)
            .then((newRestaurants) => dispatch(receiveAllRestaurants(newRestaurants)))
    }
}; 

export const fetchRestaurant = (restaurantId) => {
    return (dispatch) => {
        return APIUtil.fetchRestaurant(restaurantId)
            .then((newRestaurant) => dispatch(receiveRestaurant(newRestaurant)))
    }
};