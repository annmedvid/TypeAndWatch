import React, { Component } from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/search_bar"
import VideoList from "./components/video_list"

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="app">
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector(".container"))
