import {useRef} from 'react';

function SaveNoteForm(props)
{
    const note1Ref = useRef();

    function submitHandlerNote(event){
        event.preventDefault();
        const note1Entered = note1Ref.current.value;
        const fkLocid = props.fkLocid;

        const noteData ={
            note1 : note1Entered,
            fkSaveLocation : fkLocid
        }
        console.log('alalal ' + noteData)
        props.onAddNote(noteData);
    }

    return (
        <div>
            
            <form onSubmit={submitHandlerNote} >
                <div>
                    <label htmlFor='Note'>Note</label>
                    <textarea type="text" rows='5' required id='Note' ref={note1Ref}></textarea>
                </div>
                <div >
                    <button >Add Note</button>
                </div>
            </form>
            
        </div>
    )
}

export default SaveNoteForm;