import React from "react"

const VideoItem = props => {
	const videoUrl = props.video.snippet.thumbnails.medium.url
	const videoDescription = props.video.snippet.title

	return (
		<div className="video-item" onClick={() => props.onVideoSelect(props.video)}>
			<img src={videoUrl} />
			<p>{videoDescription}</p>
		</div>
	)
}

export default VideoItem
