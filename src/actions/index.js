export const FETCH_ALL_JOBS_PENDING = 'FETCH_ALL_JOBS_PENDING';
export const FETCH_ALL_JOBS_SUCCESS = 'FETCH_ALL_JOBS_SUCCESS';
export const FETCH_ALL_JOBS_ERROR = 'FETCH_ALL_JOBS_ERROR';

export const fetchAllJobsPending = () => {
    return {
        type: FETCH_ALL_JOBS_PENDING
    }
}

export const fetchAllJobsSuccess = (alljobs) => {
    return {
        type: FETCH_ALL_JOBS_SUCCESS,
        payload: {
            alljobs
        }
    }
}

export const fetchAllJobsError = (error) => {
    return {
        type: FETCH_ALL_JOBS_ERROR,
        payload: {
            error
        }
    }
}

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