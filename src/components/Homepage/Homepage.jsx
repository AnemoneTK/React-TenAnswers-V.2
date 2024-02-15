import { useState, useEffect, useRef } from "react";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import ModeBtn from "../ModeBtn/ModeBtn";
import TopNav from "../TopNav/TopNav";

function Homepage(props) {
  const [popup, setPopup] = useState(false);
  const popRef = useRef();

  useEffect(() => {
    setPopup(false);
    const screen = (e) => {
      if (!popRef.current.contains(e.target)) {
        setPopup(false);
        props.open(false);
      }
    };
    document.addEventListener("mousedown", screen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div className="easy row col-12 d-flex justify-content-center align-items-center" onClick={()=> sessionStorage.setItem("level", "easy")}>
          <ModeBtn text="ง่าย" mode="easy" />
        </div>
        <div className="normal row col-12 d-flex justify-content-center align-items-center" onClick={()=>sessionStorage.setItem("level", "normal")}>
          <ModeBtn text="ปานกลาง" mode="normal" />
        </div>
        <div className="hard row col-12 d-flex justify-content-center align-items-center" onClick={()=>sessionStorage.setItem("level", "hard")}>
          <ModeBtn text="ยาก" mode="hard" />
        </div>
      </div>
    </>
  );
}
export default Homepage;
