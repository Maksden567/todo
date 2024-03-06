import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


// Define a type for the slice state
export interface ItodoItem {
  id:number
  text:string
  isCompleted:boolean
  

}

interface ITodos{
  todos:ItodoItem[]
  activeIndex:number
}

interface IChange{
  id:number
  isComplete:boolean
  
}
  
  // Define the initial state using that type
  const initialState: ITodos = {
    todos:[],
    activeIndex:0
  }
  
  export const todosSlice = createSlice({
    name: 'todoSlice',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,


    reducers: {

    addTodo:(state,action: PayloadAction<ItodoItem>)=>{
  
      state.todos.push(action.payload)
    },

     deleteTodoItem:(state,action: PayloadAction<number>)=>{
        state.todos=state.todos.filter(item=>item.id!=action.payload)
     },

     copmleteTodo:(state,action:PayloadAction<IChange>)=>{

      const updatedTodos = state.todos.map(item => {
        if (item.id === action.payload.id) {
            return {
                ...item,
                isCompleted: action.payload.isComplete
            };
        }
        return item;
    });

    state.todos = updatedTodos
       
    },

    changeIndex:(state,action:PayloadAction<number>)=>{

        state.activeIndex = action.payload
     
    }




    },
  })
  
  export const {addTodo,deleteTodoItem,copmleteTodo,changeIndex} = todosSlice.actions
  

  