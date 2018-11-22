import React from 'react';
import GameSummary from './GameSummary';
import { Link } from 'react-router-dom';

const GameList = ({ games }) => {
    return(
        <div className="project-list section">
            {games && games.map(game => {
                return(
                    <Link to={'/game/' + game.id} key={game.id}>
                        <GameSummary game={game} />
                    </Link>
                )
            })}
        </div>
    )
}

export default GameList;