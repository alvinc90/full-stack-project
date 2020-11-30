import React from 'react';
import { withRouter } from 'react-router-dom';

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

    render() {
        return(
            <div className="modal-background">
                <div className="modal-child">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Food
                                <input type="radio" name="food" id="" value="1" onChange={this.handleChange('food')}/>
                                <input type="radio" name="food" id="" value="2" onChange={this.handleChange('food')}/>
                                <input type="radio" name="food" id="" value="3" onChange={this.handleChange('food')}/>
                                <input type="radio" name="food" id="" value="4" onChange={this.handleChange('food')}/>
                                <input type="radio" name="food" id="" value="5" onChange={this.handleChange('food')}/>
                            </label>
                        </div>

                        <div>
                            <label>Service
                                <input type="radio" name="service" id="" value="1" onChange={this.handleChange('service')}/>
                                <input type="radio" name="service" id="" value="2" onChange={this.handleChange('service')}/>
                                <input type="radio" name="service" id="" value="3" onChange={this.handleChange('service')}/>
                                <input type="radio" name="service" id="" value="4" onChange={this.handleChange('service')}/>
                                <input type="radio" name="service" id="" value="5" onChange={this.handleChange('service')}/>
                            </label>
                        </div>

                        <div>
                            <label>Ambience
                                <input type="radio" name="ambience" id="" value="1" onChange={this.handleChange('ambience')}/>
                                <input type="radio" name="ambience" id="" value="2" onChange={this.handleChange('ambience')}/>
                                <input type="radio" name="ambience" id="" value="3" onChange={this.handleChange('ambience')}/>
                                <input type="radio" name="ambience" id="" value="4" onChange={this.handleChange('ambience')}/>
                                <input type="radio" name="ambience" id="" value="5" onChange={this.handleChange('ambience')}/>
                            </label>
                        </div>

                        <div>
                            <label>Overall
                                <input type="radio" name="overall" id="" value="1" onChange={this.handleChange('overall')}/>
                                <input type="radio" name="overall" id="" value="2" onChange={this.handleChange('overall')}/>
                                <input type="radio" name="overall" id="" value="3" onChange={this.handleChange('overall')}/>
                                <input type="radio" name="overall" id="" value="4" onChange={this.handleChange('overall')}/>
                                <input type="radio" name="overall" id="" value="5" onChange={this.handleChange('overall')}/>
                            </label>
                        </div>

                        <div>
                            <textarea 
                                className="create-review-textarea" 
                                placeholder="How was your experience?"
                                onChange={this.handleChange('body')}>
                            </textarea>
                        </div>
                        
                        <input className="create-input-button" type="submit" value="Submit"/>
                        <button onClick={this.props.handleModal}>Close Modal</button>
                    </form>                
                </div>
            </div>
        )
    };
}

export default withRouter(ReviewCreateModal);

                                
                    
