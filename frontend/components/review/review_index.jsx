import React from 'react'; 
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReviews();
    }

    render() {
        return(
            <div>
                {this.props.reviews.map((review) => {
                    return(
                        <ReviewIndexItem review={review} key={review.id} />
                    )
                })}
            </div>
        )
    }
};

export default ReviewIndex;
