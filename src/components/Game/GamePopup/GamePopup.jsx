import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../Button/Button";
import './GamePopup.css'

function GamePopup(props) {
  return (
    <>
      {/* <div
        className={`popup ${popup ? "open" : "close"} 
        col-10 position-absolute bottom-0 start-50 translate-middle-x 
        rounded-5 bg-white d-flex flex-column justify-content-center align-items-center z-3`}
      ></div> */}
      <div
        className={`popup ${props.display} col-8 position-absolute top-50 start-50 translate-middle 
        rounded-4 bg-white d-flex flex-column justify-content-around align-items-center z-3 py-3`}
      >
        <div className="row fs-1 fw-bolder">คุณชนะ</div>

        <div className="row fs-4 mt-2">คำตอบคือ</div>
        <div className="answer row fw-bolder mb-2">{props.num}</div>
        <div className="row fs-4 mb-3">รอบที่ใช้ {props.round}/10</div>

        <Link to="/" className="row col-8">
          <Button textValue="เริ่มเกมใหม่" type="Black" />
        </Link>
      </div>
    </>
  );
}

export default GamePopup;
