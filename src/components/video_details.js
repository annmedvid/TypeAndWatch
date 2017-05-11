import React from "react"

const VideoDetails = (props) => {
	if (!props.video) {
		return <div>Loading...</div>
	}

	const videoId = props.video.id.videoId
	const url = `https://www.youtube.com/embed/${videoId}`

	return (
		<section className="video-details">
			<iframe src={url}></iframe>
			<div>
				<h1>{props.video.snippet.title}</h1>
				<p>{props.video.snippet.description}</p>
			</div>
		</section>
	)
}

export default VideoDetails
