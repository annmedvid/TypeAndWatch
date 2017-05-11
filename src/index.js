import _ from "lodash"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import YTSearch from "youtube-api-search"
import SearchBar from "./components/search_bar"
import VideoList from "./components/video_list"
import VideoDetails from "./components/video_details"

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

	videoSelect(video) {
		this.setState({
			selectedVideo: video
		})
	}

	render() {
		let videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

		return (
			<div className="app">
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetails video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={video => this.videoSelect(video)} 
					videos={this.state.videos} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector(".container"))
