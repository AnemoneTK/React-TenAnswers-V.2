import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { useState } from "react";

// import Homepage from "./components/Page/Homepage/Homepage";
// import Overlay from "./components/Overlay";
import Tutorial from "./components/Page/Tutorial/Tutorial";

function App() {
  // const [openOverlay, setOverlay] = useState(false);
  // let popRef = useRef();
  return (
    <>
      {/* <Overlay open={openOverlay} /> */}

      <div className="warper">
        <div className="frame position-relative container col-lg-4 col-md-8 col-sm-12 ">
          {/* <Homepage open={(openOverlay) => setOverlay(openOverlay)} /> */}
          <Tutorial/>
        </div>
      </div>
    </>
  );
}

export default App;
