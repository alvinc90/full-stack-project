import React from 'react';
import { withRouter } from 'react-router-dom';
// import StarRating from '../star_rating';
// import Star from '../star/star';
import { FaStar } from 'react-icons/fa';

class ReviewCreateModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            overall: 5,
            food: 5,
            service: 5,
            ambience: 5,
            user_id: this.props.currentUser,
            restaurant_id: this.props.restaurant.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePropagation = this.handlePropagation.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state);
        debugger
        this.setState({
            body: "",
            overall: 5,
            food: 5,
            service: 5,
            ambience: 5,
        })
        this.props.handleModal()
        // this.props.history.push(`/restaurants/${this.props.restaurant.id}`)
        // this.props.history.push("/")
    }

    handleChange(type) {
        return (e) => this.setState({ [type]: e.currentTarget.value})
    }

    handlePropagation(e) {
        e.stopPropagation()
    }

    render() {
        return(
            <div className="modal-create-background" onClick={this.props.handleModal}>
                <div className="modal-create-child" onClick={this.handlePropagation}>
                    <form onSubmit={this.handleSubmit}>
                        <h1 className="create-form-title">Share your experience</h1>
                        <div className="rating-outer-container">
                            <div className="rating-inner-container">
                                Food
                                {[...Array(5)].map((star, i) => {
                                    return(
                                        <label>
                                            <input 
                                                type="radio" 
                                                name="food" 
                                                className="hidden-radio"
                                                value={i + 1}
                                                onChange={this.handleChange('food')}
                                            />

                                            <FaStar 
                                                className="star"
                                                color={ i + 1 <= this.state.food ? "crimson" : "darkgray" }
                                            />

                                        </label>
                                    )  
                                })}
                            </div>

                            <div className="rating-inner-container"> 
                                Service
                                {[...Array(5)].map((star, i) => {
                                    return(
                                        <label>
                                            <input 
                                                type="radio" 
                                                name="service" 
                                                className="hidden-radio"
                                                value={i + 1}
                                                onChange={this.handleChange('service')}
                                            />

                                            <FaStar 
                                                className="star"
                                                color={ i + 1 <= this.state.service ? "crimson" : "darkgray" } />
                                        </label>
                                    )  
                                })}
                            </div>

                            <div className="rating-inner-container">
                                Ambience
                                {[...Array(5)].map((star, i) => {
                                    return(
                                        <label>
                                            <input 
                                                type="radio" 
                                                name="ambience" 
                                                className="hidden-radio"
                                                value={i + 1}
                                                onChange={this.handleChange('ambience')}
                                            />

                                            <FaStar 
                                                className="star"
                                                color={ i + 1 <= this.state.ambience ? "crimson" : "darkgray" } />
                                        </label>
                                    )  
                                })}
                            </div>

                            <div className="rating-inner-container">
                                Overall
                                {[...Array(5)].map((star, i) => {
                                    return(
                                        <label>
                                            <input 
                                                type="radio" 
                                                name="overall" 
                                                className="hidden-radio"
                                                value={i + 1}
                                                onChange={this.handleChange('overall')}
                                            />

                                            <FaStar 
                                                className="star"
                                                color={ i + 1 <= this.state.overall ? "crimson" : "darkgray" } />
                                        </label>
                                    )  
                                })}
                            </div>
                        </div>

                        <div>
                            <textarea 
                                className="create-review-textarea" 
                                placeholder="Would you recommend to your friends and family?"
                                onChange={this.handleChange('body')}>
                            </textarea>
                        </div>
                        
                        <input className="create-input-button" type="submit" value="Submit"/>
                        <div className="modal-x-button" onClick={this.props.handleModal}>X</div>
                    </form>                
                </div>
            </div>
        )
    };
}

export default withRouter(ReviewCreateModal);


                                
                    
