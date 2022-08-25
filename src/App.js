import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import axios from './axios.js'

function App() {
  const [videos, setVideos] = useState([])

  useEffect (() => {
    async function fetchPosts() {
      const response  = await axios.get("/v2/posts");
      setVideos(response.data);
      
    }
    fetchPosts();
  }, []);

  console.log(videos)
  return (
    <div className="app">
     <h1>Tik Tok MERN</h1>
     <div className='app__videos'>
      {videos.map(
        ({url, channel, description, song, likes, messages, shares}) => (
          <Video 
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          messages={messages}
          description={description}
          shares={shares}
          />
        ))
      }
     </div>
     
    </div>
  );
}

export default App;
