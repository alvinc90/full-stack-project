import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRating from '../star_rating';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.state = {
            reviewId: 1.5
        }
    }
    
    handleDelete(e) {
        // debugger
        this.setState({reviewId: this.props.review.id})
        this.props.deleteReview(this.props.review.id);
        this.props.history.push(`/restaurants/${this.props.review.restaurant_id}`);
        // this.props.history.push("/");
    }

    handleUpdate(e) {
        // this.props.updateReview(review)
        console.log("I am nino")
    }

    render() {
        const { review, allUsers, currentUser } = this.props;
        let totalRating = review.overall + review.food + review.service + review.ambience;
        let avg = totalRating / 4
        if (review.user_id === currentUser) {
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
                        <button onClick={this.handleUpdate}>Edit</button>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            )
        } else {
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
        }
    }
}

export default withRouter(ReviewIndexItem);


