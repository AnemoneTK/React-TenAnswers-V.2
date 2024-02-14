import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../Button/Button";
import GamePopup from "./GamePopup/GamePopup";
import "./Game.css";

          
function Game(props) {
  const [mode, setMode] = useState('')
  let { gameMode } = useParams()

  const [count, setCount] = useState(1);
  const [randomNum, setRandomNum] = useState(0);
  // const [inputTXT, setInputTXT] = useState('')
  useEffect(() => {
    return () => {
      props.open(false);
      setRandomNum(Math.floor(Math.random()*100))
      setCount(1)

      if(gameMode == 'easy'){
        setMode('ง่าย')
      } else if (gameMode == 'normal'){
        setMode('ปานกลาง')
      }else{
        setMode('ยาก')
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GamePopup num={randomNum} display="close" round={count} />
      <div className={`${gameMode} row justify-content-center mt-5`}>{mode}</div>
      <div className="row justify-content-center fs-3 mb-5 text-white">round {count}/10</div>
      <div className="showInput row d-flex flex-column justify-content-center align-items-center">
        <div className="row col-12 justify-content-center text-white fs-5">
            ตัวเลขที่พิมพ์ไปแล้ว
        </div>
        <div className="showTxt row col-8 justify-content-center text-center text-white text-wrap mx-4 my-2">
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        </div>
      </div>
      <div className="row my-5">
        <div className="showValue col-12 fs-1 bg-white d-flex justify-content-center align-items-center">มีค่ามากกว่า 90</div>
      </div>

      {/* <div className="button-container w-100 h-20 d-flex flex-column justify-content-start align-items-center"> */}
      <div className="row col-12 justify-content-center">
        <div className="row col-8 justify-content-center">
          <div className="hint-box row col-12 text-center">
            <p id="hint" className="hint text-danger text-warp">
              กรุณากรอกตัวเลขจำนวนเต็มตั้งแต่ 0-99
            </p>
          </div>
          <div className="row col-12">
            <input
              type="text"
              id="num-input"
              className="num-input row col-lg-4 col-md-8 col-sm-12 w-100 text-center mb-5"
              placeholder="กรุณากรอกตัวเลข"
            />
          </div>
          <Button textValue="ยืนยัน" type="White" />
        </div>
      </div>
    </>
  );
}

export default Game;
