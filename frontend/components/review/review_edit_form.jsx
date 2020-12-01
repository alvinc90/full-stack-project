import React from 'react';

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