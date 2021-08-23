import { DECREASE, REMOVIE, RESET, SET, SET_MOVIE, TEXT,REM_CREW,SET_CREW } from "./actionType"
import { INCREASE } from "./actionType"

export const increaser = () => {
    return {
        type: INCREASE
    }
}

export const decreaser = () =>{
    return {
        type: DECREASE
    }
}

export const textChanger = ()=>{
    return {
        type : TEXT
    }
}

export const reset = ()=>{
    return{
        type: RESET
    }
}

export const set = (data)=>{
    return{
        type: SET,
        payload: data
    }
}

export const removie = ()=>{
    return{
        type: REMOVIE
    }
}

export const remCrew = ()=>{
    return{
        type: REM_CREW
    }
}

export const setCrew = (singledata)=>{
    return{
        type: SET_CREW,
        payload: singledata
    }
}

export const setMovie = (singledata)=>{
    return{
        type: SET_MOVIE,
        payload: singledata
    }
}