import classes from './SaveLocationForm.module.css';
import Card from '../components/layout/Card';
import {useRef, useState} from 'react';

function SaveLocationForm(props){
    const latitudeInputRef = useRef();
    const longitudeInputRef = useRef();

    const [mylat,setMylat] = useState([]);
    const [mylng,setMyLng] = useState([]);

    function handleChangeLat(e)
    {
        console.log( e)
        setMylat(e.target.value);
    }
    function handleChangeLng(e)
    {
        setMyLng(e.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        // const latitudeEntered = latitudeInputRef.current.value;
        // const longitudeEntered = longitudeInputRef.current.value;
        
        const locationData ={
            latitude :mylat.toString(),
            longitude : mylng.toString()
        }
        console.log(locationData)
        props.onAddLocation( locationData);
    }

   
    function onClickhadler(e)
    {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        setMylat(x);
        setMyLng(y);
        
    }
    return(
        <div>
            <img id="clickme" src='melbourneMap.gif' width={470} onClick={onClickhadler}/>
            <Card>
                <form className={classes.form} onSubmit={submitHandler} >
                    <div>
                        <label htmlFor='latitude'>LATITUDE</label>
                        <input type="text" required id='latitude' value={mylat} onChange={handleChangeLat}></input>
                    </div>
                    <div>
                        <label htmlFor='longitude'>LONGITUDE</label>
                        <input type="text" required id='longitude' value={mylng} onChange={handleChangeLng}></input>
                    </div>
                    {/* <div>
                        <label htmlFor='latitude'>Latitude</label>
                        <input type="text" required id='latitude' ref={latitudeInputRef}></input>
                    </div>
                    <div>
                        <label htmlFor='longitude'>longitude</label>
                        <input type="text" required id='longitude' ref={longitudeInputRef} ></input>
                    </div> */}
                    <div className={classes.actions}>
                        <button>Add Location</button>
                    </div>
                </form>
            </Card>
            
        </div>
    )
}
export default SaveLocationForm;