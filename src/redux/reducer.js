import {DECREASE} from './actionType'
import { INCREASE } from './actionType'
const intialState = {
    init : 10
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
        default : return state
    }
}

export default reducer