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
        const { allUsers } = this.props;
        return(
            <div>
                {this.props.reviews.map((review) => {
                    if(review.restaurant_id === this.props.restaurant.id) {
                        return <ReviewIndexItem review={review} key={review.id} allUsers={allUsers} />
                    }
                })}
            </div>
        )
    }
};

export default ReviewIndex;
