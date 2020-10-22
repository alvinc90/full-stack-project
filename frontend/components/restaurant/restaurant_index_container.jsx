import { connect } from 'react-redux'; 
import { fetchAllRestaurants } from '../../actions/restaurant_action';
import RestaurantIndex from './restaurant_index'; 

const mapStateToProps = (state) => {
    return ({
        restaurants: Object.values(state.entities.restaurants)
    })
}; 

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants())
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex); 