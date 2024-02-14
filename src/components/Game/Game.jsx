/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import Button from "../Button/Button";
import GamePopup from "./GamePopup/GamePopup";
import "./Game.css";

function Game(props) {
  const [mode, setMode] = useState("");
  let { gameMode } = useParams();

  const [count, setCount] = useState(1);
  const [randomNum, setRandomNum] = useState(0);
  const [inputTXT, setInputTXT] = useState('');
  const [showInput,setShowInput] = useState('')
  const inputRef = useRef();
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    return () => {
      props.open(false);
      setRandomNum(Math.floor(Math.random() * 100));

      if (gameMode == "easy") {
        setMode("ง่าย");
      } else if (gameMode == "normal") {
        setMode("ปานกลาง");
      } else {
        setMode("ยาก");
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function checkInput() {
    // eslint-disable-next-line no-constant-condition
    let input = inputRef.current.value
    if (input >= 0 && input <= 99 && input % 1 == 0 && input != "") {
      setWarning(false)
      if(inputTXT == ''){
      setInputTXT(input)
      }else{
        setInputTXT(inputTXT + ' , ' + input)
      }
      setCount(count + 1)

    }else{
      setWarning(true)
    }
  }

  return (
    <>
      <GamePopup num={randomNum} display="close" round={count} />
      <div className={`${gameMode} row justify-content-center mt-5`}>
        {mode}
      </div>
      <div className="row justify-content-center fs-3 mb-5 text-white">
        round {count}/10
      </div>
      <div
        className={`showInput row d-flex flex-column justify-content-center align-items-center ${
          gameMode == "easy" ? "visible" : "invisible"
        }`}
      >
        <div className="row col-12 justify-content-center text-white fs-5">
          ตัวเลขที่พิมพ์ไปแล้ว
        </div>
        <div className="showTxt row col-8 justify-content-center text-center text-white text-wrap mx-4 my-2">
          {inputTXT}
        </div>
      </div>
      <div
        className={`row my-5 ${
          gameMode == "easy" || gameMode == "normal" ? "visible" : "invisible"
        }`}
      >
        <div className="showValue col-12 fs-1 bg-white d-flex justify-content-center align-items-center">
          มีค่ามากกว่า 90
        </div>
      </div>

      {/* <div className="button-container w-100 h-20 d-flex flex-column justify-content-start align-items-center"> */}
      <div className="row col-12 justify-content-center">
        <div className="row col-8 justify-content-center">
          <div
            className={`${
              warning ? "visible" : "invisible"
            } row col-12 text-center`}
          >
            <p className="text-danger text-warp fs-5">
              กรุณากรอกตัวเลขจำนวนเต็มตั้งแต่ 0-99
            </p>
          </div>
          <div className="row col-12">
            <input
              type="text"
              id="num-input"
              className="num-input row col-lg-4 col-md-8 col-sm-12 w-100 text-center mb-5"
              placeholder="กรุณากรอกตัวเลข"
              ref={inputRef}
            />
          </div>
          <button className="White text-center fs-3 rounded-pill fw-bold col-12 py-2" onClick={checkInput}>
            ยืนยัน
          </button>
        </div>
      </div>
    </>
  );

}

export default Game;
