import axios from 'axios';

const youtube= axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxresult:5,
        key:'AIzaSyDVzfU2czRPtwEvtTBBcE9cmSSVqP3zQ64'
    }
});

export default youtube;