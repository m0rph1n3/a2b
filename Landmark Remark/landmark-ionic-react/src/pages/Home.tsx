import MessageListItem from '../components/MessageListItem';
import SaveLocationListItem from '../components/SaveLocationListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonItem
} from '@ionic/react';
import './Home.css';
import{Note, SaveLocation,GetAllSaveLocations,GetNotesByLocId,SaveNote,DeleteNote,GetSaveLocationById,GetNoteById ,SaveSaveLocations} from '../data/landmarkservices';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [saveLocations, SetSaveLocations] = useState<SaveLocation[]>([]);

const loadAllSaveLocations = () =>
{
  GetAllSaveLocations().then((response)=>{
    SetSaveLocations(response.data);
    
    console.log(response.data)
    
  });
}
const loadAllNotesBySaveLocations = (fkLocId : number) =>
{
  GetNotesByLocId(fkLocId).then((response)=>{
    setNotes(response.data);
  });
}

const handleNoteCreate = (note: Note) =>{
  SaveNote(note).then(() =>{
    loadAllNotesBySaveLocations(note.fkSaveLocation);
  })
}
const handleSaveLocationCreate = (saveLocation: SaveLocation) =>{
  SaveSaveLocations(saveLocation).then(() =>{
    loadAllSaveLocations();
  })
}

const handleDeleteNote =( note: Note)=>
{
  DeleteNote(note.id!).then(()=>{
    GetNotesByLocId(note.fkSaveLocation).then((response)=>{
      setNotes(response.data);
    });
  })
}
  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);

    loadAllSaveLocations();

  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Landmark</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Landmark
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
        
          {saveLocations.map(s => <SaveLocationListItem key={s.id} saveLocation={s} />)}
          <IonItem routerLink="/pages/addNote/1">Add note</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
