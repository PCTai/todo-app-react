import { useStore } from "../store";
import {setFilter, clearJobsComplete} from '../actions';


function Footer() {
    const [state, dispatch] =useStore();
    const {job, jobs, filters,filter} = state;
    console.log(filter)
    
    return ( 
        // <!-- This footer should be hidden by default and shown when there are todos -->
    <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count"><strong>{jobs.filter(filters[filter]).length}</strong> item left</span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
            {Object.keys(filters).map(type => (
                <li key={type}>
                    <a 
                        onClick={e =>dispatch(setFilter(type))}
                        className="selected" 
                        href={`#${type}`}
                    >{type[0].toUpperCase() + type.slice(1)}</a>
                </li>
            ))}
        </ul>
        {/* <!-- Hidden if no completed items are left ↓ --> */}
        <button 
            className="clear-completed"
            onClick={e => dispatch(clearJobsComplete())}
        >Clear completed</button>
    </footer>
     );
}

export default Footer;