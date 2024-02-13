import Button from "../Button/Button";
import "./Game.css";
// import { useState } from "react";

function Game() {
  // const [count, setCount] = useState(1);
  // const [randomNum, setRandomNum] = useState(0);
  // setRandomNum(Math.floor(Math.random(100)))

  return (
    <>
      <div className="mode row justify-content-center mt-5">Mode</div>
      <div className="row justify-content-center fs-2 mb-5">round 1/10</div>
      <div className="showInput row d-flex flex-column justify-content-center align-items-center">
        <div className="row col-12 justify-content-center text-white fs-5">
            ตัวเลขที่พิมพ์ไปแล้ว
        </div>
        <div className="showTxt row col-8 justify-content-center text-center text-white text-wrap mx-4 my-2">
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        </div>
      </div>
      <div className="row my-5">
        <div className="showValue col-12 bg-white text-center"> a</div>
      </div>

      {/* <div className="button-container w-100 h-20 d-flex flex-column justify-content-start align-items-center"> */}
      <div className="row col-12 justify-content-center">
        <div className="row col-8 justify-content-center">
          <div className="hint-box row col-12 text-center">
            <p id="hint" className="hint text-danger">
              กรุณากรอกตัวเลขจำนวนเต็มตั้งแต่ 0-99
            </p>
          </div>
          <div className="row col-12">
            <input
              type="text"
              id="num-input"
              className="num-input row w-100 text-center mb-5"
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
