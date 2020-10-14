import React from 'react'; 
import { connect } from 'react-redux'; 
import { signup } from '../../actions/session_actions';
import Signup from './signup'; 

const mapStateToProps = (state) => {
    return ({
        badAtNaming: {
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup); 
