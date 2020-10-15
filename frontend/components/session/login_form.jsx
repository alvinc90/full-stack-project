import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.session
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <h1>{this.props.formType}</h1>
                    {this.renderErrors()}
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
                    </label>
                    <button className="button-color">{this.props.formType}</button>
                </form>
            </div>
        )
    }
};

export default LoginForm;