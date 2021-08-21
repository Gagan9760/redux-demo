import { DECREASE, TEXT } from "./actionType"
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