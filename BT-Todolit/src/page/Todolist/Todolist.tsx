import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addTodos,
  changeStatus,
  deleteTodos,
  editTodos,
} from "../../store/reducer/todolist";

interface Todos {
  id: number;
  nameTodo: string;
  status: boolean;
}

export default function Todolist() {
  const [todos, setTodos] = useState<string>("");
  const [idEdit, setIdEdit] = useState<number> (0); 
  const dispatch = useDispatch();
  const dataTodo: Todos[] = useSelector((state: RootState) => {
    return state.todos.todos;
  });

  // Add a todo
  const handleAdd = () => {
    if (todos === "") return;
    dispatch(addTodos(todos));
    setTodos("");
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm("Bạn có muốn xoá"); // Added window.confirm to display a confirmation dialog
    if (confirmed) {
      dispatch(deleteTodos(id));
    }
  };

  const changeStatus1 = (id: number) => {
    dispatch(changeStatus(id));
  };

  const handleEdit = (item: Todos) => {
    setTodos(item.nameTodo);
    setIdEdit(item.id);
  };

  const handleSave = () => {
    dispatch(
      editTodos({
        id: idEdit!,
        nameTodo: todos,
      })
    );
    setTodos("");
    setIdEdit(0);
  };

  const completed = dataTodo.filter((item) => item.status);

  return (
    <div className="mt-[150px]">
      <div className="w-[950px] h-[400px] rounded bg-slate-100 m-auto mt-11">
        <div className="text-center pt-4">
          <h1 className="text-xl font-bold">Danh sách công việc</h1>
        </div>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            name="todo"
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
            className="block w-[600px] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Nhập tên công việc"
          />
          <button
            className="w-[70px] h-[40px] bg-blue-600 hover:bg-blue-300 ml-3 rounded text-white"
            onClick={idEdit  ? handleSave : handleAdd}
          >
            {idEdit  ? "Lưu" : "Thêm"}
          </button>
        </div>
        {dataTodo.map((item) => (
          <div key={item.id} className=" ml-[135px] mt-3 w-[680px] max-h-[300px] bg-white ">
            <div className="flex justify-between p-2 ">
              <div className="flex">
                <input
                  className="ml-4"
                  checked={item.status}
                  onChange={() => changeStatus1(item.id)}
                  type="checkbox"
                />
                <p className={item.status ? "text-red-600" : "text-black"}>{item.nameTodo}</p>
              </div>
              <div className="">
                <span onClick={() => handleEdit(item)}>
                  <i className="fa-solid fa-pen"></i>
                </span>
                <span onClick={() => handleDelete(item.id)} className="pl-4">
                  <i className="fa-solid fa-trash"></i>
                </span>
              </div>
            </div>
          </div>
        ))}

        <div>
          <p>
            {dataTodo.length === 0 ? (
              <div className="w-[200px] h-[200px] m-auto pt-6 ">
                <img
                  src="../../../src/assets/img/360_F_586210337_WOGOw0l7raEB8F61Muc4hWbvVcyQdk9Z.jpg"
                  alt="No tasks"
                />
              </div>
            ) : completed.length === dataTodo.length ? (
              <p className="ml-[135px] mt-3 flex items-center pl-3 w-[680px] h-[40px] bg-slate-300">
                Đã hoàn thành tất cả
              </p>
            ) : (
              <p className="ml-[135px] mt-3 flex items-center pl-3 w-[680px] h-[40px] bg-slate-300">
                Công việc đã hoàn thành: {`${completed.length}/${dataTodo.length}`}
              </p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
