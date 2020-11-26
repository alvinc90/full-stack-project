import React from 'react';

const ReviewIndexItem = ({ review }) => {
    // debugger
    let totalRating = review.overall + review.food + review.service + review.ambience;
    let avg = totalRating / 4
    return (
        <div>
            <div><span>Rating: {avg}</span></div>
            <div>Overall: {review.overall}</div>
            <div>Food: {review.food}</div>
            <div>Service: {review.service}</div>
            <div>Ambience: {review.ambience}</div>
            <p>{review.body}</p>
            <span>Dined On: {review.updated_at}</span>
        </div>
    )
};

export default ReviewIndexItem;

