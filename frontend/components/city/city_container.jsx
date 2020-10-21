import { connect } from 'react-redux';
import { fetchCities } from '../../actions/city_action';
import City from './city'


const mapStateToProps = (state) => {
    return ({
        cities: Object.values(state.entities.cities)
    })
}; 

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchCities: () => dispatch(fetchCities())
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(City);