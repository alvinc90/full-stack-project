// import { connect } from 'react-redux';
// import { updateReview, fetchReview } from '../../actions/review_action';
// import ReviewEditForm from './review_edit_form';

// const mapStateToProps = (state, ownProps) => {
//     return({
//         review: state.entities.reviews[ownProps.match.params.reviewId]
//     })
// };

// const mapDispatchToProps = (dispatch) => {
//     return({
//         updateReview: (review) => dispatch(updateReview(review)),
//         fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
//     })
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditForm);