import {
    RECEIVE_ALL_RESTAURANTS, 
    RECEIVE_RESTAURANT
} from '../actions/restaurant_action';

const restaurantReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    let newState = Object.assign({}, oldState); 

    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return action.restaurants; 
        case RECEIVE_RESTAURANT: 
            newState[action.restaurant.id] = action.restaurant
            return newState;
        default:
            return oldState; 
    }
}; 

export default restaurantReducer; 