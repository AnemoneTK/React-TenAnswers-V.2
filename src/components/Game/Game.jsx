/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GamePopup from "./GamePopup/GamePopup";
import "./Game.css";

function Game(props) {
  const [mode, setMode] = useState("");
  const { gameMode } = useParams();

  const [count, setCount] = useState(0);
  const [randomNum, setRandomNum] = useState(0);
  const [inputTXT, setInputTXT] = useState("");
  const inputBox = document.getElementById("num-input");
  const [warning, setWarning] = useState(false);
  const [result, setResult] = useState("คุณชนะ");
  const [popup, setPopup] = useState("close");
  const [showValue, setShowValue] = useState("");

  useEffect(() => {
    return () => {
      props.open(false);
      setRandomNum(Math.floor(Math.random() * 100));
      setPopup("close");
      setInputTXT("");
      if ({gameMode} == "easy") {
        setMode("ง่าย");
      } else if ({gameMode} == "normal") {
        setMode("ปานกลาง");
      } else {
        setMode("ยาก");
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function SubmitAnswer() {
    // eslint-disable-next-line no-constant-condition
    let input = inputBox.value;
    if (input >= 0 && input <= 99 && input % 1 == 0 && input != "") {
      setWarning(false);
      CheckWin(input, count);
      ShowValue(input);
      setCount(count + 1);
      if (inputTXT == "") {
        setInputTXT(input);
      } else {
        setInputTXT(inputTXT + " , " + input);
      }
      inputBox.value = "";
    } else {
      setWarning(true);
      inputBox.value = "";
    }
    inputBox.focus();
  }

  function CheckWin(input, round) {
    if (input == randomNum) {
      setPopup("open");
      props.open(true);
    } else if (round == 9 && input != randomNum) {
      setPopup("open");
      setResult("คุณแพ้");
      props.open(true);
      inputBox.disabled = true;
    }
  }
  function ShowValue(num) {
    if (num > randomNum) {
      setShowValue("มีค่าน้อยกว่า " + num);
    } else if (num < randomNum) {
      setShowValue("มีค่ามากกว่า " + num);
    }
  }

  return (
    <>
      <GamePopup
        num={randomNum}
        display={popup}
        round={count}
        result={result}
      />
      <div className={`${{gameMode}} row justify-content-center mt-5`}>
        {mode}
      </div>
      <div className="row justify-content-center fs-3 mb-5 text-white">
        รอบที่ใช้ {count}/10
      </div>
      <div
        className={`showInput row d-flex flex-column justify-content-center align-items-center ${
          {gameMode} == "easy" ? "visible" : "invisible"
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
          {gameMode} == "easy" || gameMode == "normal" ? "visible" : "invisible"
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
              type="text"
              id="num-input"
              className="num-input row col-lg-4 col-md-8 col-sm-12 w-100 text-center mb-5"
              placeholder="กรุณากรอกตัวเลข"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  SubmitAnswer();
                }
              }}
            />
          </div>
          <button
            className="White text-center fs-3 rounded-pill fw-bold col-12 py-2"
            onClick={SubmitAnswer}
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </>
  );
}

export default Game;
