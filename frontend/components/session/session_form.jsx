import React from 'react'; 

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.badAtNaming
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
                    </label>
                    <label>email:
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                    </label>
                    <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}; 

export default SessionForm;