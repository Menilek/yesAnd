import React from 'react';

const GameList = () => {
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Game Name</span>
                    <p>Posted by improvDrinkov</p>
                    <p className="grey-text">19th Nov 15:40</p>
                </div>
            </div>

            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Game Name</span>
                    <p>Posted by laughNowCryLater</p>
                    <p className="grey-text">19th Nov 15:45</p>
                </div>
            </div>

            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Game Name</span>
                    <p>Posted by laughOrDie</p>
                    <p className="grey-text">19th Nov 16:00</p>
                </div>
            </div>
        </div>
    )
}

export default GameList;