import './TodoItem.css'
import { MdDelete } from "react-icons/md";

function TodoItem({item,deletetodo}){

const handledeletebtn=()=>{
    deletetodo(item.name);
}
return (
    <div className='todoitem'>
          <span className='activity'>{item.name}</span>
          <span className='date-inp'>{item.duedate}</span>
          <button className='delete-btn' onClick={handledeletebtn}>Delete<MdDelete /></button>
    </div>
)
}
export default TodoItem;