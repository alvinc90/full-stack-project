import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import restaurantReducer from './restaurant_reducer'; 
import cityReducer from './city_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer, 
    restaurants: restaurantReducer,
    cities: cityReducer
}); 

export default entitiesReducer;