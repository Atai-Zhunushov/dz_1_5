import React, {useState} from "react";
import {useSelector , useDispatch} from "react-redux";
function ContactsPage() {

    const title = useSelector(state => state.contactTitle)
    const dispatch = useDispatch()
    const [inputValue , setInputValue] = useState('')


    const withParams = (payload) => {
        dispatch({
            type: 'WITH_PARAMS',
            payload: payload
        })
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => withParams('hello geeks')}>change title with params</button>
            <h2>------------------------------</h2>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <button onClick={() => withParams(inputValue)}>add</button>
            <h3>--------------------------------</h3>

        </div>
    )
}

export default ContactsPage