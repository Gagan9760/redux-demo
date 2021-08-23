import {DECREASE, RESET, SET, REMOVIE, SET_MOVIE, SET_CREW, REM_CREW} from './actionType'
import { INCREASE } from './actionType'
import { TEXT } from './actionType'
const intialState = {
    init : 10,
    text : 'Dummy',
    data: [],
    movie: [],
    crew: []
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
        case SET: return{
            ...state,
            data: action.payload
        }
        case REMOVIE: return{
            ...state,
            movie: []
        }
        case SET_MOVIE: return{
            ...state,
            movie: action.payload
        }

        case SET_CREW: return{
            ...state,
            crew: action.payload
        }
        case REM_CREW: return{
            ...state,
            crew: []
        }
        default : return state
    }
}

export default reducer