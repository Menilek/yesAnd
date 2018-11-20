import React, { Component } from 'react'
import { connect } from 'react-redux';
import createGame from '../../store/actions/gameActions';

class CreateGame extends Component {
    state = {
        title: '',
        content:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createGame(this.state)
        //console.log(this.state);
    }

    render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create new game</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="content">Game Content</label>
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
            </div>
            <button className="btn black lighten-1 z-depth-0">Create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createGame: (game) =>  dispatch(createGame(game))
    }
}
//first param in the connect function is normally mapStateToProps but we don't have it so will use null
export default connect(null, mapDispatchToProps)(CreateGame);
