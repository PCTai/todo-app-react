import React, { useState } from "react";
import {addJob} from '../actions';
import {useStore} from '../store';

function Header(props) {
    const [state, dispatch] =useStore();
    const {job, jobs} = state;
    const [inputJob, setInputJob] =useState('');
    
    return ( <>
        <header className="header">
            <h1>todos</h1>
            <input 
                value={inputJob} 
                onChange={(e) => setInputJob(e.target.value)} 
                onKeyUp ={(e) => {
                    if( e.keyCode=== 13 && e.target.value){
                        dispatch(addJob(inputJob));
                        setInputJob('');
                    }
                }}
                className="new-todo" 
                placeholder="What needs to be done?"/>
        </header>
    </> );
}

export default Header;