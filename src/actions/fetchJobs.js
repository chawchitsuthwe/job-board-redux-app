import { fetchJobsPending, fetchJobsSuccess, fetchJobsError } from './index';
import axios from 'axios';

const fetchJobs = ( keyword ) => {
    var link = "/api/remote-jobs?limit=10";
    switch(keyword){
        case 'all' : link = "/api/remote-jobs?limit=20";break;
        case 'limit' : link = "/api/remote-jobs?limit=9";break;
        case 'software-dev' : link = "/api/remote-jobs?category=software-dev&limit=10";break;
        case 'customer-support' : link = "/api/remote-jobs?category=customer-support&limit=10";break;
        case 'design' : link = "/api/remote-jobs?category=design&limit=10";break;
        case 'marketing-sales' : link = "/api/remote-jobs?category=marketing-sales&limit=10";break;
        case 'product' : link = "/api/remote-jobs?category=product&limit=10";break;
        case 'all-others' : link = "/api/remote-jobs?category=all-others&limit=10";break;
        default : link = `/api/remote-jobs?search=${keyword}`;
    }

    const encodedUrl = encodeURI(link);

    return dispatch => {
        dispatch(fetchJobsPending());
        return axios.get(encodedUrl)
                    .then(res => {
                        dispatch(fetchJobsSuccess(res.data.jobs));
                    })
                    .catch(err => {
                        dispatch(fetchJobsError(err));
                    });

    }
}

export default fetchJobs;