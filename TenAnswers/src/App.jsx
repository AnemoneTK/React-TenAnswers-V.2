import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TopNav from "./components/TopNav/TopNav";
import Button from "./components/Button/Button";
import Logo from "./components/Logo/Logo";
import ModeBtn from "./components/ModePopup/ModeBtn";
import { useState, useEffect, useRef } from "react";

function App() {
  const [popup, setPopup] = useState(false);
  let popRef = useRef();
  useEffect(() => {
    let overlay = (e) => {
      if (!popRef.current.contains(e.target)) {
        setPopup(false);
      }
    };
    document.addEventListener("mousedown", overlay);
  });

  return (
    <>
      <div className="warper">
        <div
          className={`overlay ${popup ? "d-block" : "d-none"} 
          bg-black bg-opacity-50 z-2 w-100 h-100 position-absolute`}
        ></div>
        <div className="frame position-relative container col-lg-4 col-md-8 col-sm-12 ">
          <TopNav/>

          <Logo />
          <div className="row justify-content-center h-30">
            <div className="row col-8 m-3">
              <Button textValue="เล่นต่อ" type="Blue" />
            </div>

            <div
              className="row col-8"
              onClick={() => {
                setPopup(!popup);
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
            <ModeBtn mode="Easy" />
            <ModeBtn mode="Normal" />
            <ModeBtn mode="Hard" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
