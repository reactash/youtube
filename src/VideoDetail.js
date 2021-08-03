import React from 'react'
import {Paper} from '@material-ui/core';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const VideoDetail=({video})=>{
    
    if(!video) return <div>Loading....</div>

    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;

    return(
          <>
           <div className='video-container' style={{height:'70vh'}} >
          <Paper elevation={6} style={{ height:'65vh' }}>
          <iframe frameBorder='0' height='100%' width='100%' title='Video Player'
           src={videoSrc}/>
             </Paper>
             <Paper elevation={6} className='p-2'>
           <h4>{video.snippet.channelTitle}</h4>
           <p>{video.snippet.description}</p>
           </Paper>
           </div>
        
         
          </>
    );
}

export default VideoDetail;