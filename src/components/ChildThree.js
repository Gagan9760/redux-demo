import React from 'react'
import Middle from '../Styles/Middle'
import { useSelector,useDispatch } from 'react-redux'
import { increaser,decreaser } from '../redux/action'
const ChildThree = () => {
    const init = useSelector(state=>state.init)
    const dispatch = useDispatch()
    return (
        <Middle>
            <h1>Double implemntation</h1>
            <h1>{init}</h1>
            <button onClick={()=>dispatch(increaser())}>INCREASE</button>
            <button onClick={()=> dispatch(decreaser())}>DECREASE</button>
        </Middle>
    )
}

export default ChildThree
