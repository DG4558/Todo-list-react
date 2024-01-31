import { useState } from 'react';
import './AppInput.css'
import { IoIosAddCircle } from "react-icons/io";

function AppInput({handletodo}){

    const [todoinput,settodoinput]=useState("");
    const [tododate,settododate]=useState("");

    const handleinput=(event)=>{
        settodoinput(event.target.value);
    }

    const handledate=(event)=>{
        settododate(event.target.value);
    }

    const handleadd=()=>{
        handletodo(todoinput,tododate);
        settodoinput("");
        settododate("");
    }

    return (
        <div className="input-field">
            <input  className="input-text" type="text" value={todoinput} placeholder="Enter your activity here" onChange={handleinput}></input>
            <input className='input-date' type="date" value={tododate} onChange={handledate}></input>
            <button className='btn' onClick={handleadd}>Add<IoIosAddCircle /></button>
        </div>
    )
}
export default AppInput;