// import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Homepage from "./components/Homepage/Homepage";
import Tutorial from "./components/Tutorial/Tutorial";
import Game from "./components/Game/Game";
import Overlay from "./components/Overlay";

function App() {
  // const [openOverlay, setOverlay] = useState(false);
  // const [mode, setMode] = useState("");

  return (
    <>
      {/* <Overlay open={openOverlay}/> */}
      <div className="warper">
        <div className="frame position-relative container col-lg-4 col-md-8 col-sm-12 ">
          <Switch>
            <Route path="/React-TenAnswers-V.2/" exact>
              <Homepage />
            </Route>
            <Route path="/tutorial">
              <Tutorial />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
