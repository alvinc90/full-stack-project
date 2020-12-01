import React from 'react';
import { FaStar } from 'react-icons/fa';

class ReviewEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePropagation = this.handlePropagation.bind(this);
        this.state = {
            id: this.props.review.id,
            body: this.props.review.body,
            overall: this.props.review.overall,
            food: this.props.review.food,
            service: this.props.review.service,
            ambience: this.props.review.ambience,
            user_id: this.props.currentUser,
            restaurant_id: this.props.review.restaurant_id
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReview(this.state);
        this.props.handleEditModal();
    }

    handleChange(type) {
        return (e) => this.setState({ [type]: e.currentTarget.value})
    }

    handlePropagation(e) {
         e.stopPropagation();
    }

    render() {
        return(
            <div className="modal-background" onClick={this.props.handleEditModal}>
                <div className="modal-child" onClick={this.handlePropagation}>
                     <form onSubmit={this.handleSubmit}>
                        <h1 className="create-form-title">Tell us more...</h1>
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
                                                color={ i + 1 <= this.state.food ? "crimson" : "darkgray" } />
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
                                placeholder="Edit your form"
                                value={this.state.body}
                                onChange={this.handleChange('body')}>
                            </textarea>
                        </div>
                        
                        <input className="create-input-button" type="submit" value="Submit"/>
                        <div className="modal-x-button" onClick={this.props.handleEditModal}>X</div>
                    </form>  
                </div>
            </div>
        )
    }
};

export default ReviewEditForm;