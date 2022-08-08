import {ADD_JOB,SET_JOB,DELETE_JOB,SET_JOBS, UPDATE_JOB, SET_FILTER, CLEAR_JOBS_COMPLETED} from './constants'
const addJob= (payload)=>{
    return {
      type: ADD_JOB,
      payload
    }
}
const setJobs= (payload)=>{
  return {
    type: SET_JOBS,
    payload
  }
}
const deleteJob= (payload)=>{
  return {
    type: DELETE_JOB,
    payload
  }
}
const setJob= (payload)=>{
  return {
    type: SET_JOB,
    payload
  }
}
const updateJob= (payload)=>{
  return {
    type: UPDATE_JOB,
    payload
  }
}
const clearJobsComplete= ()=>{
  return {
    type: CLEAR_JOBS_COMPLETED,
  }
}

const setFilter= (payload)=>{
  return {
    type: SET_FILTER,
    payload
  }
}
export {addJob,setJobs,deleteJob,setJob,updateJob, setFilter, clearJobsComplete} 