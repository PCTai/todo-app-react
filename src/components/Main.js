import React, { useEffect, useState } from "react"
import { useAutoFocus, useStore } from "../store";
import {setJobs,setJob,deleteJob, updateJob} from '../actions';

function Main(props) {
    const [state, dispatch] =useStore();
    const {job,filters, jobs,filter} = state;
    const [toggleAll, settoggleAll] =useState(jobs.every(filters.completed));
    const handleToggleAll =() =>{
        settoggleAll(!toggleAll);
        
    }
    const handleSetJob =(e,id) =>{
        const data ={
            completed: e.target.checked,
            id
        }
        dispatch(setJob(data));
        
    }
    const handleDeleteJob =(id) =>{
        dispatch(deleteJob(id))
    }

    const handleDoubleClick = (id) =>{
        const inputEl = document.querySelector(`.item${id}`);
        if(inputEl){
            const liEl =inputEl.closest('li');
            liEl.classList.toggle('editing');
        }
    }
    const handleBlur = (id) =>{
        const inputEl = document.querySelector(`.item${id}`);
        if(inputEl){
            const liEl =inputEl.closest('li');
            liEl.classList.toggle('editing');
            console.log('blur')
        }
    }
    const editInput = useAutoFocus();
    useEffect(() =>{
        const handleSetJobs =() =>{
            dispatch(setJobs(toggleAll));
        }
        handleSetJobs();
    },[toggleAll]);
    useEffect(() =>{
        if(jobs.every(filters.completed)){
            settoggleAll(!toggleAll);
        }
    },[jobs]);
    return ( <>
    <section className="main">
        <input onChange={(e) => handleToggleAll()} 
            value ={toggleAll}
            checked ={jobs.every(filters.completed) ? true : false } 
            id="toggle-all" 
            className="toggle-all" 
            type="checkbox"/>
        <label htmlFor="toggle-all" >Mark all as complete</label>
        <ul className="todo-list">

            {jobs.filter(filters[filter]).map(((job) =>(
                <li key={job.id} className={job.completed? 'completed' :''}>
                    <div className="view">
                        <input checked={job.completed}  
                            onChange={e => handleSetJob(e,job.id)} 
                            className={`toggle item${job.id}`} 
                            type="checkbox" />
                        <label onDoubleClick={e =>{
                            handleDoubleClick(job.id);

                        }} 
                            
                        >{job.name}</label>
                        <button onClick={e =>handleDeleteJob(job.id)} className="destroy"></button>
                    </div>
                <input 
                    onKeyUp={e =>{
                        if( e.keyCode=== 13 && e.target.value){
                            const data = {
                                value :e.target.value,
                                id : job.id
                            };
                            dispatch(updateJob(data));
                            e.target.blur();
                        }
                    }}
                    ref={editInput}
                    onBlur ={e => {
                        handleBlur(job.id);
                    }}
                    className="edit"
                    placeholder="Enter new todo"/>
            </li>
            )))}
            
            {/* <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}
           
        </ul>
    </section></> );
}

export default Main;