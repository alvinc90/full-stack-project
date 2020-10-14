import React from 'react'; 
import { connect } from 'react-redux'; 
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form'; 

const mapStateToProps = (state) => {
    return ({
        session: {
            username: "", 
            email: "", 
            password: ""
        },
        formType: "Sign Up"
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (formUser) => dispatch(signup(formUser))
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm); 
