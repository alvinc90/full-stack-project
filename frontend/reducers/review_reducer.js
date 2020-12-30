import {
    RECEIVE_REVIEWS, 
    RECEIVE_REVIEW, 
    REMOVE_REVIEW,
    CLEAR_REVIEW
} from '../actions/review_action';

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    debugger
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        case CLEAR_REVIEW:
            return [];
        default: 
            return oldState;
    }
};

export default reviewsReducer;