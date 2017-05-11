import React, { Component } from "react"

class SearchBar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<header className="search-bar">
				<input
					placeholder="Find some videos" 
					className="search-input"  
			</header>
		)
	}
}

export default SearchBar
