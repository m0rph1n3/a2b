import classes from './SaveLocationItem.module.css';
import Card from './layout/Card';
import { useNavigate } from 'react-router-dom';

function SaveLocationItem (props)
{
    const navigate = useNavigate();
    function goToNotes(id)
    {
        
        
        navigate('/all-notes/'+ id, { state: { id: id} });
    }


    return(
        <div>
            
            <li className={classes.li}>
                <Card>
                    
                    <div>
                        <h2 className={classes.h2}>Id {props.id}</h2>
                    </div>
                    <div>
                        <h2 className={classes.h2}>latitude {props.latitude}</h2>
                    </div>
                    <div>
                        <h2 className={classes.h2}>longitude {props.longitude}</h2>
                    </div>
                    <div>
                        <button className={classes.button} onClick={()=> goToNotes(props.id)}> To notes </button>
                        
                        
                    </div>
                </Card>
            </li>
        </div>
    )
}

export default SaveLocationItem;