import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface State {
  todos: Todos[];
}
interface Todos {
  id: number;
  nameTodo: string;
  status: boolean;
}
const initialState: State = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
};
export const todoListSlice1 = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state: State, action: PayloadAction<string>) => {
      const newTodo = {
        id: Math.floor(Math.random() * 9999),
        nameTodo: action.payload,
        status: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodos: (state: State, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
      
    },
    changeStatus: (state: State, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((item) => item.id === action.payload);
      let arr = [...state.todos]
      arr[index].status= !arr[index].status
      localStorage.setItem("todos", JSON.stringify(state.todos));

    },
    editTodos: (state: State, action: PayloadAction<{ id: number; nameTodo: string }>) => {
      const index = state.todos.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.todos[index].nameTodo = action.payload.nameTodo;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});
export const { addTodos, deleteTodos,changeStatus,editTodos } = todoListSlice1.actions;

export default todoListSlice1.reducer;
