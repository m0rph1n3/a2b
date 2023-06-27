import SaveLocationForm from './SaveLocationForm';
import {useNavigate } from 'react-router-dom';

function NewSaveLocationPage ()
{
    const history =useNavigate ();

    function addlocationHandler(locationData)
    {
        
        fetch('https://localhost:7246/api/SaveLocation/SaveSaveLocations',{
            method: 'POST',
            body: JSON.stringify(locationData),
            headers:{
                'Content-type': 'application/json'
            }
        }).then(() =>{
            history('/', { replace: true })
        });
    };
    return(
        <section>
            
            <SaveLocationForm onAddLocation={addlocationHandler} />
        </section>
    )
}
export default NewSaveLocationPage;