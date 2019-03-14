import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

  const videoItem = props.videos.map(video => {
    return <VideoItem video={video}/>
  });

  return(
    <div className="ui relaxed list divided"> { videoItem }  </div>
  );
}

export default VideoList;