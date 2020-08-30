let initialState = { pending: true, jobs:[] };

export const Jobs = (state = initialState, action) => {
  switch(action.type){
    case "FETCH_JOBS_PENDING":
      return{
        initialState,
        pending: true
      };
    case "FETCH_JOBS_SUCCESS":
      return{
        ...state,
        pending: false,
        jobs: action.payload.jobs
      };
    case "FETCH_JOBS_ERROR":
      return{
        ...state,
        pending: true,
      }
    default:
      return{
        ...state
      };
  }
}

export const AllJobs = (state = initialState, action) => {
  switch(action.type){
    case "FETCH_ALL_JOBS_PENDING":
      return{
        initialState,
        pending: true
      };
    case "FETCH_ALL_JOBS_SUCCESS":
      return{
        ...state,
        pending: false,
        alljobs: action.payload.alljobs
      };
    case "FETCH_ALL_JOBS_ERROR":
      return{
        ...state,
        pending: true,
      }
    default:
      return{
        ...state
      };
  }
}