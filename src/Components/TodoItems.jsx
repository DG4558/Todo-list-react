import TodoItem from './TodoItem';
import './TodoItems.css'

function TodoItems({todo,deletetodo}){
    return (
        <div className='Todo-container'>
        <div className='todo-items'>
          {todo.map((item)=>(<TodoItem item={item} deletetodo={deletetodo}></TodoItem>))}
        </div>
      </div>

    )
}
export default TodoItems;