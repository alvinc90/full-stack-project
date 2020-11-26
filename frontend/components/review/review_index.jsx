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
                {this.props.reviews.map((review, i) => {
                    return(
                        <ReviewIndexItem review={review} key={i} />
                    )
                })}
            </div>
        )
    }
};

export default ReviewIndex;
