import React from 'react'
import Middle from '../Styles/Middle'
import { useDispatch,useSelector } from 'react-redux'
import { decreaser } from '../redux/action'


const ChildTwo = () => {
    const init = useSelector((state)=> state.init)
    const dispatch = useDispatch()
    return (
        <Middle>
            <h1>Count-2 {init}</h1>
            <button onClick={()=>dispatch(decreaser())}>Click-2</button>
        </Middle>
    )
}

export default ChildTwo
