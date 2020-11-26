import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_action';

const mapStateToProps = (state) => {
    return({
        reviews: Object.values(state.entities.reviews)
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchReviews: () => dispatch(fetchReviews())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);