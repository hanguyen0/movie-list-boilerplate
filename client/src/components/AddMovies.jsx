import React from 'react';

class AddMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(event) {
        // console.log("input Add Movies")
        this.setState({ title: event.target.value });
    }
    handleClick() {
        console.log("clicked from AddMovies");
        //pass movie to App.js and update movie list
        this.props.addNewMovies(this.state)
    }

    render() {
        const { title } = this.state;
        return (
            <div className="add-movie form-inline">
                <input className="form-control" type="text" value={title} onChange={this.handleInput} />
                <button className="btn hidden-sm-down" onClick={this.handleClick}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddMovies;