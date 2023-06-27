import classes from './SaveLocationList.module.css';
import SaveLocationItem from './SaveLocationItem';

function SaveLocationList (props)
{
    
    return(
        <ul className={classes.list}>
            
            {props.SaveLocations.map((s) => (
                <SaveLocationItem
                    key={s.id}
                    id={s.id}
                    latitude={s.latitude}
                    longitude={s.longitude}
                />
                
            ))}
        </ul>
    )
}

export default SaveLocationList;