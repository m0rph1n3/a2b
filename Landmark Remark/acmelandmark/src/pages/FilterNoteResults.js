import {useState , useEffect} from 'react';
import { useParams } from "react-router";
import {Link} from 'react-router-dom'

function FilterNoteResults()
{
    let { filter } = useParams();
    const [loadedNotes, setLoadedNotes] = useState([]); 


        useEffect(() => {
            
            
            //setIsLoading(true);
            fetch(
                'https://localhost:7246/api/Note/getNotesByFilter/' + filter
            )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                
                loadedNotes.push(data);
                //  const locations = [];
        
                // for (const key in data) {
                //   const locations = {
                //     id: key,
                //     ...data[key]
                //   };
        
                //   loadedLocation.push(locations);
                // }
        
                //setIsLoading(false);
                setLoadedNotes(loadedNotes[0]);
            });


        }, []);


    return(
        <div>
            <ul >
                {loadedNotes.map((n) =>(
                    <li key={n.id}><p >{n.note1}</p></li>
                    
                ))}
                
            </ul>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default FilterNoteResults;