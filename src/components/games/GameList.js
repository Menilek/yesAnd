import React from 'react';
import GameSummary from './GameSummary';

const GameList = () => {
    return(
        <div className="project-list section">
            <GameSummary />
            <GameSummary />
            <GameSummary />
        </div>
    )
}

export default GameList;