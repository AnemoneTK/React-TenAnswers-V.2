import { useState, useEffect, useRef } from "react";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import ModeBtn from "../ModeBtn/ModeBtn";
import TopNav from "../TopNav/TopNav";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Homepage(props) {
  const [popup, setPopup] = useState(false);
  const popRef = useRef();

  useEffect(() => {
    const screen = (e) => {
      if (!popRef.current.contains(e.target)) {
        props.open(false);
      }
    };
    document.addEventListener("mousedown", screen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.open]);

  return (
    <>
      <TopNav back="d-none" hint="d-block" />
      <Logo />
      <div className="row justify-content-center h-30">
        <div
          className="row col-8"
          onClick={() => {
            setPopup(!popup);
            props.open(true);
          }}
        >
          <Button textValue="เริ่มเกมใหม่" type="White" />
        </div>
      </div>

      <div
        className={`popup ${popup ? "open" : "close"} 
            col-10 position-absolute bottom-0 start-50 translate-middle-x 
            rounded-5 bg-white d-flex flex-column justify-content-center align-items-center z-3`}
        ref={popRef}
      >
        <div to="/game" className="easy row col-12 d-flex justify-content-center align-items-center" onClick={()=> sessionStorage.setItem("level", "Easy")}>
          <ModeBtn text="Easy" mode="easy" />
        </div>
        <div to="/game" className="normal row col-12 d-flex justify-content-center align-items-center" onClick={()=>sessionStorage.setItem("level", "Normal")}>
          <ModeBtn text="Normal" mode="normal" />
        </div>
        <div to="/game" className="hard row col-12 d-flex justify-content-center align-items-center" onClick={()=>sessionStorage.setItem("level", "Hard")}>
          <ModeBtn text="Hard" mode="hard" />
        </div>
      </div>
    </>
  );
}
export default Homepage;
