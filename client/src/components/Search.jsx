import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHander = this.clickHander.bind(this);
    }
    changeHandler(event) {
        // console.log(event.target.name)
        this.setState({ searchTerm: event.target.value })

    }
    clickHander(event) {
        // console.log(this.state)
        this.props.handleSearch(this.state.searchTerm);
    }
    render() {
        const { searchTerm } = this.state;
        return (
            <div className="search-bar form-inline">
                <input className="form-control" type="text" value={searchTerm} onChange={this.changeHandler} />
                <button className="btn hidden-sm-down" onClick={this.clickHander}>
                    Search
                </button>
            </div>
        )
    }
}

export default Search;