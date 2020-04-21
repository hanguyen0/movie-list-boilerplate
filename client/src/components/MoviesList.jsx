import React from 'react';

const MoviesList = (props) => {
    return (
        <ul>

            {props.movies.map((movie, idx) =>
                <li key={movie.title + idx}>{movie.title}
                    <button className="toWatch" onClick={() => props.toWatch(movie)}>To Watch</button>
                    <button className="watched" onClick={() => props.watched(movie)}>watched</button>
                </li>
            )}
        </ul>
    )
}





export default MoviesList;