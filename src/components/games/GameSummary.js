import React from 'react';

const GameSummary = ({ game }) => {
    return(
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{ game.title }</span>
                    <p>Posted by { game.authorFirstName } { game.authorLastName }</p>
                    <p className="grey-text">19th Nov 15:40</p>
                </div>
        </div>
    )
}

export default GameSummary;