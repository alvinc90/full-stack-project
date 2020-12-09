import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import restaurantReducer from './restaurant_reducer'; 
import cityReducer from './city_reducer';
import reviewsReducer from './review_reducer';
import allUsersReducer from './all_users_reducer';
import favoriteReducer from './favorite_reducer';
import reservationsReducer from './reservation_reducer';
import menuReducer from './menu_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer, 
    restaurants: restaurantReducer,
    cities: cityReducer,
    reviews: reviewsReducer,
    allUsers: allUsersReducer,
    favorites: favoriteReducer,
    reservations: reservationsReducer,
    menus: menuReducer
}); 

export default entitiesReducer;