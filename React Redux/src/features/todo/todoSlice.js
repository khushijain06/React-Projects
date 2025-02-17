import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState= {
    todos: [{id:1,text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id: nanoid(),
                text:action.payload
        }
        state.todos.push(todo)
    },
    removeTodo:(state,action)=>{
        state.todos = state.todos.filter((todo)=>
          todo.id!==action.payload
        )
    },
    updateTodo:(state,action)=>{
        const {id,txt} = action.payload
        const existing = state.find((todo)=>todo.id === id) 
        if(existing) existing.text = txt
    },
}
})
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer