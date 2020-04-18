import React from 'react';

const MoviesList = (props) => {
    // {const filteredMovies = props.movies.filter((movie, idx) => {
    //     if (movie.toLowerCase().includes(props.searchTerm.toLowerCase())) {
    //         return movie;
    //     }
    // });
    
    return (
        <ul>

            {props.movies.map((movie, idx) => 
                // if (movie.toLowerCase().includes(props.searchTerm.toLowerCase())) {

                <li key={movie.title + idx}>{movie.title}</li>

                // }
            )}
        </ul>
    )
}





export default MoviesList;