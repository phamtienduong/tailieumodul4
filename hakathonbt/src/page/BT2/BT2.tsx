import { useState } from "react";
import "./BT2.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addTodo, decrement, deleteTodo, increment } from "../../store/reducer/bt2";
interface Person {
  name: string;
  id: number;
  point:0
}
export default function BT2() {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();
  const listPerson: Person[] = useSelector((state: RootState) => {
    return state.todoPerson.person;
  });
  console.log(listPerson);

  const handleAddPlayer = () => {
    if (inputValue === "") return;
    dispatch(addTodo(inputValue));
  };
  const handleDelete = (id:number)=>{
    dispatch(deleteTodo(id))

  }
  const handleDecrement = (id:number)=>{
    dispatch(decrement(id))
  }
  const handleIncrement = (id:number)=>{
    dispatch(increment(id))
  }
  const TotaPlayer = listPerson.reduce((a,b)=>{
    return a+b.point
  },0)
  let max = 0
  for (let i = 0; i < listPerson.length; i++) {
    if (max < listPerson[i].point) {
      max = listPerson[i].point;
    }
  }
  return (
    <div>
      <div className="container">
        <div className="top">
          <div className="top_left">
            <p>
              <span>Players:</span>
              <span id="users">{listPerson.length}</span>
            </p>
            <p>
              <span>Total Points:</span>
              <span id="points">{TotaPlayer}</span>
            </p>
          </div>
          <div className="top_center">
            <h2>Rikkei Scoreboard</h2>
          </div>
          <div className="top_right">
            {/* <h3>Stopwatch</h3>
            <span id="clock">0</span>
            <p>
              <button className="start">START</button>
              <button className="reset">RESET</button>
            </p> */}
          </div>
        </div>
        <ul>
          {listPerson.map((item, index) => (
            <li key={index}>
              <button onClick={()=>handleDelete(item.id)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <button>
                <i className="fa-solid fa-crown" style={{opacity:item.point==max?"1":"0.5"}}></i>
              </button>
              {item.name}
              <button onClick={()=>handleDecrement(item.id)} className="decrease">-</button>
              <span>{item.point}</span>
              <button onClick={()=>handleIncrement(item.id)} className="increase">+</button>
            </li>          
          ))}
        </ul>
        <div className="botton flex">
          <input
            type="text"
            placeholder="Enter a player's name"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="w-[150px] h-[70px] bg-slate-200 ml-5">
            <button onClick={handleAddPlayer}>ADD PLAYER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
