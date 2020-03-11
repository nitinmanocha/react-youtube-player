import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { keyword: '' };
    }

    render() {
        return (
            <div className="search-bar">
    Search : <input className="searchbox" onChange={e => this.onInputChange(e.target.value)} />
            </div>
        )
    }
    onInputChange(keyword){
        this.setState({keyword : keyword})
        this.props.onInputChange(keyword)
    }
}


export default SearchBar;