import { connect } from 'react-redux'; 
import { fetchAllRestaurants } from '../../util/restaurant_api_util';
import RestaurantIndex from './restaurant_index'; 

const mapStateToProps = (state) => {
    return ({
        cities: Object.values(state.entities.cities), 
        restaurants: Object.values(state.entities.restaurants) 
    })
}; 

const mapDispatchToProps = (dispatch) => {
    return ({
        fetctAllRestaurants: (cityId) => dispatch(fetchAllRestaurants(cityId))
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex); 