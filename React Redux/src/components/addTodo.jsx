import { useState } from "react"
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
function AddTodo(){
    const [input,setinput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setinput('')
    }
    return (
        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder="Enter your Todo.." 
            value={input} onChange={(e)=>{setinput(e.target.value)}} />
            <button type="submit">Submit</button>
        </form>
    )
}
export default AddTodo