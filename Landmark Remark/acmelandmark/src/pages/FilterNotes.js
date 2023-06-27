import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function FilterNotes()
{
    const filterRef = useRef();
    const navigate = useNavigate();
    
    

     function OnClickHandlerFilter()
     {
        const filterEntered = filterRef.current.value;
        if(filterEntered !== undefined && filterEntered !=="")
        {
            console.log("laslalsa "+ filterEntered)
            navigate('/filter-note-results/'+ filterEntered);
        }
     }
   
    return(
        <div>
            <div>
                <label htmlFor='filter'>Filter</label> 
                <input type="text" required id='filter' ref={filterRef}></input>
            </div>
            <button onClick={OnClickHandlerFilter}>Search</button>
        </div>
    )
}
export default FilterNotes;