import React, { Component } from 'react';
import Notifications from './Notifications';
import GameList from '../games/GameList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
class Dashboard extends Component{
    render(){
        //console.log(this.props);
        const { games } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <GameList games={games} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        games: state.firestore.ordered.games
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'games'}
    ])
)(Dashboard);