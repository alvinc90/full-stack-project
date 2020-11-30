import React from 'react';

class ReviewEditForm extends React.Component {
    constructor(props) {
        super(props)
    };

    // componentDidMount() {
    //     this.props.fetchReview(this.props.match.params.reviewId)
    // }

    render() {
        // debugger
        return(
            <div>
                <h1>I am Nino</h1>
                {this.props.review ? this.props.review : null}
            </div>
        )
    }
};

export default ReviewEditForm;