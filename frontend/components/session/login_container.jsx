import React from 'react'; 
import {connect} from 'react-redux'; 
import { login } from '../../actions/session_actions';
import SessionForm from './session_form'; 

const mapStateToProps = (state) => {
    return ({
        formType: 'Login',
        session: {
            username: "",
            email: "",
            password: ""
        },
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (formUser) => dispatch(login(formUser))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)