import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRating from '../star_rating';
import Star from '../star/star';

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
        // debugger
        return(
            <div className="modal-background" onClick={this.props.handleModal}>
                <div className="modal-child" onClick={this.handlePropagation}>
                    <form onSubmit={this.handleSubmit}>
                        <h1 className="create-form-title">Share your experience</h1>
                        <div className="rating-outer-container">
                            <div className="rating-inner-container">
                                <label>Food
                                    <input type="radio" name="food" id="" value="1" onChange={this.handleChange('food')}/>
                                    <input type="radio" name="food" id="" value="2" onChange={this.handleChange('food')}/>
                                    <input type="radio" name="food" id="" value="3" onChange={this.handleChange('food')}/>
                                    <input type="radio" name="food" id="" value="4" onChange={this.handleChange('food')}/>
                                    <input type="radio" name="food" id="" value="5" onChange={this.handleChange('food')}/>
                                </label>
                            </div>

                            <div className="rating-inner-container"> 
                                <label>Service
                                    <input type="radio" name="service" id="" value="1" onChange={this.handleChange('service')}/>
                                    <input type="radio" name="service" id="" value="2" onChange={this.handleChange('service')}/>
                                    <input type="radio" name="service" id="" value="3" onChange={this.handleChange('service')}/>
                                    <input type="radio" name="service" id="" value="4" onChange={this.handleChange('service')}/>
                                    <input type="radio" name="service" id="" value="5" onChange={this.handleChange('service')}/>
                                </label>
                            </div>

                            <div className="rating-inner-container">
                                <label>Ambience
                                    <input type="radio" name="ambience" id="" value="1" onChange={this.handleChange('ambience')}/>
                                    <input type="radio" name="ambience" id="" value="2" onChange={this.handleChange('ambience')}/>
                                    <input type="radio" name="ambience" id="" value="3" onChange={this.handleChange('ambience')}/>
                                    <input type="radio" name="ambience" id="" value="4" onChange={this.handleChange('ambience')}/>
                                    <input type="radio" name="ambience" id="" value="5" onChange={this.handleChange('ambience')}/>
                                </label>
                            </div>

                            <div className="rating-inner-container">
                                <label>Overall
                                    <input type="radio" name="overall" id="" value="1" onChange={this.handleChange('overall')}/>
                                    <input type="radio" name="overall" id="" value="2" onChange={this.handleChange('overall')}/>
                                    <input type="radio" name="overall" id="" value="3" onChange={this.handleChange('overall')}/>
                                    <input type="radio" name="overall" id="" value="4" onChange={this.handleChange('overall')}/>
                                    <input type="radio" name="overall" id="" value="5" onChange={this.handleChange('overall')}/>
                                </label>
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


                                
                    
