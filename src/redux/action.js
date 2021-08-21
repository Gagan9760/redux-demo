import { DECREASE } from "./actionType"
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