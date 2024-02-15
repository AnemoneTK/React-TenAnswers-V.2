/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import GamePopup from "./GamePopup/GamePopup";
import "./Game.css";

function Game() {
  const [showMode, setShowMode] = useState("");
  // const [gameMode, setGameMode] = useState("");
  const level = sessionStorage.getItem("level")
  const inputRef = useRef();
  const [inputBox, setInputBox] = useState("");
  const inputFiled = document.getElementById("num-input")

  const [count, setCount] = useState(0);
  const [randomNum, setRandomNum] = useState(0);
  const [inputTXT, setInputTXT] = useState('');

  const [warning, setWarning] = useState(false);
  const [result,setResult] = useState('คุณชนะ')
  const [popup, setPopup] = useState('close')
  const [showValue, setShowValue] = useState('')


 
  useEffect(() => {
      setRandomNum(Math.floor(Math.random() * 100));
      // setGameMode(level)
      setPopup('close')
      setInputTXT('')
      if (level == "Easy") {
        setShowMode("ง่าย");
      } else if (level == "Normal") {
        setShowMode("ปานกลาง");
      } else if (level == "Hard"){
        setShowMode("ยาก");
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  function SubmitAnswer() {
    // eslint-disable-next-line no-constant-condition
    let input = inputRef.current.value
    if (input >= 0 && input <= 99 && input % 1 == 0 && input != "") {
      setWarning(false)
      CheckWin(input,count)
      ShowValue(input)
      setCount(count + 1)
      if(inputTXT == ''){
      setInputTXT(input)
      }else{
        setInputTXT(inputTXT + ' , ' + input)
      }
    }else{
      setWarning(true)
    }
    setInputBox('')
    inputFiled.focus()
  }

  function CheckWin(input,round){
    if(input == randomNum){
      setPopup('open')
    } else if (round == 9 && input != randomNum){
      setPopup('open')
      setResult('คุณแพ้')
      inputFiled.disabled = true
    }
  }
  function ShowValue(num){
    if(num > randomNum){
      setShowValue('มีค่าน้อยกว่า '+ num)
    }else if(num < randomNum){
      setShowValue('มีค่ามากกว่า '+ num)

    }
  }

  return (
    <>
      <GamePopup num={randomNum} display={popup} round={count} result={result} />
      <div className={`${level} showMode row justify-content-center mt-5`}>
        {level}
      </div>
      <div className="round row justify-content-center fs-3 mb-3 text-white">
        รอบที่ใช้ {count}/10
      </div>
      <div
        className={`showInput row d-flex flex-column justify-content-center align-items-center ${
          level == "Easy" ? "visible" : "invisible"
        }`}
      >
        <div className="row col-12 justify-content-center text-white fs-5">
          ตัวเลขที่พิมพ์ไปแล้ว
        </div>
        <div className="showTxt row col-8 justify-content-center text-center text-white text-wrap px-4 my-2">
          {inputTXT}
        </div>
      </div>
      <div
        className={`row my-5 ${
          level == "Easy" || level == "Normal" ? "visible" : "invisible"
        }`}
      >
        <div className="showValue col-12 fs-1 bg-white d-flex justify-content-center align-items-center">
          {showValue}
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
              ref={inputRef}
              type="text"
              id="num-input"
              className="num-input row col-lg-4 col-md-8 col-sm-12 w-100 text-center mb-5"
              placeholder="กรุณากรอกตัวเลข"
              onChange={event => setInputBox(event.target.value)}
              value={inputBox}
              onKeyDown={(e) => { 
                if (e.key === "Enter") { 
                  SubmitAnswer()
                } 
            }} 
            />
          </div>
          <button className="White text-center fs-3 rounded-pill fw-bold col-12 py-2" onClick={SubmitAnswer}>
            ยืนยัน
          </button>
        </div>
      </div>
    </>
  );

}

export default Game;
