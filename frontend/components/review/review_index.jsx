import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReviews();
        this.props.fetchAllUsers();
    }

    render() {
        const { allUsers, currentUser, deleteReview, updateReview, fetchReview } = this.props;
        return(
            <div>
                {/* {this.props.reviews.map((review) => {
                    if(review.restaurant_id === this.props.restaurant.id) {
                        return <ReviewIndexItem 
                                    review={review}
                                    key={review.id} 
                                    allUsers={allUsers} 
                                    currentUser={currentUser}
                                    deleteReview={deleteReview}
                                    updateReview={updateReview}
                                    fetchReview={fetchReview} />
                    }
                })} */}
                {/* the code beloe iterates in reverse */}
                {this.props.reviews.slice().reverse().map((review) => {
                    if(review.restaurant_id === this.props.restaurant.id) {
                        return <ReviewIndexItem 
                                    review={review}
                                    key={review.id} 
                                    allUsers={allUsers} 
                                    currentUser={currentUser}
                                    deleteReview={deleteReview}
                                    updateReview={updateReview}
                                    fetchReview={fetchReview} />
                    }
                })}
            </div>
        )
    }
};

export default ReviewIndex;
