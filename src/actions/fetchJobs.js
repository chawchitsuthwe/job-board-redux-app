import { fetchJobsPending, fetchJobsSuccess, fetchJobsError } from './index';
import { fetchAllJobsPending, fetchAllJobsSuccess, fetchAllJobsError } from './index';
import axios from 'axios';

export const fetchAllJobs = () => {

    var link = "https://api.lever.co/v0/postings/leverdemo?mode=json";

    const encodedUrl = encodeURI(link);
    console.log(encodedUrl)

    return dispatch => {
        dispatch(fetchAllJobsPending());
        return axios.get(encodedUrl)
                    .then(res => {
                        dispatch(fetchAllJobsSuccess(res.data));
                    })
                    .catch(err => {
                        dispatch(fetchAllJobsError(err));
                    });

    }
}

export const fetchLimitJobs = () => {

    var link = "https://api.lever.co/v0/postings/leverdemo?limit=5&mode=json";

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

export const fetchJobsById = ( keyword ) => {

    var link  = `https://api.lever.co/v0/postings/leverdemo/${keyword}`;

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


export const fetchJobsBySearch = ( keyword ) => {

    var link = `https://api.lever.co/v0/postings/leverdemo?${keyword}mode=json`;

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

