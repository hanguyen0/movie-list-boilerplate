import React from 'react';
import Search from './Search.jsx';
import MoviesList from './MoviesList.jsx';
import AddMovies from './AddMovies.jsx';

const movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '', movies: [] };
    this.handleSearch = this.handleSearch.bind(this);
    this.addNewMovies = this.addNewMovies.bind(this);
  }
  componentDidMount() {
    setTimeout(() => this.setState({ movies: movies }), 1000)
  }

  handleSearch(event) {
    console.log("from APP", event);
    this.setState({ search: event });
  }

  addNewMovies(movie) {
    //once received movie from AddMovies, make a copy of movies array
    const moviesList = this.state.movies.slice()
    moviesList.push(movie);
    this.setState({ movies: moviesList });
  }

  render() {
    const { search, movies } = this.state;
    return (
      <div>
        <h1>Movie List</h1>
        <Search handleSearch={this.handleSearch} />
        <AddMovies addNewMovies={this.addNewMovies} />
        <ul>
          <MoviesList movies={movies} searchTerm={search} />
        </ul>
      </div>
    )
  }
}




export default App;