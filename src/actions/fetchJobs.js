import { fetchJobsPending, fetchJobsSuccess, fetchJobsError } from './index';
import axios from 'axios';

const fetchJobs = ( keyword ) => {

    var link = "https://api.lever.co/v0/postings/leverdemo?mode=json";

    var type = keyword.substring(0,3);

    keyword = keyword.substring(3);
    
    switch(type){
        case 'all' : link = "https://api.lever.co/v0/postings/leverdemo?mode=json";break;
        case 'li:' : link = "https://api.lever.co/v0/postings/leverdemo?limit=5&mode=json";break;
        case 'ca:' : link = `https://api.lever.co/v0/postings/leverdemo?commitment=${keyword}&mode=json`;break;
        case 'se:' : link = `https://api.lever.co/v0/postings/leverdemo?mode=json&team=${keyword}`;break;
        case 'id:' : link = `https://api.lever.co/v0/postings/leverdemo/${keyword}`;break;
        default : link = "https://api.lever.co/v0/postings/leverdemo?mode=json";
    }
    const encodedUrl = encodeURI(link);
    console.log(encodedUrl)

    return dispatch => {
        dispatch(fetchJobsPending());
        return axios.get(encodedUrl)
                    .then(res => {
                        dispatch(fetchJobsSuccess(res.data));
                    })
                    .catch(err => {
                        dispatch(fetchJobsError(err));
                    });

    }
}

export default fetchJobs;