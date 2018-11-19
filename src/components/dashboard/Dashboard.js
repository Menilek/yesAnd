import React, { Component } from 'react';
import Notifications from './Notifications';
import GameList from '../games/GameList';
import { connect } from 'react-redux';
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
    return{
        games: state.game.games
    }
}

export default connect(mapStateToProps)(Dashboard);