import React from 'react';

class ReviewCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            overall: "",
            food: "",
            service: "",
            ambience: "",
            user_id: "",
            restaurant_id: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.createReview(this.state);
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    render() {
        return(
            <div>
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
                            placeholder="How was your experience?">
                        </textarea>
                    </div>
                    
                    <input className="create-input-button" type="submit" value="Submit"/>
                </form>                
            </div>
        )
    };
}

export default ReviewCreate;
                                
                    
