export const FETCH_JOBS_PENDING = 'FETCH_JOBS_PENDING';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_ERROR = 'FETCH_JOBS_ERROR';

export const fetchJobsPending = () => {
    return {
        type: FETCH_JOBS_PENDING
    }
}

export const fetchJobsSuccess = (jobs) => {
    return {
        type: FETCH_JOBS_SUCCESS,
        payload: {
            jobs
        }
    }
}

export const fetchJobsError = (error) => {
    return {
        type: FETCH_JOBS_ERROR,
        payload: {
            error
        }
    }
}