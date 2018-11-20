import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Game</NavLink></li>
            <li><a onClick={props.logOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating black lighten-1">MT</NavLink></li>
        </ul>
    )    
}

const mapDispatchToProps = (dispatch) => {
    return({
        logOut: () => dispatch(logOut())
    })
}

export default connect(null, mapDispatchToProps)(SignedInLinks);