import { connect } from 'react-redux'; 
import { fetchRestaurant } from '../../actions/restaurant_action';
import RestaurantShow from './restaurant_show'; 
import { fetchReviews, createReview, updateReview, deleteReview, clearReview } from '../../actions/review_action'; 
import { fetchAllUsers } from '../../actions/user_action';

const mapStateToProps = (state, ownProps) => {
    return({
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        reviews: Object.values(state.entities.reviews),
        allUsers: Object.values(state.entities.allUsers),
        currentUser: state.session.currentUserId
    })
}; 

const mapDispatchToProps = (dispatch) => {
    return({
        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
        fetchReviews: () => dispatch(fetchReviews()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        createReview: (review) => dispatch(createReview(review)),
        updateReview: (review) => dispatch(updateReview(review)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        clearReview: () => dispatch(clearReview())
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);  