import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const GameDetails = (props) => {
  const { game } = props;
  if(game) {
    return (
      <div className="container section game-details">
        <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">{ game.title }</span>
              <p>{ game.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>Posted by { game.authorFirstName } { game.authorLastName }</div>
              <div>19th Nov 16:30</div>
          </div>
        </div>
      </div>
    )
  }else{
      return (
        <p className="container centre">Loading game...</p>
      )
  }
}

const mapStateToProps = (state, localProps) => {
  const id = localProps.match.params.id;
  const games = state.firestore.data.games;
  const game = games ? games[id] : null
  return {
    game: game
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'games' }
  ])
)(GameDetails);