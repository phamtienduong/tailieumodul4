import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface State{
    todo:{
      id:number,
      nameTodo:string
    }[]
}

export const todoSlice = createSlice({
  name: "Todolist",
  initialState: {
    todo:[]
  },
  reducers: {
    addTodo:(state:State,action:PayloadAction<string>)=>{
      const newTodo = {
        id:Math.floor(Math.random()*999),
        nameTodo: action.payload
      };
      state.todo.push(newTodo);
      localStorage.setItem("todo",JSON.stringify(state.todo))
    },
    deleteTodo:(state:State,action:PayloadAction<number>)=>{
      let index = state.todo.findIndex((item) => item.id === action.payload);
      if (index !== -1){
        state.todo.splice(index,1);
        }
        localStorage.setItem("todo", JSON.stringify(state.todo));
    }
  },
});

// Action creators are generated for each case reducer function
export const {addTodo,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
