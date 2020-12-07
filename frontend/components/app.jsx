import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Modal from './modal/modal';  
import NavBarContainer from './nav_bar/nav_bar_container';
import Error from "./error";
import Home from "./home/home"; 
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import CityShowContainer from './city/city_show_container';
import UserShowContainer from './user/user_show_container';
import UserFavContainer from './user/user_fav_container';
import UserReservationContainer from './user/user_reservation_container'
import ReservationCreateFormContainer from './reservation/reservation_container';
import ReservationShowContainer from './reservation/reservation_show_container';

const App = () => {
    return (
        <div>
            < Modal />
            <NavBarContainer/>
            {/* <Route path="/" component={NavBarContainer}/> */}
            <Switch>
                <Route exact path="/" component={Home}/>
                <ProtectedRoute exact path ="/my/profile" component={UserShowContainer} />
                <ProtectedRoute exact path ="/my/favorites" component={UserFavContainer} />
                <ProtectedRoute exact path ="/my/reservations" component={UserReservationContainer} />
                <ProtectedRoute exact path ="/reservation/create/new" component={ReservationCreateFormContainer} />
                <ProtectedRoute exact path ="/reservations/:reservationId" component={ReservationShowContainer} />
                <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
                {/* <Route exact path="/restaurants/:restaurantId" component={ReviewEditContainer} /> */}
                <Route exact path="/cities/:cityId" component={CityShowContainer} />
                <Route component={Error}/>
            </Switch>

        </div>
    )
};
export default App; 


