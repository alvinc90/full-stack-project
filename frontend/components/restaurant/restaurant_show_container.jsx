import { connect } from 'react-redux'; 
import { fetchRestaurant } from '../../actions/restaurant_action';
import RestaurantShow from './restaurant_show'; 
import { fetchReviews } from '../../actions/review_action'; 

const mapStateToProps = (state, ownProps) => {
    
    return({
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        reviews: Object.values(state.entities.reviews),
        user: state.entities.users
    })
}; 

const mapDispatchToProps = (dispatch) => {
    
    return({
        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
        fetchReviews: () => dispatch(fetchReviews())
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);  