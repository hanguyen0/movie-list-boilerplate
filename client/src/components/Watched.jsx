import React from 'react';

const Watched = (props) => {
    return (
        <div onClick={() => props.event()}>
            Watched
            {props.watchedMovies.map((movie, idx) => {
                <li key={idx + movie}>{movie}</li>
            })}
        </div>
    )
}

export default Watched;