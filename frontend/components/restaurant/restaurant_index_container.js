import { connect } from 'react-redux'; 
import { fetchAllRestaurants } from '../../actions/restaurant_action';
import RestaurantIndex from './restaurant_index'; 
import { fetchReviews } from '../../actions/review_action';

const mapStateToProps = (state) => {
    return ({
        restaurants: Object.values(state.entities.restaurants),
        reviews: Object.values(state.entities.reviews)
    })
}; 

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants()),
        fetchReviews: () => dispatch(fetchReviews())
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex); 