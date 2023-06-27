import { useParams } from "react-router";
import {useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function AllNotesByLocIdPage()
{
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [loadedNotes, setLoadedNotes] = useState([]);
    

    const navigate = useNavigate();
    function goToAddNotes(id)
    {
        
        navigate('/add-note/'+ id, { state: { id: id} });
    }

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://localhost:7246/api/Note/GetNotesByLocId/' + id
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
    
            setIsLoading(false);
            setLoadedNotes(loadedNotes[0]);
          });
      }, []);

      if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }

    return(
        <div>
            <ul >
                {loadedNotes.map((n) =>(
                    <li key={n.id}><p >{n.note1}</p></li>
                    
                ))}
                
            </ul>
            <button onClick={()=> goToAddNotes(id)} >Add Note</button> 
        </div>
        
    )

}
export default AllNotesByLocIdPage;