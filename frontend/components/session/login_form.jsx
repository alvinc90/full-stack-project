import React from 'react'; 

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.session
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this); 
    }

    handleSubmit(e) { 
        e.preventDefault();
        this.props.clear();
        const formUser = Object.assign({}, this.state) 
        this.props.action(formUser)
            .then(this.props.closeModal) 
    
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = this.props.demo 
        this.props.action(demoUser)
            .then(this.props.closeModal) 
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    renderErrors() {
        // return (
        //     <ul>
        //         {this.props.errors.map((error, i) => (
        //             <li key={i}>{error}</li>
        //         ))}
        //     </ul>
        // );

        let arr = [];
        this.props.errors.forEach((error) => arr.push(error))

        let errorObject = {
            username: arr[0],
            password: arr[1]
        };

        return errorObject; 
    }

    componentDidMount() {
        this.props.clear();
    }

    render() {
        return (
            <div>

                <div className="login-form-container">
                    <form className='login-form'>
                        <h1 className="form-heading2">Please Sign In</h1>

                        <div onClick={this.props.closeModal}>
                        </div>

                        {/* {this.renderErrors()} */}

                        <label className="labels">
                            <input className="input-username" type="text" value={this.state.username} onChange={this.handleChange('username')} placeholder="Username*" />
                            <div className="error-form">{this.renderErrors().username}</div>
                        </label>
                        <label className="labels">
                            <input className="input-password" type="password" value={this.state.password} onChange={this.handleChange('password')} placeholder="Password*" />
                            <div className="error-form">{this.renderErrors().password}</div>
                        </label>

                        <button className="button-login" onClick={this.handleSubmit}>Sign In</button>
                        <button className="button-demo" onClick ={this.handleDemo}>Sign In As Demo</button> 
                    </form>
                </div>
            </div>
        )
    }
};

export default LoginForm;