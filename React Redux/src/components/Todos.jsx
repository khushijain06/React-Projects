import {useSelector,useDispatch} from 'react-redux'
import { removeTodo,updateTodo } from '../features/todo/todoSlice'

function Todos(){
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()
    return(
        <>
        {
            todos.map((todo)=>(
                <li key={todo.id}> 
                    {todo.text}
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
                    <button onClick={()=>dispatch(updateTodo(todo.id))}>Update</button>
                </li>
            ))
        }
        </>
    )
}
export default Todos