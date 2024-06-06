import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface State{
    person:{
      id:number,
      name:string,
      point:number
    }[]
}

export const todoListSlice = createSlice({
  name: "Todolist2",
  initialState: {
    person:[]
  },
  reducers: {
    addTodo:(state:State,action:PayloadAction<string>)=>{
      const newTodo = {
        id:Math.floor(Math.random()*999),
        name: action.payload,
        point:0
      };
      state.person.push(newTodo);
    },
    deleteTodo:(state:State,action:PayloadAction<number>)=>{
      let index = state.person.findIndex((item) => item.id === action.payload);
      if (index !== -1){
        state.person.splice(index,1);
        }
    },
    increment:(state:State,action:PayloadAction<number>)=>{
        const index = state.person.findIndex(item=>item.id===action.payload)
            state.person[index].point+=1  
    },
    decrement:(state:State,action:PayloadAction<number>)=>{
        const index = state.person.findIndex(item=>item.id===action.payload)
        state.person[index].point-=1
    }
  },
});

// Action creators are generated for each case reducer function
export const {addTodo,deleteTodo,increment,decrement} = todoListSlice.actions;

export default todoListSlice.reducer;
