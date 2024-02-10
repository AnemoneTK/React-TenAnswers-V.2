import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useRef, useEffect, useState } from "react";

import Homepage from "./components/Page/Homepage/Homepage";

function App() {
  return (
    <>
      {/* <Overlay open={activeOverlay} /> */}
      <div className="warper">
        <div className="frame position-relative container col-lg-4 col-md-8 col-sm-12 ">
          <Homepage/>
        </div>
      </div>
    </>
  );
}

export default App;
