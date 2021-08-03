import React from 'react';
import {Paper, Typography,Grid} from '@material-ui/core'
import './App.css'

const VideoItem=({video,onselectedvideo})=>{

    return(
        <>
          <Grid xs={12} className='p-2'>
          <Paper onClick={()=>onselectedvideo(video)} 
          style={{display:'flex',alignItems:'center',cursor:'pointer'}}    className='vl mb-1'>
              <img src={video.snippet.thumbnails.medium.url} 
              style={{ alignItems:'center',width:'100%'}}
              alt='thumbnail' 
                
              />
              <Typography varient='subtitle1' className='lt mx-3'><b>{video.snippet.title}</b></Typography>
          </Paper>
          </Grid>
        </>

    );

}

export default VideoItem;