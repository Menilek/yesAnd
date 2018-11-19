import React from 'react';
import GameSummary from './GameSummary';

const GameList = ({ games }) => {
    return(
        <div className="project-list section">
            {games && games.map(game => {
                return(
                    <GameSummary game={game} key={game.id} />
                )
            })}
        </div>
    )
}

export default GameList;