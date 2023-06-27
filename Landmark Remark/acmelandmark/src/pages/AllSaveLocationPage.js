import { Link } from 'react-router-dom';
import SaveLocationList from '../components/SaveLocationList';
import {useState , useEffect} from 'react';

// const DUMMY = [
//     {
//         id: 1,
//         latitude : 1,
//         longitude :1
//     }
// ]


function AllSaveLocationPage ()
{
    const [isLoading, setIsLoading] = useState(true);
    const [loadedLocation, setLoadedLocation] = useState([]);
    
    useEffect(() => {
        setIsLoading(true);
        fetch(
          'https://localhost:7246/api/SaveLocation/all'
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            
            loadedLocation.push(data);
            //  const locations = [];
    
            // for (const key in data) {
            //   const locations = {
            //     id: key,
            //     ...data[key]
            //   };
    
            //   loadedLocation.push(locations);
            // }
    
            setIsLoading(false);
            setLoadedLocation(loadedLocation[0]);
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
    <section>
        <div>
            <h1>All Save Locations</h1>
            <Link to='/new-save-location'>Add Location</Link>
            <ul>
                <SaveLocationList  SaveLocations ={loadedLocation}/> 
            </ul>
        </div>
        
    </section>
    )
}
export default AllSaveLocationPage;