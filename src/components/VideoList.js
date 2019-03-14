import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

  const videoItem = videos.map(video => {
    return <VideoItem key={video.snippet.title} onVideoSelect={onVideoSelect} video={video}/>
  });

  return(
    <div className="ui relaxed list divided"> { videoItem }  </div>
  );
}

export default VideoList;