import React from 'react';
import Search from './Search.jsx';
import MoviesList from './MoviesList.jsx';
import AddMovies from './AddMovies.jsx';
const $ = require('jquery');

// const movies = [
//   { title: 'Mean Girls' },
//   { title: 'Hackers' },
//   { title: 'The Grey' },
//   { title: 'Sunshine' },
//   { title: 'Ex Machina' },
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '', movies: [] };
    this.handleSearch = this.handleSearch.bind(this);
    this.addNewMovies = this.addNewMovies.bind(this);
  }
  componentDidMount() {
    //this function handles ajax get
    $.ajax({
      type: 'GET',
      url: '/movies',
      success: (movies) => { this.setState({ movies: movies }) }
    });
    // setTimeout(() => this.setState({ movies: movies }), 1000)
  }


  handleSearch(term) {

    const searchArr = this.state.movies.filter((movie) => {
      if (movie.title.toLowerCase().includes(term.toLowerCase())) {
        return movie;
      }
    });
    // if (searchArr.length === 0) {
    //   searchArr = [{ title: 'No movies found with that name.' }]
    // }
    this.setState({ movies: searchArr });
  }

  addNewMovies(movie) {
    //once received movie from AddMovies, make a copy of movies array
    $.ajax({
      type: 'POST',
      url: '/movies',
      contentType: 'application/json',
      data: JSON.stringify(movie),
      success: (data) => {
        movie.id = data.insertId;
        const moviesList = [...this.state.movies]
        moviesList.push(movie);
        this.setState({ movies: moviesList });
      }
    });

  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Movie List</h1>
        <Search handleSearch={this.handleSearch} />
        <AddMovies addNewMovies={this.addNewMovies} />
        <ul>
          <MoviesList movies={movies} />
        </ul>
      </div>
    )
  }
}




export default App;