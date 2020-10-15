import React from 'react'; 
import {connect} from 'react-redux'; 
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form'; 


const mapStateToProps = (state) => {
    return ({
        formType: 'Login',
        session: {
            username: "",
            password: ""
        },
        errors: state.errors.session
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (formUser) => dispatch(login(formUser)),
        clear: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)