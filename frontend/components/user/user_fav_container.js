import { connect } from 'react-redux';
import UserFav from './user_fav';
import { fetchFavorites, deleteFavorite} from '../../actions/favorite_action';
import { fetchAllRestaurants } from '../../actions/restaurant_action';
const mapStateToProps = (state) => {
    return({
        users: state.entities.users,
        currentUser: state.session.currentUserId,
        restaurants: Object.values(state.entities.restaurants),
        favorites: Object.values(state.entities.favorites)
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchFavorites: () => dispatch(fetchFavorites()),
        deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFav);