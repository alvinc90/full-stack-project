import {RECEIVE_ALL_CITIES, RECEIVE_CITY} from '../actions/city_action'; 

const cityReducer = (oldState = {}, action) => {
    Object.freeze(oldState) 
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_CITIES:
            return action.cities 
        case RECEIVE_CITY: 
            newState[action.city.id] = action.city 
            return newState; 
        default:
            return oldState; 
    }
}; 

export default cityReducer; 