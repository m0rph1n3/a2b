import { IonButton, IonItem,IonLabel,IonNote } from "@ionic/react";   
import{ SaveLocation} from "../data/landmarkservices";
import './NoteListItem.css'

interface SaveLocationListItemProps{
    saveLocation: SaveLocation;
    
}
const SaveLocationListItem : React.FC<SaveLocationListItemProps> =({saveLocation})=>
{
    
    return(
        <IonItem >
            <div slot="start" className="dot dot-unread"></div>
            
             latitude = {saveLocation.latitude}, longetude = {saveLocation.longitude}
            
        </IonItem>
    );
};
export default SaveLocationListItem;