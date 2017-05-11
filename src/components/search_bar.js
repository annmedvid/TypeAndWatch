import React, { Component } from "react"

class SearchBar extends Component {
	constructor(props) {
		super(props)
	}

	onChangeInput(term) {
		this.props.onSearchTermChange(term)
	}

	render() {
		return (
			<header className="search-bar">
				<input
					placeholder="Find some videos" 
					className="search-input"  
					onChange={e => this.onChangeInput(e.target.value)} />
			</header>
		)
	}
}

export default SearchBar
