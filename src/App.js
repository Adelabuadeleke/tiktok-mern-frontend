import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
     <h1>Tik Tok MERN</h1>
     <div className='app__videos'>
     <Video 
      url='https://v16-webapp.tiktok.com/8abb935566110da4c396a22650218280/62b33d6d/video/tos/useast2a/tos-useast2a-ve-0068c004/c60836f8a6d646ff99014b9e08bb9f03/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3322&bt=1661&btag=80000&cs=0&ds=3&ft=eXd.6HF2Myq8ZQzqZwe2NbQwyl7Gb&mime_type=video_mp4&qs=0&rc=N2U4PDU2O2RkNWVnOzw3M0BpanE7Ojk6ZnhmZDMzNzczM0BgLy8vYDE2XzAxLzUzXy82YSNrL28xcjRncTVgLS1kMTZzcw%3D%3D&l=202206221003240101921630320301E5C4'
      channel='adelabukamal'
      description='WOW it works'
      song='Call Me Everyday - Chris Brown ft Wizkid'
      likes={123}
      messages={456}
      shares={789}
     />
     <Video />
     </div>
     
     {/* <Video /> */}
     {/* <Video /> */}
     
    </div>
  );
}

export default App;
