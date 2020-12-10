import React from 'react';  

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.session;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clear(); 
        const formUser = Object.assign({}, this.state)
        this.props.action(formUser)
            .then(this.props.closeModal); 
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    componentDidMount() {
        this.props.clear(); 
    }


    renderErrors() { 
        
        let arr = [];
        this.props.errors.forEach((error) => arr.push(error))

        let errorObject = {};
        arr.forEach((errMsg) => {
            if (errMsg.includes("Username")) { errorObject["username"] = errMsg }
            else if (errMsg.includes("Password")) { errorObject["password"] = errMsg }
            else if (errMsg.includes("Email")) { errorObject["email"] = errMsg }
        })

        return errorObject; 
    }




    render() {
        // const firstNameError = this.props.errors.forEach(() ) ? ("firstNameError") : ("hidden") 

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <h1 className="form-heading">Welcome to OpenStreetTable!</h1>

                    {/* <div onClick={this.props.closeModal}> */}
                    {/* </div> */}
                    {/* <div className="form-input-container"> */}
                        <label className="labels">
                            <input className="input-username" type="text" value={this.state.username} onChange={this.handleChange('username')} placeholder="Username*"/>
                            <div className="error-form">{this.renderErrors().username}</div>
                        </label>
                        <label className="labels">
                            <input className="input-email" type="email" value={this.state.email} onChange={this.handleChange('email')} placeholder="Email*"/>
                            <div className="error-form">{this.renderErrors().email}</div>
                        </label>
                        <label className="labels">
                            <input className="input-password" type="password" value={this.state.password} onChange={this.handleChange('password')} placeholder="Password*"/>
                            <div className="error-form">{this.renderErrors().password}</div>
                        </label>
                        <label> 
                            <select className="selector" defaultValue="Dining Location">
                                <option disabled value="Dining Location">Dining Location*</option>
                                <option value="San Francisco">San Francisco</option>
                                <option value="New York">New York</option>
                                <option value="Chicago">Chicago</option>
                                <option value="Los Angeles">Los Angeles</option>
                            </select>
                        </label>
                    {/* </div> */}

                    <button className="button-signup">Create Account</button>
                </form>
            </div>

        )
    }
};  

export default SignUpForm;
                        