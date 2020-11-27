import * as ReviewAPIUtil from '../util/review_api_util';
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"; 
export const REMOVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERROR = "RECEIVE_REVIEW_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

const receiveReviews= (reviews) => {
    return({
        type: RECEIVE_REVIEWS, 
        reviews
    })
};

const receiveReview = (review) => {
    return({
        type: RECEIVE_REVIEW,
        review
    })
};

const removeReview = (reviewId) => {
    return({
        type: REMOVE_REVIEW,
        reviewId
    })
};

export const fetchReviews = () => {
    return (dispatch) => {
        return ReviewAPIUtil.fetchReviews()
            .then((newReviews) => dispatch(receiveReviews(newReviews)))
    }
};

export const fetchReview = (reviewId) => {
    return (dispatch) => {
        return ReviewAPIUtil.fetchReview(reviewId) 
            .then((newReview) => dispatch(receiveReview(newReview)))
    }
};

export const createReview = (review) => {
    return (dispatch) => {
        return ReviewAPIUtil.createReview(review)
            .then((createdReview) => dispatch(receiveReview(createdReview)))
    }
};

export const updateReview = (review) => {
    return (dispatch) => {
        return ReviewAPIUtil.updateReview(review) 
            .then((updatedReview) => dispatch(receiveReview(updatedReview)))
    }
};

export const deleteReview = (reviewId) => {
    return (dispatch) => {
        return ReviewAPIUtil.deleteReview(reviewId)
            .then(() => dispatch(removeReview(reviewId)))
    }
};


