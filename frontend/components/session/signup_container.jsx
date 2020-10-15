import React from 'react'; 
import { connect } from 'react-redux'; 
import { closeModal, openModal } from '../../actions/modal_action';
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
        clear: () => dispatch(clearErrors()), 
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()) 
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm); 
