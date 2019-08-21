import { FETCH_JOBS, GET_JOB, POST_JOB, DELETE_JOB, ERROR_JOB } from './actionTypes';
import { fetchJobs, getJob, postJob, deleteJob } from '../ajax';

export const FetchJobsAction = (data) => ({
  type: FETCH_JOBS,
  data
})

export const GetJobAction = (data) => ({
  type: GET_JOB,
  data
})

export const PostJobAction = (data) => ({
  type: POST_JOB,
  data
})

export const DeleteJobAction = (id) => ({
  type: DELETE_JOB,
  id
})

export const ErrorHandleAction = (error) => ({
  type: ERROR_JOB,
  error
})

export const FetchJobs = (page) => {
  return (dispatch) => {
    fetchJobs(page).then(res => {
      return dispatch(FetchJobsAction(res.payload))
    })
    .catch(error => {
      console.log(error)
    });
  };
}

export const GetJob = (id) => {
  return (dispatch) => {
    getJob(id).then(res => {
      return dispatch(GetJobAction(res.payload))
    })
    .catch(error => {
      console.log(error)
    });
  };
}

export const PostJob = (data) => {
  return (dispatch) => {
    postJob(data).then(res => {
      return dispatch(PostJobAction(res.payload))
    })
    .catch(error => {
      return dispatch(ErrorHandleAction(error.response))
    });
  };
}

export const DeleteJob = (id) => {
  return (dispatch) => {
    deleteJob(id).then(res => {
      return dispatch(DeleteJobAction(id))
    })
    .catch(error => {
      console.log(error)
    });
  };
}