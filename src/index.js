import React, { Component } from "react"
import ReactDOM from "react-dom"
import YTSearch from "youtube-api-search"
import SearchBar from "./components/search_bar"
import VideoList from "./components/video_list"

const API_KEY = "AIzaSyDhYV0Bav8Drw93vRUoAP5qaVID2K1CNVo"

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			videos: [],
			selectedVideo: null
		}

		this.videoSearch("dreams")
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		})
	}

	render() {
		return (
			<div className="app">
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector(".container"))
