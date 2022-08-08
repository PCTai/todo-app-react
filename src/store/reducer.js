import {ADD_JOB,SET_JOB,DELETE_JOB,SET_JOBS,UPDATE_JOB, SET_FILTER, CLEAR_JOBS_COMPLETED} from '../constants'
import {addJob,setJobs,setJob,updateJob, setFilter} from '../actions';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';

const initState={
    job:"",
    jobs:[
      {
        id :1,
        completed: true,
        name: 'go Home'
      },
      {
        id :2,
        completed: true,
        name: 'go Home 2'
      }, {
        id :3,
        completed: false,
        name: 'go Home 3'
      },
    ],
    filter: 'all',
    filters :{
      all : () => true,
      active :(todo) => !todo.completed,    
      completed :(todo) => todo.completed,   
    }
  }
  
  const reducer = (state, action) =>{
    console.log('action: ' ,action);
    switch (action.type) {
      case ADD_JOB:{
        const newJob= {
          id: state.jobs.length +1,
          completed: false,
          name : action.payload
        }
        const newJobs= state.jobs;
        newJobs.push(newJob);
        return {
          ...state,
          jobs : newJobs
        };
      }
        
      case SET_JOBS:{
        const newJobs= state.jobs;
        newJobs.map((job) =>{
          return job.completed=action.payload;
        })
        console.log('newjobs:',newJobs);
        return {
          ...state,
          jobs : newJobs
        };
      }
      case SET_JOB:{
        const newJobs= state.jobs;
        newJobs.map((job) =>{
          if(job.id=== action.payload.id){
            return job.completed= action.payload.completed;
          }
          return job;
        })
        console.log('newjobs:',newJobs);
        return {
          ...state,
          jobs : newJobs
        };
      }
      case DELETE_JOB:{
        const newJobs= state.jobs;
        newJobs.pop(action.payload);
        console.log('newjobs:',newJobs);
        return {
          ...state,
          jobs : newJobs
        };
      }
      case UPDATE_JOB:{
        const newJobs= state.jobs;
        newJobs.map((job) =>{
          if(job.id === action.payload.id){
            return job.name= action.payload.value;
          }
          return job;
        })
        console.log('newjobs:',newJobs);
        return {
          ...state,
          jobs : newJobs
        };
      }
      case CLEAR_JOBS_COMPLETED:{
        
        return {
          ...state,
          jobs : state.jobs.filter((job) =>{
            return job.completed !== true
          })
        };
      }
      case SET_FILTER:{
        return {
          ...state,
          filter : action.payload
        };
      }
      default:
        return state;
    }
  }

export default reducer;
export {initState};
  