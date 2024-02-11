import { useState } from "react";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import ModeBtn from "../ModeBtn/ModeBtn";

import TopNav from "../TopNav/TopNav";

function Homepage(props) {
  const [popup, setPopup] = useState(false);
  // let popRef = useRef();
  // useEffect(() => {
  //   let overlay = (e) => {
  //     if (!popRef.current.contains(e.target)) {
  //       setPopup(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", overlay);
  // });

  return (
    <>
      {/* <div
        className={`overlay ${popup ? "d-block" : "d-none"} 
          bg-black bg-opacity-50 z-2 position-absolute`} style={{width:"100dvw", height:"100dvh"}}
      ></div> */}
      <div className={`${props.display}`}>
      <TopNav back="d-none" hint="d-block"/>
        <Logo />
        <div className="row justify-content-center h-30">
          <div className="row col-8 m-3">
            <Button textValue="เล่นต่อ" type="Blue" />
          </div>

          <div
            className="row col-8"
            onClick={() => {
              setPopup(!popup);
              props.open(true)
            }}
          >
            <Button textValue="เริ่มเกมใหม่" type="White" />
          </div>
        </div>

        <div
          className={`popup ${popup ? "open" : "close"} 
            col-10 position-absolute bottom-0 start-50 translate-middle-x 
            rounded-5 bg-white d-flex flex-column justify-content-center align-items-center z-3`}
        >
          <ModeBtn mode="Easy" />
          <ModeBtn mode="Normal" />
          <ModeBtn mode="Hard" />
        </div>
      </div>
    </>
  );
}
export default Homepage;
