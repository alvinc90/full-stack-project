import React from 'react'; 
import { connect } from 'react-redux'; 
import { signup, clearErrors } from '../../actions/session_actions';
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
        action: (formUser) => dispatch(signup(formUser)), 
        clear: () => dispatch(clearErrors())
        // clear: () => dispatch(receiveSessionErrors()) 
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm); 
