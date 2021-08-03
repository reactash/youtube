import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import VideoItem from './VideoItem';
import {Grid} from '@material-ui/core';
import './App.css'

const VideoList=({videos,onselectedvideo})=>{
   const  list=videos.map((video,id)=>
    <VideoItem onselectedvideo={onselectedvideo}
       key={id}
       video={video}
     />);
       
       return(
        <Grid container spacing={10}>
        {list}
     </Grid>
       );
   


};

export default VideoList;