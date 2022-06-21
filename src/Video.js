import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
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
        src='https://v16-webapp.tiktok.com/ea6ca0b850f7b0c1fe03d478af35e0ab/62adfe5c/video/tos/useast2a/tos-useast2a-ve-0068c003/1e7c2988ff354e6583e3108a46a468cf/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1988&bt=994&btag=80000&cs=0&ds=3&ft=eXd.6HF2Myq8ZzASuwe2NBMJyl7Gb&mime_type=video_mp4&qs=0&rc=aGZkaDZmM2Q6NGU2ODQ4OUBpaml0bDw6ZmdpPDMzNzczM0AtNC9jYjAvNS8xYDM2XzFgYSNnZjFycjRnMF9gLS1kMTZzcw%3D%3D&l=2022061810325201022307203522918374' 
        onClick={handleVideoPress}
        className='video__player' 
        ref={videoRef}
        controls
        ></video>
        <VideoSidebar />
        <VideoFooter />

    </div>
  )
}

export default Video