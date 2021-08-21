import {DECREASE, RESET} from './actionType'
import { INCREASE } from './actionType'
import { TEXT } from './actionType'
const intialState = {
    init : 10,
    text : 'Dummy'
}

const reducer = (state = intialState,action)=>{
    switch(action.type){
        case DECREASE: return{
            ...state,
            init : state.init - 1
        }
        case INCREASE: return {
            ...state,
            init: state.init + 1
        }
        case TEXT: return{
            ...state,
            init: state.init+100,
            text: "ADDING 100"
        }

        case RESET: return{
            ...state,
            init: 0
        }
        default : return state
    }
}

export default reducer