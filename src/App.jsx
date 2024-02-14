import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Homepage from "./components/Homepage/Homepage";
import Tutorial from "./components/Tutorial/Tutorial";
import Game from "./components/Game/Game";
import Overlay from "./components/Overlay";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [openOverlay, setOverlay] = useState(false);
  // const [mode, setMode] = useState("");

  return (
    <>
      <Overlay open={openOverlay}/>
      <div className="warper">
        <div className="frame position-relative container col-lg-4 col-md-8 col-sm-12 ">
          <HashRouter>
            <Routes>
              <Route path="https://anemonetk.github.io/React-TenAnswers-V.2/" element={<Homepage open={(openOverlay) => setOverlay(openOverlay)} />} exact />
              <Route path="https://anemonetk.github.io/React-TenAnswers-V.2/tutorial" element={<Tutorial />}/>
              <Route path="https://anemonetk.github.io/React-TenAnswers-V.2/game/:gameMode" element={<Game open={(openOverlay) => setOverlay(openOverlay)} />} />
            </Routes>
          </HashRouter>
        </div>
      </div>
    </>
  );
}

export default App;
