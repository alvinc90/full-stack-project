import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRating from '../star_rating';
import ReviewEditForm from './review_edit_form';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.state = { showEditModal: false };
        this.handleEditModal = this.handleEditModal.bind(this);
    }
    
    handleDelete(e) {
        this.props.deleteReview(this.props.review.id);
        // this.props.history.push(`/restaurants/${this.props.review.restaurant_id}`);
    }

    handleUpdate(e) {
        // this.props.updateReview(review)
        console.log("I am nino")
    }

    handleEditModal() {
        if(this.props.currentUser) {
            this.setState({showEditModal: !this.state.showEditModal})
        } else {
            this.props.openModal('login')
        }

    }

    render() {
        const { review, allUsers, currentUser, updateReview, fetchReview } = this.props;
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
                        <button onClick={this.handleEditModal}>Edit</button>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>

                    {this.state.showEditModal ? 
                    <ReviewEditForm
                        review={review}
                        updateReview={updateReview}
                        currentUser={currentUser}
                        allUsers={allUsers}
                        fetchReview={fetchReview}
                        handleEditModal={this.handleEditModal} />
                    : null 
                    }
                    
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


