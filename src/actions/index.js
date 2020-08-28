export const FETCH_JOBS_PENDING = 'FETCH_JOBS_PENDING';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_ERROR = 'FETCH_JOBS_ERROR';

export const FETCH_CATEGORY_PENDING = 'FETCH_CATEGORY_PENDING';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR';

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

export const fetchCategoriesPending = () => {
    return {
        type: FETCH_CATEGORY_PENDING
    }
}

export const fetchCategoriesSuccess = (categories) => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: {
            categories
        }
    }
}

export const fetchCategoriesError = (error) => {
    return {
        type: FETCH_CATEGORY_ERROR,
        payload: {
            error
        }
    }
}