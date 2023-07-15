import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const StatePage = () => {
    const title = useSelector(state => state.count)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch({
            type: 'INCREMENT',
        })
    }
    const decrement = () => {
        dispatch({
            type: 'DECREMENT',
        })
    }
    return (
        <div>
            <div style={{display:"flex",justifyContent:"center", alignItems:"center", gap:25}}>
                <button className='buttons' onClick={decrement}>+</button>
                <span className='span'>{title}</span>
                <button className='buttons' onClick={increment}>-</button>
            </div>
        </div>
    );
};

export default StatePage;