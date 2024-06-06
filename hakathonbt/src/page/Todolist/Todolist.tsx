import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addTodo, deleteTodo } from "../../store/reducer/reducer";

interface Todolist {
  id: number;
  nameTodo: string;
}

export default function Todolist() {
  const todolist: Todolist[] = useSelector((state: RootState) => {
    return state.todo.todo;
  });
  console.log(todolist);
  

  const dispatch = useDispatch(); 
  const [inputValue, setInputValue] = useState<string>("");
  const handleAdd = () => {
    if (inputValue === "") return
    dispatch(addTodo(inputValue)); 
  };

  const handleDelete = (id: number) => { 
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <div className="w-[100%] h-[70px] bg-yellow-300 flex items-center text-2xl font-bold text-white pl-5">
        Note App
      </div>
      <div className="w-[300px] h-[120px] bg-slate-200 m-auto mt-4 pl-5 rounded-md">
        Title
        <div className="flex mt-4 ml-2">
          <div className="ml-4">
            <input
              type="text"
              name="title"
              placeholder="Title..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="w-[25px] h-[25px] bg-yellow-300 rounded-full text-center ml-2">
            <button onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>
      {todolist.map((item, index) => (
        <div key={index} className="w-[200px] h-[80px] bg-slate-200 mt-3 ml-8 ">
          <div className="pt-2 pl-3">
            <span>{item.nameTodo}</span>
          </div>
          <div className="mt-3 ml-[170px]">
            <button onClick={() => handleDelete(item.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
