import React from 'react';
import StarRating from '../star_rating';

const ReviewIndexItem = ({ review, allUsers }) => {
    let totalRating = review.overall + review.food + review.service + review.ambience;
    let avg = totalRating / 4
    return (
        <div className="review-index-item-container">
            <div className="review-box1">
                {allUsers.map((user, i) => {
                    if (user.id === review.user_id) {
                        return <h1 className="username-review" key={i}>{user.username}</h1>
                    }
                })}
            </div>
            <div className="review-box2">
                <div><span><StarRating /></span></div>
                <span>Overall: {review.overall}</span>
                <span>Food: {review.food}</span>
                <span>Service: {review.service}</span>
                <span>Ambience: {review.ambience}</span>
                <p>{review.body}</p>
                <span>Dined On: {review.updated_at}</span>
            </div>
        </div>
    )
};

export default ReviewIndexItem;


