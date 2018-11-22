import React from 'react';
import moment from 'moment';

const GameSummary = ({ game }) => {
    return(
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{ game.title }</span>
                    <p>Posted by { game.authorFirstName } { game.authorLastName }</p>
                    <p className="grey-text">
                        { moment(game.createdAt.toDate().toString()).calendar() }
                    </p>
                </div>
        </div>
    )
}

export default GameSummary;