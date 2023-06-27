import { IonButton, IonItem,IonLabel,IonNote } from "@ionic/react";   
import{Note} from "../data/landmarkservices";
import './NoteListItem.css'

interface NoteListItemProps{
    note: Note;
    onDeleteNote:(note:Note) => void;
}
const NoteListItem : React.FC<NoteListItemProps> =({note, onDeleteNote})=>
{
    return(
        <IonItem>
            <IonLabel>
                <h2 className="{'dot'}">
                    {note.Note1}
                </h2>
            </IonLabel>
            <IonButton color="danger" onClick={()=> onDeleteNote(note)}>X</IonButton>
        </IonItem>
    );
};

export default NoteListItem;