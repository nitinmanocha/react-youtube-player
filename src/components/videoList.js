import React from 'react'
import VideoListItem from './videoListItem'

const VideoList = (vids)=>{
    const videoItems = vids.videos.map((v)=>{
        return <VideoListItem onVideoSelect={vids.onVideoSelect} key={v.etag} video={v} />

    })
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}


export default VideoList