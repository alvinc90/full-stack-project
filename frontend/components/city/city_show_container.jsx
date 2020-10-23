import { connect } from 'react-redux'; 
import { fetchCity } from '../../util/city_api_util';
import CityShow from './city_show'; 

const mapStateToProps = (state, ownProps) => {
    return ({
        city: state.entities.cities[ownProps.match.params.postId]
    })
}; 

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchCity: (cityId) => dispatch(fetchCity(cityId))
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(CityShow); 
