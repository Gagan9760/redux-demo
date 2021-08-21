
import Middle from '../Styles/Middle'
import {connect} from 'react-redux'
import { decreaser } from '../redux/action'

const ChildOne = (props) => {
       return (
        <Middle>
        <h1>Counter {props.init}</h1>
            <button onClick={props.decreaser}>Click</button>
        </Middle>
    )
}
const mapState = (state)=>{
   return {
       init : state.init
   } 
}

const mapDispatch = (dispatch)=>{
    return {
        decreaser : ()=> dispatch(decreaser())
    }
}

export default connect(mapState,mapDispatch)(ChildOne) 
