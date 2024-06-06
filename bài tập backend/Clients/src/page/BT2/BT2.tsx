
import { useState } from "react";
import "./BT2.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Person {
  name: string;
  id: number;
  point:0
}
export default function BT2() {
  const [newplayer,setNewPlayer]=useState("")
  const dataPlayer:any = useSelector((state:RootState)=>{
    return state.player.player
  })
  console.log(dataPlayer);
  
  const handleAdd = ()=>{

  }
  
  return (
    <div>
      <div id="container">
        <div className="header">
            <div className="header__left">
                <p className="header__left__p">Players:</p>
                <p className="header__left__p">Total Points:</p>
            </div>
            <div className="header__mid">
                <h1>Bảng điểm</h1>
            </div>
            <div className="header__right">

            </div>

        </div>
        <div className="main">
            <div className="main__render">
                <div className="main__render--left">
                    <span className="material-symbols-outlined" style={{fontSize:"30px",opacity:"0.5",marginLeft:"25px",cursor:"pointer"}}>
                    delete
                    </span>

                </div>
                <div className="main__render--mid">
                    <div className="mid__left">
                        <span className="material-symbols-outlined" style={{fontSize:"70px",opacity:"0.5"}}>
                            crowdsource
                        </span>
                    </div>
                    <div className="mid__right">
                        <p className="mid__right__text">Trần Văn Hoàng</p>
                    </div>

                </div>
                <div className="main__render--right">
                    <div className="right__left">
                        <span className="icon--decrement">-</span>
                    </div>
                    <div className="right__mid">
                        <span className="icon--point">1</span>
                    </div>
                    <div className="right__right">
                        <span className="icon--increment">+</span>
                    </div>
                </div>

            </div>
            

        </div>
        <div className="footer">
            <div className="footer__left">
                <input 
                type="text"
                className="footer__left__input"
                placeholder="Enter name"
                onChange={(e)=>setNewPlayer(e.target.value)}
                value={newplayer}
                 />
            </div>
            <div className="footer__right">
                <button onClick={handleAdd} className="btn">ADD PLAYER</button>
            </div>

        </div>

      </div>
    </div>
  );
}
