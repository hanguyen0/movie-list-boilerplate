import React from 'react';

const MoviesList = (props) => {
    return (
        <div>

            {props.movies.filter((movie, idx) => {
                if (movie.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                    return (
                        <li key={movie.title + idx}>{movie.title}</li>
                    )
                }
                
            })}
        </div>
    )
}





export default MoviesList;