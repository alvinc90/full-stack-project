import { connect } from 'react-redux'; 
import { fetchCity } from '../../actions/city_action';
import CityShow from './city_show'; 

const mapStateToProps = (state, ownProps) => {
    return ({
        city: state.entities.cities[ownProps.match.params.cityId]
    })
}; 

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchCity: (cityId) => dispatch(fetchCity(cityId))
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(CityShow); 
