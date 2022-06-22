import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else{
            videoRef.current.play()
            setPlaying(true);
        }
    }
  return (
    <div className='video'>
        <video 
        src={url}
        onClick={handleVideoPress}
        className='video__player' 
        ref={videoRef}
        ></video>
        <VideoSidebar likes={likes} messages={messages} shares={shares}/>
        <VideoFooter channel={channel} description={description} song={song} />

    </div>
  )
}

export default Video