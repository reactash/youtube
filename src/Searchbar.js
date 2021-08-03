import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Statusbar =({onFormSubmit})=>{

 const[search,setSearch]=useState('');
 
     
   const changeEvent=(e)=>{
    setSearch(e.target.value);
    console.log(search);
}

const clickEvent=(e)=>{
  onFormSubmit(search);

}

const onkeypress=(e)=>{
    if(e.key==='Enter'){
    onFormSubmit(search);
}

}

    return(
             
        <> 
        <div className='container-fluid nav-bg' >
     <div className='row p-4 '>
     <div className='col-10 mx-auto'>
   
        <div className="input-group mb-3" >
     <input type="text" className="form-control" placeholder="Search anything" 
   aria-label="Search" aria-describedby="button-addon2"
    value={search} onChange={changeEvent}
     onKeyPress={onkeypress} />
  <button className="btn btn-outline-secondary"
   type="button" 
   onClick={clickEvent}
   id="button-addon2"><SearchIcon/></button>
   </div>
     </div>
     </div>
     </div>
     
        </>
    );


}

export default Statusbar;