import React,{useState } from 'react';
import youtube from './youtube';
import Searchbar from './Searchbar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import { Grid } from '@material-ui/core';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import YouTubeIcon from '@material-ui/icons/YouTube';

import './App.css'


const App=()=>{

   const[video,setVideo]=useState([]);
   const[selectedvideo,setSelectedVideo]=useState(null);
   
  
     const fetchData=async(query)=>{
     const request =await youtube.get('search',{
     params:{
          part :'snippet',
          maxResults:5,
          key:'AIzaSyDVzfU2czRPtwEvtTBBcE9cmSSVqP3zQ64',
          q:query
     },
       }); 
     setVideo(request.data.items)
     setSelectedVideo(request.data.items[0])
     console.log(video);
     console.log(selectedvideo);
     
   }

 
    return(<>


       <Grid justify='center' container spacing={16} >

       <Grid>
         <Grid className='align-items-center pt-4'>
         <h3><YouTubeIcon style={{color:'red' }}/>YouTube Clone</h3></Grid>
       </Grid>
             <Grid item xs={11} className='cont row '>
             <Grid container spacing={16}>

       <Grid className='sb col-lg-12'>      
       <Searchbar onFormSubmit={fetchData}/>
       </Grid>

       <Grid  className='vd col-lg-7'>             
       <VideoDetail video={selectedvideo}/>
       </Grid>

       <Grid   className='pt-5 vi col-lg-5'> 
       <VideoList videos={video} onselectedvideo={setSelectedVideo}/>
       </Grid>


       </Grid>
       </Grid>
       </Grid>
       </>
    );
}



export default App;