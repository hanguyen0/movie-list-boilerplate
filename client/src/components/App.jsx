import React from 'react';
import Search from './Search.jsx';
import MoviesList from './MoviesList.jsx';
import AddMovies from './AddMovies.jsx';
const $ = require('jquery');
import Watched from './Watched.jsx';
import ToWatch from './ToWatch.jsx';
import MOVIES_API_KEY from '../config/movies.js'
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
    this.state = { movies: [], searchMovies: [], watched: [], toWatch: [] };
    this.handleSearch = this.handleSearch.bind(this);
    this.addNewMovies = this.addNewMovies.bind(this);
    this.handleToWatch = this.handleToWatch.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
  }
  componentDidMount() {
    //this function handles ajax get
    $.ajax({
      type: 'GET',
      url: '/movies',
      success: (movies) => { this.setState({ movies: movies, searchMovies: movies }) }
    });
    // setTimeout(() => this.setState({ movies: movies }), 1000)
  }


  handleSearch(term) {
    // debugger;
    const searchArr = this.state.movies.filter((movie) => {
      if (movie.title.toLowerCase().includes(term.toLowerCase())) {
        return movie;
      }
    });
    // if (searchArr.length === 0) {
    //   searchArr = [{ title: 'No movies found with that name.' }]
    // }
    this.setState({ searchMovies: searchArr });
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
        const moviesList = [...this.state.movies];
        moviesList.push(movie);
        this.setState({ movies: moviesList });
      }
    });
  }

  handleWatched(watchedMovie) {
    let watchedArr = [...this.state.watched];
    watchedArr.push(watchedMovie);
    this.setState({ watched: watchedArr });
  }

  handleToWatch(toWatch) {
    // console.log(toWatch);
    let watchedArr = [...this.state.watched];
    watchedArr.push(toWatch);
    this.setState({ toWatch: watchedArr });
  }
  showToWatch(event) {
    console.log(event);
  }
  showWatched(event) {
    console.log(event);
  }
  render() {

    const { searchMovies, watched, toWatch } = this.state;

    return (
      <div>
        <h1>Movie List</h1>
        <Search handleSearch={this.handleSearch} />
        <AddMovies addNewMovies={this.addNewMovies} />
        <Watched event={this.showWatched} watchedMovies={watched} />
        <ToWatch event={this.showToWatch} toWatchMoives={toWatch} />
        <ul>
          <MoviesList movies={searchMovies} watched={this.handleWatched} toWatch={this.handleToWatch} />
        </ul>
      </div>
    )
  }
}




export default App;