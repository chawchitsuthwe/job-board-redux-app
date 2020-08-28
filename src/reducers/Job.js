let initialState = { pending: true, jobs:[] };

const Job = (state = initialState, action) => {
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

export default Job;