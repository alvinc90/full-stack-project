import {RECEIVE_ALL_CITIES} from '../actions/city_action'; 

const cityReducer = (oldState = {}, action) => {
    Object.freeze(oldState) 
    switch (action.type) {
        case RECEIVE_ALL_CITIES:
            return action.cities 
        default:
            return oldState; 
    }
}

export default cityReducer; 