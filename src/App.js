
import { useState } from 'react';
import './App.css';
import AppInput from './Components/AppInput';
import AppName from './Components/AppName';
import TodoItems from './Components/TodoItems';
import Welcome from './Components/Welcome';

function App() {


  const todo=[];


  const [todoitem,settodoitem]=useState(todo);

  const deletetodo=(itemname)=>{
    const newtodoitem=todoitem.filter(item=>itemname!==item.name);
    settodoitem(newtodoitem);
  }

  const handletodo=(itemname,dueDate)=>{
    const newtodo=[...todoitem,
      {
        name:itemname,
        duedate:dueDate
      }
    ]
  settodoitem(newtodo);
  
  
}
  return (
    <>
    <AppName/>
    <AppInput handletodo={handletodo}/>
    {todoitem.length===0 && <Welcome/>}
    <TodoItems todo={todoitem} deletetodo={deletetodo}></TodoItems>
    </>
  )
}

export default App;
