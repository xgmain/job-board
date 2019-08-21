import { FETCH_JOBS, GET_JOB, POST_JOB, DELETE_JOB, ERROR_JOB } from './actionTypes';

const initialState = {
  jobs: [],
  job: {},
  error: {},
  total_page: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS:
      // console.log(action.data)
      return {...state, jobs: action.data.data, total_page: action.data.last_page}
    case GET_JOB:
      return {...state, job: action.data}
    case POST_JOB:
      return {...state, jobs: state.jobs.concat( action.data )}
    case DELETE_JOB:
      const { jobs } = state
      const filteredItems = jobs.filter((job) => job.id !== action.id)
      return {...state, jobs: [ ...filteredItems ]}
    case ERROR_JOB:
      return {...state, error: action.error}
    default:
      return state
  }
}