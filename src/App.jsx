import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { useState } from "react";

// import Homepage from "./components/Homepage/Homepage";
import Tutorial from "./components/Tutorial/Tutorial";

// import Overlay from "./components/Overlay";

function App() {
  // const [openOverlay, setOverlay] = useState(false);
  // let popRef = useRef();
  return (
    <>
      {/* <Overlay open={openOverlay} /> */}

      <div className="warper">
        <div className="frame position-relative container col-lg-4 col-md-8 col-sm-12 ">
          {/* <Homepage/> */}
          <Tutorial/>
        </div>
      </div>
    </>
  );
}

export default App;
