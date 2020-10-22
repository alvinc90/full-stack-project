import { connect } from 'react-redux'; 
import { fetchRestaurant } from '../../actions/restaurant_action';
import RestaurantShow from './restaurant_show'; 

const mapStateToProps = (state, ownProps) => {
    // debugger 4
    return({
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
        
    })
}; 

const mapDispatchToProps = (dispatch) => {
    // debugger
    return({
        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);  