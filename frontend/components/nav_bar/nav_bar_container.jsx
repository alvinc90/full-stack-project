import React from 'react'; 
import { connect } from 'react-redux'; 
import NavBar from './nav_bar'; 
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_action';  

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser
    })
}; 

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        openModal: (modal) => dispatch(openModal(modal))
    })
}; 

export default connect(mapStateToProps, mapDispatchToProps)(NavBar); 