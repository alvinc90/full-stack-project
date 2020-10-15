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
        const formUser = Object.assign({}, this.state) 
        this.props.action(formUser)
            .then(this.props.closeModal) 
    
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.action(this.props.demo)
            .then(this.props.closeModal) 
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        );
    }

    componentDidMount() {
        this.props.clear();
    }

    render() {
        return (
            <div>

                <div className="login-form-container">
                    <form className='login-form'>
                        <h1>Please Sign In</h1>

                        <div onClick={this.props.closeModal}>
                        </div>

                        {this.renderErrors()}

                        <label>
                            <input type="text" value={this.state.username} onChange={this.handleChange('username')} placeholder="Username*" />
                        </label>
                        <label>
                            <input type="password" value={this.state.password} onChange={this.handleChange('password')} placeholder="password*" />
                        </label>

                        <button className="button-color" onClick={this.handleSubmit}>Sign In</button>
                        <button onClick={this.handleDemo}>Sign In As Demo</button> 
                    </form>
                </div>
            </div>
        )
    }
};

export default LoginForm;