import React from 'react'; 
import { connect } from 'react-redux'; 
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form'; 

const mapStateToProps = (state) => {
    return ({
        session: {
            username: "", 
            email: "", 
            password: ""
        },
        formType: "Sign Up",
        errors: state.errors.session 
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (formUser) => dispatch(signup(formUser))
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm); 
