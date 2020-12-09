import { connect } from 'react-redux';
import { fetchMenus } from '../../actions/menu_action';
import { fetchAllRestaurants } from '../../actions/restaurant_action';
import MenuIndex from './menu_index';

const mapStateToProps = (state) => {
    return({
        menus: Object.values(state.entities.menus),
        restaurants: state.entities.restaurants
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchMenus: () => dispatch(fetchMenus()),
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuIndex);