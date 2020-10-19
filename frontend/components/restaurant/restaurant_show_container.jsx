import { connect } from 'react-redux'; 
import { fetchRestaurant } from '../../actions/restaurant_action';
import RestaurantShow from './restaurant_show'; 

const mapStateToProps = (state, ownProps) => {
    return({
        restaurant: state.restaurants[ownProps.match.params.restaurantId]
    })
}; 

const mapDispatchToProps = (dispatch) => {
    return({
        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow); 