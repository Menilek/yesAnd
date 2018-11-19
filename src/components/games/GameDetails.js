import React from 'react'

const GameDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section game-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Game Title - {id}</span>
            <p>Lorem ipsum bla bla bla</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by MT</div>
            <div>19th Nov 16:30</div>
        </div>
      </div>
    </div>
  )
}

export default GameDetails;