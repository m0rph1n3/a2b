import { Http,HttpResponse } from "@capacitor-community/http";

export interface SaveLocation{
    id: number;
    latitude: string;
    longitude: string;
    notes: Array<Note>
}

export interface Note{
    id: number;
    fkSaveLocation: number;
    note1: string;
}
const resourceURL = 'https://localhost:7246/api/';

export const GetAllSaveLocations =() =>{
    const options ={
        
        url : 'https://localhost:7246/api/'+'SaveLocation/all',
        Headers: {"Content-Type" : "application/json",
    "Access-Control-Allow-Origin":"http://localhost:8100" }
    };
    
    return Http.get(options);
}

export const GetNotesByLocId = (fkLocId : number) =>{
    const options ={
        url : 'https://localhost:7246/api/'+'Note/GetNotesByLocId/${fkLocId}',
        Headers: {"Content-Type" : "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8100"}
    };
    return Http.get(options);
}
export const GetSaveLocationById =(id:number) =>
{
    const options ={
        url : 'https://localhost:7246/api/'+'SaveLocation/GetSaveLocationById/${id}',
        Headers: {"Content-Type" : "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8100"}
    };
    return Http.get(options);
}
export const GetNoteById=(id:number) =>
{
    const options ={
        url : 'https://localhost:7246/api/'+'Note/GetNoteById/${id}',
        Headers: {"Content-Type" : "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8100"}
    };
    return Http.get(options);
}
export const SaveNote = (note : Note)=>{
    const options ={
        url : 'https://localhost:7246/api/'+'Note/SaveNote',
        Headers: {"Content-Type" : "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8100"},
        data: note
    };
    return Http.post(options);
}

export const SaveSaveLocations = (saveLocation : SaveLocation)=>
{
    const options ={
        url : 'https://localhost:7246/api/'+'SaveLocation/SaveSaveLocations',
        Headers: {"Content-Type" : "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8100"},
        data: saveLocation
    };
    return Http.post(options);
}
export const DeleteNote =(id : number)=>{
    const options ={
    url : 'https://localhost:7246/api/'+'Note/DeleteNote/${id}',
    Headers: {"Content-Type" : "application/json",
    "Access-Control-Allow-Origin":"http://localhost:8100"},
    }
    return Http.del(options);
}