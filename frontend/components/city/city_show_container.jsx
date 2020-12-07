import { connect } from 'react-redux'; 
import { fetchCity } from '../../actions/city_action';
import CityShow from './city_show';
import { fetchAllRestaurants } from '../../actions/restaurant_action';
import { fetchReviews } from '../../actions/review_action';

const mapStateToProps = (state, ownProps) => {
    return ({
        city: state.entities.cities[ownProps.match.params.cityId],
        restaurants: Object.values(state.entities.restaurants),
        reviews: Object.values(state.entities.reviews)
    })
}; 

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchCity: (cityId) => dispatch(fetchCity(cityId)),
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants()),
        fetchReviews: () => dispatch(fetchReviews())
    })
}; 
 
export default connect(mapStateToProps, mapDispatchToProps)(CityShow); 
