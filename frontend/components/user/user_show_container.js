import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_action';
import { fetchAllRestaurants } from '../../actions/restaurant_action';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    return({
        currentUser: state.session.currentUserId,
        user: state.entities.users
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchUser: (userId) => dispatch(fetchUser(userId))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
