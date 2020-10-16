import React from 'react'; 
import {connect} from 'react-redux'; 
import { closeModal, openModal } from '../../actions/modal_action';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';   


const mapStateToProps = (state) => {
    return ({
        formType: 'Login',
        session: {
            username: "",
            password: ""
        },
        errors: state.errors.sessionErrors,
        demo: {
            username: "demo",
            password: "password"
        },
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (formUser) => dispatch(login(formUser)),
        clear: () => dispatch(clearErrors()),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal()) 
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)