import { useParams } from "react-router";
import {useNavigate } from 'react-router-dom';
import SaveNoteForm from '../components/SaveNoteForm';

function AddNotesByLocIdPage()
{
    let { id } = useParams();
    
    const history =useNavigate ();

    function addNoteHandler(noteData)
    {
        
        fetch('https://localhost:7246/api/Note/SaveNote',{
            method: 'POST',
            body: JSON.stringify(noteData),
            headers:{
                'Content-type': 'application/json'
            }
        }).then(() =>{
            history('/', { replace: true })
        });
    };
    

    return   (
        
        <div>
            <SaveNoteForm fkLocid ={id} onAddNote={addNoteHandler} />
            
        </div>
    );

};


export default  AddNotesByLocIdPage;