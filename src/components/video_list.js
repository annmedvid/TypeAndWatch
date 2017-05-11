import React from "react"
import VideoItem from "./video_item"

const VideoList = props => {
	const videoItems = props.videos.map(video => {
		return (
			<VideoItem
				onVideoSelect={props.onVideoSelect}
				video={video} 
				key={video.etag} />
		)
	})

	return (
		<section className="video-list">
			{videoItems}
		</section>
	)
}

export default VideoList
