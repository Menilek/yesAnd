import React, { Component } from 'react'
import { connect } from 'react-redux';
import { LogIn } from '../../store/actions/authActions';

class logIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.LogIn(this.state);
    }

    render() {
        const { authError } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Log In</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <button className="btn black lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
                { authError ? <p>Auth Error</p> : null }
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LogIn: (credentials) => dispatch(LogIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(logIn);
